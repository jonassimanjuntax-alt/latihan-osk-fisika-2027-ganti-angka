import React from 'react';
import { ArrowRight, CheckCircle2, Circle, Clock, Lock, RotateCcw, XCircle } from 'lucide-react';
import { PhysicsProblem, QuizMode, StudentAttempt } from '../types/physics';
import { TOPIC_ORDER } from '../utils/grader';

interface MenuLatihanPageProps {
  problems: PhysicsProblem[];
  attempts: Record<number, StudentAttempt>;
  mode: QuizMode;
  elapsedSeconds: number;
  simulationFinished: boolean;
  onSelectMode: (mode: QuizMode) => void;
  onSelectProblem: (problemId: number) => void;
  onFinishSimulation: () => void;
  onResetAll: () => void;
}

export function formatDuration(seconds: number): string {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return hrs > 0 ? `${pad(hrs)}:${pad(mins)}:${pad(secs)}` : `${pad(mins)}:${pad(secs)}`;
}

export const MenuLatihanPage: React.FC<MenuLatihanPageProps> = ({
  problems,
  attempts,
  mode,
  elapsedSeconds,
  simulationFinished,
  onSelectMode,
  onSelectProblem,
  onFinishSimulation,
  onResetAll,
}) => {
  const answeredCount = problems.filter(
    (p) => attempts[p.id] && attempts[p.id].rawInput.trim().length > 0
  ).length;
  const correctCount = problems.filter((p) => attempts[p.id]?.isCorrect === true).length;
  const progressPercent = Math.round((answeredCount / problems.length) * 100);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Workspace Toolbar */}
      <section className="rounded-2xl border border-[#E7DCDF] bg-white p-5 sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-wide text-[#7B1126]">
              Daftar Soal Olimpiade · OSK Fisika SMA
            </p>
            <h1 className="mt-1 font-display text-2xl font-bold text-[#1C1214]">
              Menu Latihan 20 Soal Terstruktur
            </h1>
            <p className="mt-1 text-sm text-[#5A4A4D]">
              Urutan soal mengikuti 6 bagian topik dari naskah sumber. Seluruh jawaban tersimpan
              otomatis saat Anda berpindah soal.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 lg:flex-nowrap lg:shrink-0">
            {/* Mode Segmented Switch */}
            <div
              role="group"
              aria-label="Mode Pengerjaan"
              className="inline-flex rounded-xl border border-[#E7DCDF] bg-[#F5F0F1] p-1"
            >
              <button
                type="button"
                onClick={() => onSelectMode('belajar')}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  mode === 'belajar'
                    ? 'bg-white text-[#7B1126] shadow-xs'
                    : 'text-[#5A4A4D] hover:text-[#1C1214]'
                }`}
              >
                Mode Belajar
              </button>
              <button
                type="button"
                onClick={() => onSelectMode('simulasi')}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  mode === 'simulasi'
                    ? 'bg-white text-[#7B1126] shadow-xs'
                    : 'text-[#5A4A4D] hover:text-[#1C1214]'
                }`}
              >
                Mode Simulasi
              </button>
            </div>

            {mode === 'simulasi' && (
              <div className="inline-flex items-center gap-2 rounded-xl border border-[#7B1126]/20 bg-[#FCECEF]/70 px-3.5 py-2 text-xs font-semibold text-[#7B1126] font-mono-num">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{formatDuration(elapsedSeconds)}</span>
              </div>
            )}

            {mode === 'simulasi' && !simulationFinished && (
              <button
                type="button"
                onClick={onFinishSimulation}
                className="rounded-xl bg-[#7B1126] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#9A1B32] whitespace-nowrap shrink-0 cursor-pointer"
              >
                Selesaikan Simulasi
              </button>
            )}

            <button
              type="button"
              onClick={onResetAll}
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#E7DCDF] bg-white px-3.5 py-2 text-xs font-semibold text-[#5A4A4D] transition-colors hover:bg-[#F5F0F1] hover:text-[#1C1214] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Reset Progres
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 border-t border-[#E7DCDF] pt-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-[#1C1214] tabular-nums">
              Progres Pengerjaan: {answeredCount} dari {problems.length} soal ({progressPercent}%)
            </span>
            <span className="text-[#5A4A4D] tabular-nums">
              {mode === 'simulasi' && !simulationFinished
                ? 'Mode Simulasi aktif · Pembahasan terkunci hingga selesai'
                : `Jawaban benar terverifikasi: ${correctCount} soal`}
            </span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#F5F0F1]">
            <div
              className="h-full rounded-full bg-[#7B1126] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </section>

      {/* Topic Sections */}
      <div className="mt-8 space-y-8">
        {TOPIC_ORDER.map((topic, topicIdx) => {
          const topicProblems = problems.filter((p) => p.topic === topic);
          return (
            <section key={topic} aria-labelledby={`topic-heading-${topicIdx}`}>
              <div className="mb-3 flex items-baseline justify-between border-b border-[#E7DCDF] pb-2">
                <h2
                  id={`topic-heading-${topicIdx}`}
                  className="font-display text-lg font-bold text-[#1C1214]"
                >
                  <span className="mr-2 font-mono-num text-sm text-[#7B1126]">
                    0{topicIdx + 1}.
                  </span>
                  {topic}
                </h2>
                <span className="text-xs text-[#5A4A4D] tabular-nums">
                  {topicProblems.length} soal
                </span>
              </div>

              <div className="grid gap-3.5 sm:grid-cols-2">
                {topicProblems.map((problem) => {
                  const attempt = attempts[problem.id];
                  const hasInput = Boolean(attempt && attempt.rawInput.trim().length > 0);
                  const isLockedSim = mode === 'simulasi' && !simulationFinished;

                  let statusLabel = 'Belum Dikerjakan';
                  let statusClass = 'text-[#5A4A4D]';
                  let StatusIcon = Circle;

                  if (isLockedSim && hasInput) {
                    statusLabel = `Tersimpan (${attempt.rawInput})`;
                    statusClass = 'text-[#7B1126]';
                    StatusIcon = Lock;
                  } else if (attempt?.checked) {
                    if (attempt.isCorrect) {
                      statusLabel = `Benar (${attempt.rawInput})`;
                      statusClass = 'text-[#047857]';
                      StatusIcon = CheckCircle2;
                    } else {
                      statusLabel = `Belum Tepat (${attempt.rawInput || '-'})`;
                      statusClass = 'text-[#B91C1C]';
                      StatusIcon = XCircle;
                    }
                  } else if (hasInput) {
                    statusLabel = `Draf (${attempt!.rawInput})`;
                    statusClass = 'text-[#B45309]';
                    StatusIcon = Circle;
                  }

                  return (
                    <button
                      key={problem.id}
                      type="button"
                      onClick={() => onSelectProblem(problem.id)}
                      className="group flex flex-col justify-between rounded-xl border border-[#E7DCDF] bg-white p-4 text-left transition-colors hover:border-[#7B1126]/50 hover:bg-[#FAF5F6] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B1126]"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 text-xs text-[#5A4A4D]">
                          <span className="font-mono-num font-bold text-[#7B1126]">
                            Soal {problem.id}
                          </span>
                          <span className={`inline-flex items-center gap-1 font-semibold ${statusClass}`}>
                            <StatusIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            <span>{statusLabel}</span>
                          </span>
                        </div>
                        <h3 className="mt-1.5 font-display text-sm font-bold text-[#1C1214] group-hover:text-[#7B1126]">
                          {problem.title}
                        </h3>
                      </div>

                      <div className="mt-3 flex items-center justify-between text-xs text-[#5A4A4D]">
                        <span>
                          Isian singkat {problem.unit ? `· Satuan ${problem.unit}` : '· Tak berdimensi'}
                        </span>
                        <span className="inline-flex items-center gap-1 font-semibold text-[#7B1126]">
                          Kerjakan
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
};
