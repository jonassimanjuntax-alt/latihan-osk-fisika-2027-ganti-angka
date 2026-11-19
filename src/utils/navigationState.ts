import { AppPage, QuizMode } from '../types/physics';

const VALID_PAGES: readonly AppPage[] = [
  'landing',
  'menu',
  'practice',
  'explanation',
  'results',
];

export function isValidAppPage(value: unknown): value is AppPage {
  return typeof value === 'string' && (VALID_PAGES as readonly string[]).includes(value);
}

export interface HashRouteMatch {
  page: AppPage;
  problemId?: number;
}

export function parseHashRoute(hash: string, maxProblemId: number): HashRouteMatch | null {
  const normalized = hash.replace(/^#/, '').trim().toLowerCase();
  if (!normalized) return null;

  if (normalized === 'beranda') return { page: 'landing' };
  if (normalized === 'daftar-soal') return { page: 'menu' };
  if (normalized === 'hasil') return { page: 'results' };

  const soalMatch = /^soal-(\d+)$/.exec(normalized);
  if (soalMatch) {
    const id = Number(soalMatch[1]);
    if (Number.isInteger(id) && id >= 1 && id <= maxProblemId) {
      return { page: 'practice', problemId: id };
    }
    return null;
  }

  const explMatch = /^pembahasan-(\d+)$/.exec(normalized);
  if (explMatch) {
    const id = Number(explMatch[1]);
    if (Number.isInteger(id) && id >= 1 && id <= maxProblemId) {
      return { page: 'explanation', problemId: id };
    }
    return null;
  }

  return null;
}

export function buildHashRoute(page: AppPage, problemId: number): string {
  switch (page) {
    case 'landing':
      return '#beranda';
    case 'menu':
      return '#daftar-soal';
    case 'practice':
      return `#soal-${problemId}`;
    case 'explanation':
      return `#pembahasan-${problemId}`;
    case 'results':
      return '#hasil';
  }
}

export function clampPageForMode(
  page: AppPage,
  mode: QuizMode,
  simulationFinished: boolean
): AppPage {
  if (page === 'explanation' && mode === 'simulasi' && !simulationFinished) {
    return 'practice';
  }
  return page;
}

export interface ResolveInitialNavInput {
  hash: string;
  search: string;
  persistedPage?: unknown;
  persistedProblemId: number;
  mode: QuizMode;
  simulationFinished: boolean;
  maxProblemId: number;
}

export function resolveInitialNavigation(input: ResolveInitialNavInput): {
  page: AppPage;
  problemId: number;
} {
  const hashMatch = parseHashRoute(input.hash, input.maxProblemId);
  if (hashMatch) {
    return {
      page: clampPageForMode(hashMatch.page, input.mode, input.simulationFinished),
      problemId: hashMatch.problemId ?? input.persistedProblemId,
    };
  }

  if (isValidAppPage(input.persistedPage) && input.persistedPage !== 'landing') {
    return {
      page: clampPageForMode(input.persistedPage, input.mode, input.simulationFinished),
      problemId: input.persistedProblemId,
    };
  }

  const params = new URLSearchParams(input.search);
  if (params.get('autostart') === '1') {
    return {
      page: 'menu',
      problemId: input.persistedProblemId,
    };
  }

  return {
    page: 'landing',
    problemId: input.persistedProblemId,
  };
}
