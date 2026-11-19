import { useCallback, useEffect, useRef, useState } from 'react';
import { NarrationKey } from '../types/physics';

export type NarratorStatus = 'idle' | 'playing' | 'paused';

export const NARRATION_LABELS: Record<NarrationKey, string> = {
  soal: 'Baca Soal',
  stimulus: 'Jelaskan Stimulus',
  fbd: 'Jelaskan Free Body Diagram',
  pengetahuanAwal: 'Jelaskan Pengetahuan Awal',
  prinsip: 'Jelaskan Prinsip Fisika',
  rumus: 'Baca Rumus',
  langkah: 'Jelaskan Langkah Penyelesaian',
  jawabanAkhir: 'Jelaskan Jawaban Akhir',
};

interface UseNarratorReturn {
  status: NarratorStatus;
  activeSection: NarrationKey | null;
  activeText: string;
  rate: number;
  isSupported: boolean;
  setRate: (rate: number) => void;
  speakSection: (key: NarrationKey, text: string) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
}

/**
 * Splits long Indonesian narration into clean sentence chunks so browser speechSynthesis
 * plays smoothly without cutting out mid-paragraph and inserts natural pauses.
 */
function splitIntoSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export function useNarrator(): UseNarratorReturn {
  const [status, setStatus] = useState<NarratorStatus>('idle');
  const [activeSection, setActiveSection] = useState<NarrationKey | null>(null);
  const [activeText, setActiveText] = useState<string>('');
  const [rate, setRateState] = useState<number>(1.0);
  const [isSupported] = useState<boolean>(
    () => typeof window !== 'undefined' && 'speechSynthesis' in window
  );

  const sessionIdRef = useRef<number>(0);
  const sentencesRef = useRef<string[]>([]);
  const indexRef = useRef<number>(0);
  const rateRef = useRef<number>(1.0);
  const fallbackTimerRef = useRef<number | null>(null);
  const currentKeyRef = useRef<NarrationKey | null>(null);
  const currentFullTextRef = useRef<string>('');

  const clearFallbackTimer = useCallback(() => {
    if (fallbackTimerRef.current !== null) {
      window.clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
  }, []);

  const pickIndonesianVoice = useCallback((): SpeechSynthesisVoice | null => {
    if (!isSupported) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) return null;
    return (
      voices.find((v) => v.lang.toLowerCase() === 'id-id') ||
      voices.find((v) => v.lang.toLowerCase().startsWith('id')) ||
      voices.find((v) => v.name.toLowerCase().includes('indonesia')) ||
      voices[0] ||
      null
    );
  }, [isSupported]);

  const stop = useCallback(() => {
    sessionIdRef.current += 1;
    clearFallbackTimer();
    if (isSupported) {
      window.speechSynthesis.cancel();
    }
    sentencesRef.current = [];
    indexRef.current = 0;
    currentKeyRef.current = null;
    currentFullTextRef.current = '';
    setStatus('idle');
    setActiveSection(null);
    setActiveText('');
  }, [clearFallbackTimer, isSupported]);

  const speakNextChunk = useCallback(
    (sessionId: number) => {
      if (sessionId !== sessionIdRef.current) return;
      const chunks = sentencesRef.current;
      const idx = indexRef.current;

      if (idx >= chunks.length) {
        setStatus('idle');
        setActiveSection(null);
        setActiveText('');
        return;
      }

      const sentence = chunks[idx];

      if (!isSupported || typeof SpeechSynthesisUtterance === 'undefined') {
        // Fallback timed reading progress when browser lacks SpeechSynthesis
        const approxMs = Math.max(1800, (sentence.length * 55) / rateRef.current);
        fallbackTimerRef.current = window.setTimeout(() => {
          if (sessionId !== sessionIdRef.current) return;
          indexRef.current += 1;
          speakNextChunk(sessionId);
        }, approxMs);
        return;
      }

      const voices = window.speechSynthesis.getVoices();
      if (voices.length === 0) {
        // Headless or voice-less environment fallback so player state remains interactive
        const approxMs = Math.max(2200, (sentence.length * 55) / rateRef.current);
        fallbackTimerRef.current = window.setTimeout(() => {
          if (sessionId !== sessionIdRef.current) return;
          indexRef.current += 1;
          speakNextChunk(sessionId);
        }, approxMs);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(sentence);
      const idVoice = pickIndonesianVoice();
      if (idVoice) {
        utterance.voice = idVoice;
      }
      utterance.lang = 'id-ID';
      utterance.rate = rateRef.current;
      utterance.pitch = 1.02;

      utterance.onend = () => {
        if (sessionId !== sessionIdRef.current) return;
        indexRef.current += 1;
        // Brief natural pause between concepts/sentences
        fallbackTimerRef.current = window.setTimeout(() => {
          speakNextChunk(sessionId);
        }, 180);
      };

      utterance.onerror = () => {
        if (sessionId !== sessionIdRef.current) return;
        setStatus('idle');
        setActiveSection(null);
      };

      window.speechSynthesis.speak(utterance);
    },
    [isSupported, pickIndonesianVoice]
  );

  const speakSection = useCallback(
    (key: NarrationKey, text: string) => {
      sessionIdRef.current += 1;
      const newSession = sessionIdRef.current;
      clearFallbackTimer();

      if (isSupported) {
        window.speechSynthesis.cancel();
      }

      const chunks = splitIntoSentences(text);
      sentencesRef.current = chunks;
      indexRef.current = 0;
      currentKeyRef.current = key;
      currentFullTextRef.current = text;

      setActiveSection(key);
      setActiveText(text);
      setStatus('playing');

      speakNextChunk(newSession);
    },
    [clearFallbackTimer, isSupported, speakNextChunk]
  );

  const pause = useCallback(() => {
    if (status !== 'playing') return;
    clearFallbackTimer();
    if (isSupported) {
      window.speechSynthesis.pause();
    }
    setStatus('paused');
  }, [clearFallbackTimer, isSupported, status]);

  const resume = useCallback(() => {
    if (status !== 'paused') return;
    setStatus('playing');
    if (isSupported && window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    } else {
      speakNextChunk(sessionIdRef.current);
    }
  }, [isSupported, speakNextChunk, status]);

  const setRate = useCallback(
    (newRate: number) => {
      rateRef.current = newRate;
      setRateState(newRate);
      // Restart active sentence cleanly at new speed if currently playing
      if (status === 'playing' && currentKeyRef.current && currentFullTextRef.current) {
        const currentIdx = indexRef.current;
        const key = currentKeyRef.current;
        const fullText = currentFullTextRef.current;
        sessionIdRef.current += 1;
        const newSession = sessionIdRef.current;
        clearFallbackTimer();
        if (isSupported) {
          window.speechSynthesis.cancel();
        }
        sentencesRef.current = splitIntoSentences(fullText);
        indexRef.current = Math.min(currentIdx, Math.max(0, sentencesRef.current.length - 1));
        setActiveSection(key);
        setActiveText(fullText);
        speakNextChunk(newSession);
      }
    },
    [clearFallbackTimer, isSupported, speakNextChunk, status]
  );

  useEffect(() => {
    return () => {
      sessionIdRef.current += 1;
      clearFallbackTimer();
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [clearFallbackTimer]);

  return {
    status,
    activeSection,
    activeText,
    rate,
    isSupported,
    setRate,
    speakSection,
    pause,
    resume,
    stop,
  };
}
