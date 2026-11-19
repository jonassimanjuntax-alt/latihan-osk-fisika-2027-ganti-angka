import React from 'react';
import { ArrowRight, BookOpen, Calculator, Clock, Volume2 } from 'lucide-react';
import { QuizMode } from '../types/physics';
import { TOPIC_ORDER } from '../utils/grader';

interface LandingPageProps {
  totalQuestions: number;
  answeredCount: number;
  mode: QuizMode;
  onSelectMode: (mode: QuizMode) => void;
  onStartPractice: () => void;
  onOpenQuestionList: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  totalQuestions,
  answeredCount,
  mode,
  onSelectMode,
  onStartPractice,
  onOpenQuestionList,
}) => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
        {/* Left: Primary Editorial Hero */}
        <section className="flex flex-col justify-between lg:col-span-7">
          <div>
            <p className="text-sm font-semibold tracking-wide text-[#7B1126]">
              Mister Jo · Olimpiade Sains Fisika · Tingkat Kota/Kabupaten
            </p>
            <h1
              className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-[#1C1214] sm:text-5xl"
              style={{ textWrap: 'balance' }}
            >
              Latihan Numerik OSK Fisika SMA Berstandar Buku Teks Olimpiade
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5A4A4D] sm:text-lg">
              &ldquo;Think Scientifically. Solve Precisely. Be an Olympiad Champion.&rdquo;
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5A4A4D]">
              Kumpulan {totalQuestions} soal latihan isian singkat numerik yang disusun setara dengan
              naskah OSK Fisika SMA 2026. Setiap soal dilengkapi diagram fisis akurat, sistem
              evaluasi ketelitian satu angka desimal, narator suara berbahasa Indonesia, serta
              pembahasan bertahap dari konsep dasar hingga analisis olimpiade.
            </p>
          </div>

          {/* Mode Selection + Primary CTA */}
          <div className="mt-8 space-y-5">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide text-[#5A4A4D]">
                Pilih Mode Latihan
              </p>
              <div
                role="group"
                aria-label="Pilih mode latihan"
                className="inline-flex rounded-xl border border-[#E7DCDF] bg-[#F5F0F1] p-1"
              >
                <button
                  type="button"
                  onClick={() => onSelectMode('belajar')}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
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
                  className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    mode === 'simulasi'
                      ? 'bg-white text-[#7B1126] shadow-xs'
                      : 'text-[#5A4A4D] hover:text-[#1C1214]'
                  }`}
                >
                  Mode Simulasi Olimpiade
                </button>
              </div>
              <p className="mt-2 text-xs text-[#5A4A4D]">
                {mode === 'belajar'
                  ? 'Mode Belajar: bebas membuka pembahasan, FBD, dan narator suara kapan saja tanpa batas waktu.'
                  : 'Mode Simulasi: dilengkapi penghitung waktu; pembahasan dan kunci dikunci hingga simulasi selesai.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onStartPractice}
                className="inline-flex items-center gap-2 rounded-xl bg-[#7B1126] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#9A1B32] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B1126]"
              >
                <span>{answeredCount > 0 ? 'Lanjutkan Latihan' : 'Mulai Latihan'}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={onOpenQuestionList}
                className="inline-flex items-center gap-2 rounded-xl border border-[#E7DCDF] bg-white px-5 py-3.5 text-sm font-semibold text-[#1C1214] transition-colors hover:bg-[#F5F0F1] whitespace-nowrap shrink-0 cursor-pointer"
              >
                Lihat Daftar {totalQuestions} Soal
              </button>
            </div>
          </div>
        </section>

        {/* Right: Structured Summary Card */}
        <aside className="lg:col-span-5">
          <div className="flex h-full flex-col justify-between rounded-2xl border border-[#E7DCDF] bg-white p-6 sm:p-8">
            <div>
              <h2 className="font-display text-lg font-bold text-[#1C1214]">
                Struktur Paket Latihan
              </h2>
              <p className="mt-1 text-sm text-[#5A4A4D]">
                Urutan soal dan cakupan materi sesuai naskah sumber OSK Fisika SMA 2026.
              </p>

              <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-[#E7DCDF] py-5">
                <div>
                  <dt className="text-xs font-medium text-[#5A4A4D]">Jumlah Soal</dt>
                  <dd className="mt-1 font-display text-2xl font-bold text-[#7B1126] tabular-nums">
                    {totalQuestions} Soal
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-[#5A4A4D]">Format Jawaban</dt>
                  <dd className="mt-1 font-display text-lg font-bold text-[#1C1214]">
                    Isian Singkat
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-[#5A4A4D]">Ketelitian Desimal</dt>
                  <dd className="mt-1 font-mono-num text-sm font-semibold text-[#1C1214]">
                    1 angka (koma)
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-[#5A4A4D]">Progres Tersimpan</dt>
                  <dd className="mt-1 font-mono-num text-sm font-semibold text-[#1C1214]">
                    {answeredCount}/{totalQuestions} dikerjakan
                  </dd>
                </div>
              </dl>

              <div className="mt-6">
                <h3 className="text-xs font-semibold tracking-wide text-[#5A4A4D]">
                  6 Topik Bahasan Utama
                </h3>
                <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-[#1C1214]">
                  {TOPIC_ORDER.map((topic, i) => (
                    <li key={topic} className="flex items-baseline gap-2">
                      <span className="font-mono-num text-xs font-semibold text-[#7B1126]">
                        0{i + 1}.
                      </span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 border-t border-[#E7DCDF] pt-5 text-xs leading-relaxed text-[#5A4A4D]">
              Catatan penulisan jawaban: gunakan koma sebagai pemisah desimal dan tuliskan tepat
              satu angka di belakang koma (contoh: <span className="font-mono-num font-semibold text-[#1C1214]">10,5</span> atau{' '}
              <span className="font-mono-num font-semibold text-[#1C1214]">-5,5</span>).
            </div>
          </div>
        </aside>
      </div>

      {/* 4 Key Pedagogical Pillars */}
      <section className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-[#E7DCDF] bg-white p-5">
          <Calculator className="h-5 w-5 text-[#7B1126]" aria-hidden="true" />
          <h3 className="mt-3 font-display text-sm font-bold text-[#1C1214]">
            Evaluasi Numerik Presisi
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-[#5A4A4D]">
            Pemeriksaan otomatis untuk angka desimal koma, tanda positif-negatif, dan toleransi
            pembulatan ilmiah.
          </p>
        </div>

        <div className="rounded-xl border border-[#E7DCDF] bg-white p-5">
          <BookOpen className="h-5 w-5 text-[#7B1126]" aria-hidden="true" />
          <h3 className="mt-3 font-display text-sm font-bold text-[#1C1214]">
            Pembahasan 8 Tahap
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-[#5A4A4D]">
            Mulai dari pengetahuan awal, diagram FBD, penurunan rumus, hingga pemeriksaan dimensi
            dan arti fisis.
          </p>
        </div>

        <div className="rounded-xl border border-[#E7DCDF] bg-white p-5">
          <Volume2 className="h-5 w-5 text-[#7B1126]" aria-hidden="true" />
          <h3 className="mt-3 font-display text-sm font-bold text-[#1C1214]">
            Narator Suara Mister Jo
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-[#5A4A4D]">
            Bimbingan suara berbahasa Indonesia di setiap bagian, membaca simbol fisika secara
            alami tanpa kode mentah.
          </p>
        </div>

        <div className="rounded-xl border border-[#E7DCDF] bg-white p-5">
          <Clock className="h-5 w-5 text-[#7B1126]" aria-hidden="true" />
          <h3 className="mt-3 font-display text-sm font-bold text-[#1C1214]">
            Belajar &amp; Simulasi Ujian
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-[#5A4A4D]">
            Belajar santai dengan pembahasan terbuka atau uji kesiapan Anda dengan pengatur waktu
            simulasi olimpiade.
          </p>
        </div>
      </section>
    </main>
  );
};
