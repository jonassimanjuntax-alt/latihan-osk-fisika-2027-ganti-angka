import React from 'react';
import { Award, CheckCircle2, Compass, Layers, Lightbulb, Sigma } from 'lucide-react';
import { NarrationKey, PhysicsProblem } from '../types/physics';
import { NarratorStatus } from '../hooks/useNarrator';
import { NarrateButton } from './NarratorBar';
import { MathBlock, MathText } from './MathText';
import { FbdDiagram } from './FbdDiagram';

interface ExplanationPanelProps {
  problem: PhysicsProblem;
  activeSection: NarrationKey | null;
  narratorStatus: NarratorStatus;
  onSpeakSection: (key: NarrationKey, text: string) => void;
  onStopNarrator: () => void;
}

/**
 * 8-Stage Olympiad Textbook Explanation ("Pemula Menuju Ahli")
 * Strictly enforces every requested pedagogical section and per-section TTS narrator buttons.
 */
export const ExplanationPanel: React.FC<ExplanationPanelProps> = ({
  problem,
  activeSection,
  narratorStatus,
  onSpeakSection,
  onStopNarrator,
}) => {
  const { explanation, narration } = problem;

  return (
    <article
      aria-label={`Pembahasan Soal ${problem.id}`}
      className="space-y-6 rounded-2xl border border-[#E7DCDF] bg-white p-5 sm:p-8"
    >
      <header className="border-b border-[#E7DCDF] pb-5">
        <p className="text-xs font-semibold tracking-wide text-[#7B1126]">
          Pembahasan Buku Teks Olimpiade · Pemula Menuju Ahli
        </p>
        <h2 className="mt-1 font-display text-xl font-bold text-[#1C1214] sm:text-2xl">
          Soal {problem.id}: {problem.title}
        </h2>
      </header>

      {/* 1. Memahami Permasalahan */}
      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 font-display text-base font-bold text-[#1C1214]">
            <Compass className="h-4 w-4 text-[#7B1126]" aria-hidden="true" />
            <span>1. Memahami Permasalahan</span>
          </h3>
        </div>
        <div className="space-y-2 text-sm leading-relaxed text-[#2C2022]">
          {explanation.memahamiPermasalahan.map((para, i) => (
            <p key={i}>
              <MathText text={para} />
            </p>
          ))}
        </div>
      </section>

      <hr className="border-[#E7DCDF]" />

      {/* 2. Pengetahuan Awal yang Harus Dikuasai */}
      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 font-display text-base font-bold text-[#1C1214]">
            <Lightbulb className="h-4 w-4 text-[#7B1126]" aria-hidden="true" />
            <span>2. Pengetahuan Awal yang Harus Dikuasai</span>
          </h3>
          <NarrateButton
            sectionKey="pengetahuanAwal"
            label="Jelaskan Pengetahuan Awal"
            activeSection={activeSection}
            status={narratorStatus}
            onSpeak={() => onSpeakSection('pengetahuanAwal', narration.pengetahuanAwal)}
            onStop={onStopNarrator}
          />
        </div>
        <ul className="space-y-2 text-sm leading-relaxed text-[#2C2022] list-disc pl-5">
          {explanation.pengetahuanAwal.map((item, i) => (
            <li key={i}>
              <MathText text={item} />
            </li>
          ))}
        </ul>
      </section>

      <hr className="border-[#E7DCDF]" />

      {/* 3. Visualisasi Fisika dan Free Body Diagram (FBD) */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 font-display text-base font-bold text-[#1C1214]">
            <Layers className="h-4 w-4 text-[#7B1126]" aria-hidden="true" />
            <span>3. Visualisasi Fisika dan Free Body Diagram (FBD)</span>
          </h3>
          <NarrateButton
            sectionKey="fbd"
            label="Jelaskan Free Body Diagram"
            activeSection={activeSection}
            status={narratorStatus}
            onSpeak={() => onSpeakSection('fbd', narration.fbd)}
            onStop={onStopNarrator}
          />
        </div>

        <figure className="rounded-xl border border-[#E7DCDF] bg-[#FAF8F8] p-4">
          <FbdDiagram problemId={problem.id} />
          <figcaption className="mt-3 text-center text-xs text-[#5A4A4D]">
            {problem.fbdCaption}
          </figcaption>
        </figure>

        <div className="space-y-2 text-sm leading-relaxed text-[#2C2022]">
          {explanation.visualisasiFbd.map((para, i) => (
            <p key={i}>
              <MathText text={para} />
            </p>
          ))}
        </div>
      </section>

      <hr className="border-[#E7DCDF]" />

      {/* 4. Identifikasi Prinsip dan Hukum Fisika */}
      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-display text-base font-bold text-[#1C1214]">
            4. Identifikasi Prinsip dan Hukum Fisika
          </h3>
          <NarrateButton
            sectionKey="prinsip"
            label="Jelaskan Prinsip Fisika"
            activeSection={activeSection}
            status={narratorStatus}
            onSpeak={() => onSpeakSection('prinsip', narration.prinsip)}
            onStop={onStopNarrator}
          />
        </div>
        <div className="space-y-2 text-sm leading-relaxed text-[#2C2022]">
          {explanation.prinsipHukum.map((para, i) => (
            <p key={i}>
              <MathText text={para} />
            </p>
          ))}
        </div>
      </section>

      <hr className="border-[#E7DCDF]" />

      {/* 5. Rumus Utama dan Penurunan Persamaan */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 font-display text-base font-bold text-[#1C1214]">
            <Sigma className="h-4 w-4 text-[#7B1126]" aria-hidden="true" />
            <span>5. Rumus Utama dan Penurunan Persamaan</span>
          </h3>
          <NarrateButton
            sectionKey="rumus"
            label="Baca Rumus"
            activeSection={activeSection}
            status={narratorStatus}
            onSpeak={() => onSpeakSection('rumus', narration.rumus)}
            onStop={onStopNarrator}
          />
        </div>

        <div className="space-y-4">
          {explanation.rumusUtama.map((formula, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#7B1126]/25 bg-[#FCECEF]/50 p-4 sm:p-5"
            >
              <p className="text-xs font-bold tracking-wide text-[#7B1126]">
                {formula.label}
              </p>
              <div className="my-2 rounded-lg bg-white px-4 py-2 border border-[#E7DCDF]">
                <MathBlock latex={formula.latex} />
              </div>
              <p className="text-sm text-[#1C1214]">
                <MathText text={formula.explanation} />
              </p>
              <ul className="mt-2.5 space-y-1 text-xs text-[#5A4A4D]">
                {formula.symbols.map((sym, sIdx) => (
                  <li key={sIdx}>
                    <MathText text={sym} />
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs font-medium text-[#7B1126]">
                Syarat berlaku: <MathText text={formula.validity} />
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-2 text-sm leading-relaxed text-[#2C2022]">
          {explanation.penurunanPersamaan.map((para, i) => (
            <p key={i}>
              <MathText text={para} />
            </p>
          ))}
        </div>
      </section>

      <hr className="border-[#E7DCDF]" />

      {/* 6. Penyelesaian Langkah demi Langkah */}
      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-display text-base font-bold text-[#1C1214]">
            6. Penyelesaian Langkah demi Langkah
          </h3>
          <NarrateButton
            sectionKey="langkah"
            label="Jelaskan Langkah Penyelesaian"
            activeSection={activeSection}
            status={narratorStatus}
            onSpeak={() => onSpeakSection('langkah', narration.langkah)}
            onStop={onStopNarrator}
          />
        </div>
        <ol className="space-y-2.5 text-sm leading-relaxed text-[#2C2022] list-decimal pl-5">
          {explanation.langkahPenyelesaian.map((step, i) => (
            <li key={i} className="pl-1">
              <MathText text={step} />
            </li>
          ))}
        </ol>
      </section>

      <hr className="border-[#E7DCDF]" />

      {/* 7. Jawaban Akhir */}
      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 font-display text-base font-bold text-[#1C1214]">
            <Award className="h-4 w-4 text-[#7B1126]" aria-hidden="true" />
            <span>7. Jawaban Akhir</span>
          </h3>
          <NarrateButton
            sectionKey="jawabanAkhir"
            label="Jelaskan Jawaban Akhir"
            activeSection={activeSection}
            status={narratorStatus}
            onSpeak={() => onSpeakSection('jawabanAkhir', narration.jawabanAkhir)}
            onStop={onStopNarrator}
          />
        </div>
        <div className="rounded-xl bg-[#7B1126] p-5 text-white">
          <p className="text-xs font-medium text-white/80">
            Hasil Akhir (Pembulatan 1 Angka Desimal)
          </p>
          <p className="mt-1 font-mono-num text-3xl font-bold tracking-tight">
            {problem.answerFormatted}
            {problem.unit ? ` ${problem.unit}` : ''}
          </p>
          <p className="mt-2 text-sm text-white/90">{explanation.jawabanAkhirCatatan}</p>
        </div>
      </section>

      <hr className="border-[#E7DCDF]" />

      {/* 8. Pemeriksaan dan Interpretasi Fisika */}
      <section className="space-y-3">
        <h3 className="flex items-center gap-2 font-display text-base font-bold text-[#1C1214]">
          <CheckCircle2 className="h-4 w-4 text-[#047857]" aria-hidden="true" />
          <span>8. Pemeriksaan dan Interpretasi Fisika</span>
        </h3>
        <div className="space-y-2 text-sm leading-relaxed text-[#2C2022]">
          {explanation.pemeriksaanFisika.map((para, i) => (
            <p key={i}>
              <MathText text={para} />
            </p>
          ))}
        </div>
      </section>
    </article>
  );
};
