import React from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import { PhysicsProblem, PhysicsTopic, QuizMode, QuizResults, StudentAttempt } from '../types/physics';
import { formatDuration } from './MenuLatihanPage';

interface ResultsPageProps {
  problems: PhysicsProblem[];
  attempts: Record<number, StudentAttempt>;
  results: QuizResults;
  mode: QuizMode;
  elapsedSeconds: number;
  onReviewProblem: (problemId: number) => void;
  onBackToMenu: () => void;
  onResetAll: () => void;
}

const TOPIC_ADVICE: Record<PhysicsTopic, string> = {
  Kinematika:
    'Tinjau kembali hubungan luas kurva v–t, kesimetrian gerak parabola sudut komplementer, dan kecepatan relatif antarpartikel.',
  'Hukum Newton':
    'Latih penguraian gaya pada FBD bidang miring, kerangka acuan dipercepat (gaya fiktif), dan kendala tali pada sistem katrol ganda.',
  'Usaha dan Energi':
    'Perdalam perkalian titik usaha vektor, kekekalan energi mekanik pegas, dan metode integral untuk sistem bermassa variabel.',
  'Momentum Linear':
    'Perhatikan teorema impuls–momentum pada arah sejajar bidang licin, Hukum III Newton, dan syarat tumbukan elastis bertingkat.',
  'Dinamika Rotasi':
    'Kuasai identitas perkalian silang BAC–CAB, syarat kesetimbangan torka benda tegar, dan presesi giroskop τ = Ω L.',
  Osilasi:
    'Pelajari ulang frekuensi osilasi pendulum fisis dan penentuan fase gerak harmonik sederhana dari simpangan pegas relaks nol.',
};

export const ResultsPage: React.FC<ResultsPageProps> = ({
  problems,
  attempts,
  results,
  mode,
  elapsedSeconds,
  onReviewProblem,
  onBackToMenu,
  onResetAll,
}) => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 space-y-8">
      {/* Top Score Overview */}
      <section className="rounded-2xl border border-[#E7DCDF] bg-white p-6 sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-wide text-[#7B1126]">
              Laporan Evaluasi · Mister Jo OSK Fisika
            </p>
            <h1 className="mt-1 font-display text-2xl font-bold text-[#1C1214] sm:text-3xl">
              Hasil Latihan Olimpiade Fisika
            </h1>
            <p className="mt-1.5 text-sm text-[#5A4A4D]">
              Rekap capaian numerik Anda untuk seluruh {results.totalQuestions} soal OSK Fisika SMA.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onBackToMenu}
              className="rounded-xl border border-[#E7DCDF] bg-white px-4 py-2.5 text-xs font-semibold text-[#1C1214] transition-colors hover:bg-[#F5F0F1] cursor-pointer"
            >
              Kembali ke Daftar Soal
            </button>
            <button
              type="button"
              onClick={onResetAll}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#7B1126] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#9A1B32] cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Mulai Sesi Baru
            </button>
          </div>
        </div>

        <dl className="mt-7 grid gap-4 border-t border-[#E7DCDF] pt-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-[#7B1126]/20 bg-[#FCECEF]/60 p-4">
            <dt className="flex items-center gap-1.5 text-xs font-semibold text-[#7B1126]">
              <Award className="h-4 w-4" aria-hidden="true" />
              Nilai Akhir
            </dt>
            <dd className="mt-2 font-display text-3xl font-extrabold text-[#7B1126] tabular-nums">
              {results.score.toFixed(1).replace('.', ',')}
            </dd>
            <p className="mt-1 text-xs text-[#5A4A4D] tabular-nums">
              Persentase keberhasilan: {results.successPercent.toFixed(1).replace('.', ',')}%
            </p>
          </div>

          <div className="rounded-xl border border-[#E7DCDF] bg-[#FAF8F8] p-4">
            <dt className="flex items-center gap-1.5 text-xs font-semibold text-[#047857]">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              Jawaban Benar
            </dt>
            <dd className="mt-2 font-display text-3xl font-extrabold text-[#1C1214] tabular-nums">
              {results.correctCount}
            </dd>
            <p className="mt-1 text-xs text-[#5A4A4D] tabular-nums">
              dari {results.totalQuestions} soal
            </p>
          </div>

          <div className="rounded-xl border border-[#E7DCDF] bg-[#FAF8F8] p-4">
            <dt className="flex items-center gap-1.5 text-xs font-semibold text-[#B91C1C]">
              <XCircle className="h-4 w-4" aria-hidden="true" />
              Belum Tepat / Salah
            </dt>
            <dd className="mt-2 font-display text-3xl font-extrabold text-[#1C1214] tabular-nums">
              {results.incorrectCount}
            </dd>
            <p className="mt-1 text-xs text-[#5A4A4D] tabular-nums">
              Belum dijawab: {results.unansweredCount} soal
            </p>
          </div>

          <div className="rounded-xl border border-[#E7DCDF] bg-[#FAF8F8] p-4">
            <dt className="flex items-center gap-1.5 text-xs font-semibold text-[#5A4A4D]">
              <Clock className="h-4 w-4" aria-hidden="true" />
              Mode &amp; Waktu
            </dt>
            <dd className="mt-2 font-display text-xl font-bold text-[#1C1214]">
              {mode === 'simulasi' ? 'Simulasi Olimpiade' : 'Mode Belajar'}
            </dd>
            <p className="mt-1 font-mono-num text-xs text-[#5A4A4D]">
              Durasi tercatat: {formatDuration(elapsedSeconds)}
            </p>
          </div>
        </dl>
      </section>

      {/* Topic Breakdown Table & Study Recommendations */}
      <div className="grid gap-6 lg:grid-cols-12">
        <section className="rounded-2xl border border-[#E7DCDF] bg-white p-6 lg:col-span-7">
          <h2 className="font-display text-lg font-bold text-[#1C1214]">
            Capaian per Bidang Materi
          </h2>
          <p className="mt-1 text-xs text-[#5A4A4D]">
            Rincian ketepatan jawaban Anda pada keenam topik OSK Fisika.
          </p>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#E7DCDF] text-xs font-semibold text-[#5A4A4D]">
                  <th className="py-2.5 pr-4">Topik Fisika</th>
                  <th className="px-3 py-2.5 text-right">Benar</th>
                  <th className="px-3 py-2.5 text-right">Salah</th>
                  <th className="pl-3 py-2.5 text-right">Akurasi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E7DCDF]">
                {results.topicBreakdowns.map((tb) => (
                  <tr key={tb.topic}>
                    <td className="py-3 pr-4 font-medium text-[#1C1214]">{tb.topic}</td>
                    <td className="px-3 py-3 text-right font-mono-num text-[#047857] font-semibold">
                      {tb.correct}/{tb.total}
                    </td>
                    <td className="px-3 py-3 text-right font-mono-num text-[#B91C1C]">
                      {tb.incorrect}
                    </td>
                    <td className="pl-3 py-3 text-right font-mono-num font-semibold text-[#1C1214]">
                      {tb.accuracyPercent.toFixed(1).replace('.', ',')}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-2xl border border-[#E7DCDF] bg-white p-6 lg:col-span-5">
          <h2 className="flex items-center gap-2 font-display text-lg font-bold text-[#1C1214]">
            <BookOpen className="h-4 w-4 text-[#7B1126]" aria-hidden="true" />
            <span>Rekomendasi Materi Belajar</span>
          </h2>
          {results.recommendedTopics.length === 0 ? (
            <p className="mt-3 text-sm leading-relaxed text-[#047857]">
              Luar biasa! Seluruh topik telah Anda kuasai dengan ketepatan 100%. Pertahankan
              ketelitian langkah penurunan rumus dan pembulatan Anda!
            </p>
          ) : (
            <ul className="mt-4 space-y-4">
              {results.recommendedTopics.map((topic) => (
                <li
                  key={topic}
                  className="rounded-xl border border-[#E7DCDF] bg-[#FAF8F8] p-3.5"
                >
                  <p className="text-xs font-bold text-[#7B1126]">{topic}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#5A4A4D]">
                    {TOPIC_ADVICE[topic]}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      {/* Per-Question Answer Key & Quick Pembahasan Review */}
      <section className="rounded-2xl border border-[#E7DCDF] bg-white p-6">
        <h2 className="font-display text-lg font-bold text-[#1C1214]">
          Tinjauan Jawaban &amp; Akses Pembahasan Lengkap
        </h2>
        <p className="mt-1 text-xs text-[#5A4A4D]">
          Pilih soal mana pun untuk membuka kembali pembahasan 8 tahap beserta diagram FBD dan
          narator Mister Jo.
        </p>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#E7DCDF] text-xs font-semibold text-[#5A4A4D]">
                <th className="py-2.5 pr-3">No</th>
                <th className="px-3 py-2.5">Topik &amp; Judul Soal</th>
                <th className="px-3 py-2.5">Jawaban Anda</th>
                <th className="px-3 py-2.5">Kunci Jawaban</th>
                <th className="px-3 py-2.5">Status</th>
                <th className="pl-3 py-2.5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7DCDF]">
              {problems.map((p) => {
                const a = attempts[p.id];
                const val = a?.rawInput.trim() || '-';
                const isOk = a?.isCorrect === true;
                return (
                  <tr key={p.id}>
                    <td className="py-3 pr-3 font-mono-num font-bold text-[#7B1126]">{p.id}</td>
                    <td className="px-3 py-3">
                      <p className="font-medium text-[#1C1214]">{p.title}</p>
                      <p className="text-xs text-[#5A4A4D]">{p.topic}</p>
                    </td>
                    <td className="px-3 py-3 font-mono-num text-[#1C1214]">
                      {val} {val !== '-' && p.unit ? p.unit : ''}
                    </td>
                    <td className="px-3 py-3 font-mono-num font-semibold text-[#1C1214]">
                      {p.answerFormatted} {p.unit}
                    </td>
                    <td className="px-3 py-3 text-xs font-semibold">
                      {val === '-' ? (
                        <span className="text-[#5A4A4D]">Belum Dijawab</span>
                      ) : isOk ? (
                        <span className="inline-flex items-center gap-1 text-[#047857]">
                          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                          Benar
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[#B91C1C]">
                          <XCircle className="h-3.5 w-3.5" aria-hidden="true" />
                          Belum Tepat
                        </span>
                      )}
                    </td>
                    <td className="pl-3 py-3 text-right">
                      <button
                        type="button"
                        onClick={() => onReviewProblem(p.id)}
                        className="inline-flex items-center gap-1 rounded-lg border border-[#7B1126]/30 bg-[#FCECEF]/60 px-3 py-1.5 text-xs font-semibold text-[#7B1126] hover:bg-[#FCECEF] whitespace-nowrap cursor-pointer"
                      >
                        Pembahasan
                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};
