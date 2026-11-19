import React from 'react';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Eraser,
  Lock,
  Maximize2,
} from 'lucide-react';
import { NarrationKey, PhysicsProblem, QuizMode, StudentAttempt } from '../types/physics';
import { NarratorStatus } from '../hooks/useNarrator';
import { NarrateButton } from './NarratorBar';
import { MathText } from './MathText';
import { StimulusDiagram } from './StimulusDiagram';
import { ExplanationPanel } from './ExplanationPanel';
import { formatDuration } from './MenuLatihanPage';

interface QuestionWorkspacePageProps {
  problems: PhysicsProblem[];
  currentProblem: PhysicsProblem;
  attempt: StudentAttempt | undefined;
  allAttempts: Record<number, StudentAttempt>;
  mode: QuizMode;
  elapsedSeconds: number;
  simulationFinished: boolean;
  isExplanationOpen: boolean;
  isDedicatedExplanationView: boolean;
  activeNarrationKey: NarrationKey | null;
  narratorStatus: NarratorStatus;
  onSelectProblem: (problemId: number) => void;
  onInputChange: (problemId: number, value: string) => void;
  onCheckAnswer: (problemId: number) => void;
  onClearAnswer: (problemId: number) => void;
  onToggleExplanation: () => void;
  onOpenDedicatedExplanation: () => void;
  onBackToPractice: () => void;
  onBackToMenu: () => void;
  onFinishSimulation: () => void;
  onSpeakSection: (key: NarrationKey, text: string) => void;
  onStopNarrator: () => void;
}

export const QuestionWorkspacePage: React.FC<QuestionWorkspacePageProps> = ({
  problems,
  currentProblem,
  attempt,
  allAttempts,
  mode,
  elapsedSeconds,
  simulationFinished,
  isExplanationOpen,
  isDedicatedExplanationView,
  activeNarrationKey,
  narratorStatus,
  onSelectProblem,
  onInputChange,
  onCheckAnswer,
  onClearAnswer,
  onToggleExplanation,
  onOpenDedicatedExplanation,
  onBackToPractice,
  onBackToMenu,
  onFinishSimulation,
  onSpeakSection,
  onStopNarrator,
}) => {
  const isLockedSim = mode === 'simulasi' && !simulationFinished;
  const rawInput = attempt?.rawInput ?? '';
  const answeredCount = problems.filter(
    (p) => allAttempts[p.id] && allAttempts[p.id].rawInput.trim().length > 0
  ).length;

  const currentIdx = problems.findIndex((p) => p.id === currentProblem.id);
  const prevProblem = currentIdx > 0 ? problems[currentIdx - 1] : null;
  const nextProblem = currentIdx < problems.length - 1 ? problems[currentIdx + 1] : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAnswer(currentProblem.id);
  };

  if (isDedicatedExplanationView && !isLockedSim) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onBackToPractice}
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#E7DCDF] bg-white px-4 py-2 text-xs font-semibold text-[#1C1214] transition-colors hover:bg-[#F5F0F1] cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Kembali ke Pengerjaan Soal {currentProblem.id}
          </button>

          <div className="flex items-center gap-2">
            {prevProblem && (
              <button
                type="button"
                onClick={() => onSelectProblem(prevProblem.id)}
                className="rounded-xl border border-[#E7DCDF] bg-white px-3.5 py-2 text-xs font-semibold text-[#1C1214] hover:bg-[#F5F0F1] cursor-pointer"
              >
                Soal {prevProblem.id}
              </button>
            )}
            {nextProblem && (
              <button
                type="button"
                onClick={() => onSelectProblem(nextProblem.id)}
                className="rounded-xl bg-[#7B1126] px-3.5 py-2 text-xs font-semibold text-white hover:bg-[#9A1B32] cursor-pointer"
              >
                Soal {nextProblem.id}
              </button>
            )}
          </div>
        </div>

        {/* Quick Question Summary + Narrator */}
        <section className="rounded-2xl border border-[#E7DCDF] bg-white p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#5A4A4D]">
            <span>
              {currentProblem.topic} · Soal {currentProblem.id} dari {problems.length}
            </span>
            <NarrateButton
              sectionKey="soal"
              label="Baca Soal"
              activeSection={activeNarrationKey}
              status={narratorStatus}
              onSpeak={() => onSpeakSection('soal', currentProblem.narration.soal)}
              onStop={onStopNarrator}
            />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[#1C1214]">
            <MathText text={currentProblem.questionText} />
          </p>
        </section>

        <ExplanationPanel
          problem={currentProblem}
          activeSection={activeNarrationKey}
          narratorStatus={narratorStatus}
          onSpeakSection={onSpeakSection}
          onStopNarrator={onStopNarrator}
        />
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:py-8">
      {/* Top Workspace Strip */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onBackToMenu}
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#E7DCDF] bg-white px-3.5 py-2 text-xs font-semibold text-[#1C1214] transition-colors hover:bg-[#F5F0F1] cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Daftar Soal
          </button>
          <span className="text-xs font-medium text-[#5A4A4D] tabular-nums">
            {mode === 'belajar' ? 'Mode Belajar' : 'Mode Simulasi Olimpiade'} · Progres:{' '}
            {answeredCount}/{problems.length}
          </span>
        </div>

        {mode === 'simulasi' && (
          <div className="flex items-center gap-2.5">
            <div className="inline-flex items-center gap-1.5 rounded-xl border border-[#7B1126]/20 bg-[#FCECEF]/70 px-3.5 py-2 text-xs font-semibold text-[#7B1126] font-mono-num">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{formatDuration(elapsedSeconds)}</span>
            </div>
            {!simulationFinished && (
              <button
                type="button"
                onClick={onFinishSimulation}
                className="rounded-xl bg-[#7B1126] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#9A1B32] cursor-pointer"
              >
                Selesaikan Simulasi
              </button>
            )}
          </div>
        )}
      </div>

      {/* Number Navigator 1-20 */}
      <nav
        aria-label="Navigasi Nomor Soal"
        className="mb-6 rounded-2xl border border-[#E7DCDF] bg-white p-3.5 sm:p-4"
      >
        <div className="flex flex-wrap gap-1.5">
          {problems.map((p) => {
            const a = allAttempts[p.id];
            const isCurrent = p.id === currentProblem.id;
            const hasVal = Boolean(a && a.rawInput.trim().length > 0);

            let btnStyle =
              'border-[#E7DCDF] bg-white text-[#5A4A4D] hover:border-[#7B1126]/40 hover:text-[#1C1214]';
            if (isCurrent) {
              btnStyle = 'border-[#7B1126] bg-[#7B1126] text-white font-bold';
            } else if (!isLockedSim && a?.checked && a.isCorrect === true) {
              btnStyle = 'border-[#047857]/40 bg-[#ECFDF5] text-[#047857] font-semibold';
            } else if (!isLockedSim && a?.checked && a.isCorrect === false) {
              btnStyle = 'border-[#B91C1C]/40 bg-[#FEF2F2] text-[#B91C1C] font-semibold';
            } else if (hasVal) {
              btnStyle = 'border-[#7B1126]/35 bg-[#FCECEF] text-[#7B1126] font-semibold';
            }

            return (
              <button
                key={p.id}
                type="button"
                onClick={() => onSelectProblem(p.id)}
                aria-label={`Buka Soal ${p.id}`}
                aria-current={isCurrent ? 'page' : undefined}
                className={`h-9 w-9 rounded-lg border text-xs font-mono-num transition-colors cursor-pointer ${btnStyle}`}
              >
                {p.id}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Problem Card */}
      <section className="rounded-2xl border border-[#E7DCDF] bg-white p-5 sm:p-8">
        {/* Header Metadata (Zero-Pill Rule: clean unboxed text with separators) */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E7DCDF] pb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#7B1126]">
              <span>Soal {currentProblem.id} dari {problems.length}</span>
              <span aria-hidden="true">·</span>
              <span>{currentProblem.topic}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#5A4A4D]">Isian Singkat Numerik</span>
            </div>
            <h1 className="mt-1.5 font-display text-xl font-bold text-[#1C1214] sm:text-2xl">
              {currentProblem.title}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <NarrateButton
              sectionKey="soal"
              label="Baca Soal"
              activeSection={activeNarrationKey}
              status={narratorStatus}
              onSpeak={() => onSpeakSection('soal', currentProblem.narration.soal)}
              onStop={onStopNarrator}
            />
            <NarrateButton
              sectionKey="stimulus"
              label="Jelaskan Stimulus"
              activeSection={activeNarrationKey}
              status={narratorStatus}
              onSpeak={() => onSpeakSection('stimulus', currentProblem.narration.stimulus)}
              onStop={onStopNarrator}
            />
          </div>
        </div>

        {/* Stimulus Text & Diagram */}
        <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-start">
          <div className={currentProblem.hasStimulusDiagram ? 'lg:col-span-7' : 'lg:col-span-12'}>
            <div className="text-base leading-relaxed text-[#1C1214]">
              <MathText text={currentProblem.questionText} />
            </div>

            {/* Answer Form */}
            <form onSubmit={handleSubmit} className="mt-7 rounded-xl border border-[#E7DCDF] bg-[#FAF8F8] p-5">
              <label
                htmlFor="numeric-answer-input"
                className="block text-sm font-semibold text-[#1C1214]"
              >
                {currentProblem.promptEnding}
              </label>
              <p className="mt-1 text-xs text-[#5A4A4D]">
                Tuliskan tepat <strong>satu angka di belakang koma</strong> menggunakan tanda koma{' '}
                <span className="font-mono-num font-semibold text-[#1C1214]">(,)</span>, misalnya{' '}
                <span className="font-mono-num font-semibold text-[#1C1214]">12,5</span> atau{' '}
                <span className="font-mono-num font-semibold text-[#1C1214]">-5,5</span>.
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-3">
                <div className="flex items-center rounded-xl border border-[#D4C2C6] bg-white px-3.5 py-2.5 focus-within:border-[#7B1126] focus-within:ring-2 focus-within:ring-[#7B1126]/15">
                  <input
                    id="numeric-answer-input"
                    type="text"
                    inputMode="decimal"
                    value={rawInput}
                    onChange={(e) => onInputChange(currentProblem.id, e.target.value)}
                    placeholder="contoh: 10,5"
                    className="w-36 bg-transparent font-mono-num text-lg font-semibold text-[#1C1214] placeholder:text-[#A39396] focus:outline-none"
                  />
                  {currentProblem.unit && (
                    <span className="ml-2 border-l border-[#E7DCDF] pl-2.5 text-sm font-semibold text-[#5A4A4D]">
                      {currentProblem.unit}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="rounded-xl bg-[#7B1126] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#9A1B32] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B1126]"
                >
                  {isLockedSim ? 'Simpan Jawaban' : 'Periksa Jawaban'}
                </button>

                <button
                  type="button"
                  onClick={() => onClearAnswer(currentProblem.id)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[#E7DCDF] bg-white px-4 py-3 text-sm font-semibold text-[#5A4A4D] transition-colors hover:bg-[#F5F0F1] hover:text-[#1C1214] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Eraser className="h-4 w-4" aria-hidden="true" />
                  Hapus Jawaban
                </button>
              </div>

              {/* Feedback Banner */}
              {attempt?.checked && (
                <div
                  role="status"
                  className={`mt-4 flex items-start gap-2.5 rounded-xl border p-3.5 text-sm ${
                    isLockedSim
                      ? 'border-[#7B1126]/25 bg-[#FCECEF] text-[#7B1126]'
                      : attempt.isCorrect
                      ? 'border-[#047857]/30 bg-[#ECFDF5] text-[#047857]'
                      : 'border-[#B91C1C]/30 bg-[#FEF2F2] text-[#B91C1C]'
                  }`}
                >
                  {isLockedSim ? (
                    <Lock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  ) : attempt.isCorrect ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  ) : (
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  )}
                  <span className="font-medium">
                    {isLockedSim
                      ? 'Jawaban tersimpan untuk evaluasi akhir simulasi.'
                      : attempt.feedbackMessage}
                  </span>
                </div>
              )}
            </form>
          </div>

          {/* Stimulus Diagram */}
          {currentProblem.hasStimulusDiagram && (
            <figure className="rounded-xl border border-[#E7DCDF] bg-[#FAF8F8] p-4 lg:col-span-5">
              <StimulusDiagram problemId={currentProblem.id} />
              {currentProblem.stimulusCaption && (
                <figcaption className="mt-3 text-center text-xs leading-relaxed text-[#5A4A4D]">
                  {currentProblem.stimulusCaption}
                </figcaption>
              )}
            </figure>
          )}
        </div>

        {/* Bottom Controls: Prev/Next & Pembahasan Toggle */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#E7DCDF] pt-5">
          <div className="flex flex-wrap items-center gap-2.5">
            {isLockedSim ? (
              <div className="inline-flex items-center gap-2 rounded-xl border border-[#E7DCDF] bg-[#F5F0F1] px-4 py-2.5 text-xs font-semibold text-[#5A4A4D]">
                <Lock className="h-3.5 w-3.5 text-[#7B1126]" aria-hidden="true" />
                <span>Pembahasan dikunci selama Mode Simulasi berlangsung</span>
              </div>
            ) : (
              <>
                <button
                  type="button"
                  onClick={onToggleExplanation}
                  aria-expanded={isExplanationOpen}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#7B1126] bg-white px-5 py-2.5 text-xs font-bold tracking-wide text-[#7B1126] transition-colors hover:bg-[#FCECEF] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  <span>{isExplanationOpen ? 'TUTUP PEMBAHASAN' : 'BUKA PEMBAHASAN'}</span>
                  {isExplanationOpen ? (
                    <ChevronUp className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={onOpenDedicatedExplanation}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[#E7DCDF] bg-white px-4 py-2.5 text-xs font-semibold text-[#5A4A4D] transition-colors hover:bg-[#F5F0F1] hover:text-[#1C1214] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Halaman Pembahasan</span>
                </button>
              </>
            )}
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              disabled={!prevProblem}
              onClick={() => prevProblem && onSelectProblem(prevProblem.id)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#E7DCDF] bg-white px-4 py-2.5 text-xs font-semibold text-[#1C1214] transition-colors hover:bg-[#F5F0F1] disabled:cursor-not-allowed disabled:opacity-40 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              Soal Sebelumnya
            </button>

            <button
              type="button"
              disabled={!nextProblem}
              onClick={() => nextProblem && onSelectProblem(nextProblem.id)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#7B1126] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#9A1B32] disabled:cursor-not-allowed disabled:opacity-40 whitespace-nowrap shrink-0 cursor-pointer"
            >
              Soal Berikutnya
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* Expandable 8-Stage Textbook Explanation (Default closed!) */}
      {isExplanationOpen && !isLockedSim && (
        <div className="mt-6">
          <ExplanationPanel
            problem={currentProblem}
            activeSection={activeNarrationKey}
            narratorStatus={narratorStatus}
            onSpeakSection={onSpeakSection}
            onStopNarrator={onStopNarrator}
          />
        </div>
      )}
    </main>
  );
};
