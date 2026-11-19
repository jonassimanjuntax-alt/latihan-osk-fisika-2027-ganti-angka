import React from 'react';
import { AppPage, QuizMode } from '../types/physics';

interface TopNavProps {
  currentPage: AppPage;
  mode: QuizMode;
  simulationFinished: boolean;
  onNavigate: (page: AppPage) => void;
  onPrimaryAction: () => void;
}

/**
 * Follows the strict 3-zone Top Bar Contract:
 * [Brand title, one line] — [4 nav links, single-line] — [1 primary CTA]
 */
export const TopNav: React.FC<TopNavProps> = ({
  currentPage,
  mode,
  simulationFinished,
  onNavigate,
  onPrimaryAction,
}) => {
  const navItems: { id: AppPage; label: string }[] = [
    { id: 'landing', label: 'Beranda' },
    { id: 'menu', label: 'Daftar Soal' },
    { id: 'practice', label: 'Pengerjaan' },
    { id: 'results', label: 'Hasil' },
  ];

  const ctaLabel =
    currentPage === 'landing'
      ? 'Mulai Latihan'
      : mode === 'simulasi' && !simulationFinished
      ? 'Selesaikan Simulasi'
      : 'Lihat Hasil';

  return (
    <header className="sticky top-0 z-40 border-b border-[#E7DCDF] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-3 py-3 sm:gap-8 sm:px-6 sm:py-3.5">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#beranda"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('landing');
          }}
          className="font-display text-base sm:text-lg font-extrabold tracking-tight text-[#7B1126] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B1126]"
        >
          Mister Jo
        </a>

        {/* Zone 2: Clean single-line text links */}
        <nav aria-label="Navigasi Utama" className="flex items-center gap-3 sm:gap-7">
          {navItems.map((item) => {
            const isActive =
              currentPage === item.id ||
              (currentPage === 'explanation' && item.id === 'practice');
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`border-b-2 py-1 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B1126] ${
                  isActive
                    ? 'border-[#7B1126] font-semibold text-[#7B1126]'
                    : 'border-transparent text-[#5A4A4D] hover:text-[#1C1214]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center shrink-0">
          <button
            type="button"
            onClick={onPrimaryAction}
            className="rounded-lg bg-[#7B1126] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#9A1B32] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B1126]"
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    </header>
  );
};
