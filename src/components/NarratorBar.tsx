import React from 'react';
import { Pause, Play, Square, Volume2 } from 'lucide-react';
import { NarrationKey } from '../types/physics';
import { NARRATION_LABELS, NarratorStatus } from '../hooks/useNarrator';

interface NarratorBarProps {
  status: NarratorStatus;
  activeSection: NarrationKey | null;
  activeText: string;
  rate: number;
  onSetRate: (rate: number) => void;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
}

const SPEED_OPTIONS = [
  { value: 0.85, label: '0,85x' },
  { value: 1.0, label: '1,0x' },
  { value: 1.15, label: '1,15x' },
  { value: 1.3, label: '1,3x' },
];

export const NarratorBar: React.FC<NarratorBarProps> = ({
  status,
  activeSection,
  activeText,
  rate,
  onSetRate,
  onPause,
  onResume,
  onStop,
}) => {
  if (status === 'idle' || !activeSection) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Kontrol Narator Suara Mister Jo"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-4xl rounded-xl border border-[#7B1126]/25 bg-white/95 p-3 shadow-lg backdrop-blur-md sm:inset-x-6 sm:p-3.5"
    >
      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-start gap-2.5 sm:gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#7B1126] text-white sm:h-9 sm:w-9">
            <Volume2 className="h-4 w-4" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-[#7B1126]">
              <span>Narator Mister Jo</span>
              <span aria-hidden="true">·</span>
              <span>{NARRATION_LABELS[activeSection]}</span>
              <span aria-hidden="true">·</span>
              <span>{status === 'playing' ? 'Sedang Membimbing' : 'Dijeda'}</span>
            </div>
            <p className="mt-0.5 hidden sm:line-clamp-2 text-xs leading-relaxed text-[#5A4A4D]">
              {activeText}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {status === 'playing' ? (
            <button
              type="button"
              onClick={onPause}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#E7DCDF] bg-[#FAF8F8] px-3 py-1.5 text-xs font-semibold text-[#1C1214] transition-colors hover:bg-[#F5F0F1] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Pause className="h-3.5 w-3.5" aria-hidden="true" />
              Jeda
            </button>
          ) : (
            <button
              type="button"
              onClick={onResume}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#7B1126] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#9A1B32] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Play className="h-3.5 w-3.5" aria-hidden="true" />
              Lanjutkan
            </button>
          )}

          <button
            type="button"
            onClick={onStop}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#E7DCDF] bg-white px-3 py-1.5 text-xs font-semibold text-[#7B1126] transition-colors hover:bg-[#FCECEF] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Square className="h-3.5 w-3.5" aria-hidden="true" />
            Hentikan
          </button>

          <label className="sr-only" htmlFor="narrator-speed-select">
            Kecepatan Narator
          </label>
          <select
            id="narrator-speed-select"
            value={rate}
            onChange={(e) => onSetRate(Number(e.target.value))}
            aria-label="Kecepatan Narator"
            className="rounded-lg border border-[#E7DCDF] bg-white px-2.5 py-1.5 text-xs font-medium text-[#1C1214] focus:border-[#7B1126] focus:outline-none tabular-nums cursor-pointer"
          >
            {SPEED_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

interface NarrateButtonProps {
  sectionKey: NarrationKey;
  label: string;
  activeSection: NarrationKey | null;
  status: NarratorStatus;
  onSpeak: () => void;
  onStop: () => void;
}

export const NarrateButton: React.FC<NarrateButtonProps> = ({
  sectionKey,
  label,
  activeSection,
  status,
  onSpeak,
  onStop,
}) => {
  const isThisActive = activeSection === sectionKey && status !== 'idle';

  return (
    <button
      type="button"
      onClick={isThisActive ? onStop : onSpeak}
      className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
        isThisActive
          ? 'bg-[#7B1126] text-white hover:bg-[#9A1B32]'
          : 'border border-[#7B1126]/25 bg-[#FCECEF]/70 text-[#7B1126] hover:bg-[#FCECEF]'
      }`}
    >
      {isThisActive ? (
        <>
          <Square className="h-3 w-3" aria-hidden="true" />
          <span>Hentikan Suara</span>
        </>
      ) : (
        <>
          <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};
