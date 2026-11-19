import { useEffect, useMemo, useRef, useState } from 'react';
import { PHYSICS_PROBLEMS, getProblemById } from './data/problems';
import { AppPage, QuizMode, StudentAttempt } from './types/physics';
import { calculateResults, gradeAnswer } from './utils/grader';
import {
  buildHashRoute,
  clampPageForMode,
  isValidAppPage,
  parseHashRoute,
  resolveInitialNavigation,
} from './utils/navigationState';
import { useNarrator } from './hooks/useNarrator';
import { TopNav } from './components/TopNav';
import { LandingPage } from './components/LandingPage';
import { MenuLatihanPage } from './components/MenuLatihanPage';
import { QuestionWorkspacePage } from './components/QuestionWorkspacePage';
import { ResultsPage } from './components/ResultsPage';
import { NarratorBar } from './components/NarratorBar';

const STORAGE_KEY = 'misterjo_osk_fisika_2026_v1';

interface PersistedState {
  page: AppPage;
  mode: QuizMode;
  currentProblemId: number;
  attempts: Record<number, StudentAttempt>;
  openExplanationMap: Record<number, boolean>;
  elapsedSeconds: number;
  simulationFinished: boolean;
}

function readRawState(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    const fromLocal = window.localStorage.getItem(STORAGE_KEY);
    if (fromLocal) return fromLocal;
  } catch {
    // Ignore localStorage restrictions
  }
  try {
    return window.sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function writeRawState(serialized: string): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, serialized);
  } catch {
    // Ignore localStorage quota/partition errors
  }
  try {
    window.sessionStorage.setItem(STORAGE_KEY, serialized);
  } catch {
    // Ignore sessionStorage errors
  }
}

function loadPersistedState(): PersistedState {
  const defaults: PersistedState = {
    page: 'landing',
    mode: 'belajar',
    currentProblemId: 1,
    attempts: {},
    openExplanationMap: {},
    elapsedSeconds: 0,
    simulationFinished: false,
  };
  if (typeof window === 'undefined') return defaults;
  try {
    const raw = readRawState();
    if (!raw) return defaults;
    const parsed = JSON.parse(raw) as Partial<PersistedState>;
    const mode: QuizMode = parsed.mode === 'simulasi' ? 'simulasi' : 'belajar';
    const simulationFinished = Boolean(parsed.simulationFinished);
    const problemId =
      typeof parsed.currentProblemId === 'number' &&
      parsed.currentProblemId >= 1 &&
      parsed.currentProblemId <= PHYSICS_PROBLEMS.length
        ? parsed.currentProblemId
        : 1;
    const page = isValidAppPage(parsed.page)
      ? clampPageForMode(parsed.page, mode, simulationFinished)
      : 'landing';

    return {
      page,
      mode,
      currentProblemId: problemId,
      attempts: parsed.attempts && typeof parsed.attempts === 'object' ? parsed.attempts : {},
      openExplanationMap:
        parsed.openExplanationMap && typeof parsed.openExplanationMap === 'object'
          ? parsed.openExplanationMap
          : {},
      elapsedSeconds: typeof parsed.elapsedSeconds === 'number' ? parsed.elapsedSeconds : 0,
      simulationFinished,
    };
  } catch {
    return defaults;
  }
}

export default function App() {
  const initialState = useMemo(() => loadPersistedState(), []);
  const initialNav = useMemo(
    () =>
      resolveInitialNavigation({
        hash: typeof window !== 'undefined' ? window.location.hash : '',
        search: typeof window !== 'undefined' ? window.location.search : '',
        persistedPage: initialState.page,
        persistedProblemId: initialState.currentProblemId,
        mode: initialState.mode,
        simulationFinished: initialState.simulationFinished,
        maxProblemId: PHYSICS_PROBLEMS.length,
      }),
    [initialState]
  );

  const [page, setPage] = useState<AppPage>(initialNav.page);
  const [mode, setMode] = useState<QuizMode>(initialState.mode);
  const [currentProblemId, setCurrentProblemId] = useState<number>(initialNav.problemId);
  const [attempts, setAttempts] = useState<Record<number, StudentAttempt>>(initialState.attempts);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(initialState.elapsedSeconds);
  const [simulationFinished, setSimulationFinished] = useState<boolean>(
    initialState.simulationFinished
  );
  // Explanation panel is closed by default when opening any question, but persisted once opened
  const [openExplanationMap, setOpenExplanationMap] = useState<Record<number, boolean>>(
    initialState.openExplanationMap
  );

  const narrator = useNarrator();
  const stopNarrator = narrator.stop;
  const isFirstHashSyncRef = useRef<boolean>(true);
  const isHandlingPopStateRef = useRef<boolean>(false);

  // Persist active page and progress cleanly across navigation & reloads
  useEffect(() => {
    const payload: PersistedState = {
      page,
      mode,
      currentProblemId,
      attempts,
      openExplanationMap,
      elapsedSeconds,
      simulationFinished,
    };
    writeRawState(JSON.stringify(payload));
  }, [attempts, currentProblemId, elapsedSeconds, mode, openExplanationMap, page, simulationFinished]);

  // Synchronize active page & problem ID with URL hash without resetting to landing
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const targetHash = buildHashRoute(page, currentProblemId);

    if (isHandlingPopStateRef.current) {
      isHandlingPopStateRef.current = false;
      return;
    }

    try {
      if (isFirstHashSyncRef.current) {
        isFirstHashSyncRef.current = false;
        if (window.location.hash !== targetHash) {
          window.history.replaceState(null, '', targetHash);
        }
      } else if (window.location.hash !== targetHash) {
        window.history.pushState(null, '', targetHash);
      }
    } catch {
      // Ignore history API errors in restricted contexts
    }
  }, [currentProblemId, page]);

  // Listen to browser Back/Forward hash navigation
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleHashOrPop = () => {
      const match = parseHashRoute(window.location.hash, PHYSICS_PROBLEMS.length);
      if (!match) return;
      stopNarrator();
      isHandlingPopStateRef.current = true;
      if (match.problemId !== undefined) {
        setCurrentProblemId(match.problemId);
      }
      setPage(clampPageForMode(match.page, mode, simulationFinished));
    };

    window.addEventListener('hashchange', handleHashOrPop);
    window.addEventListener('popstate', handleHashOrPop);
    return () => {
      window.removeEventListener('hashchange', handleHashOrPop);
      window.removeEventListener('popstate', handleHashOrPop);
    };
  }, [mode, simulationFinished, stopNarrator]);

  // Simulation timer runs while in Mode Simulasi and not yet finished
  useEffect(() => {
    if (mode !== 'simulasi' || simulationFinished || page === 'landing' || page === 'results') {
      return;
    }
    const timer = window.setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, [mode, page, simulationFinished]);

  const currentProblem = useMemo(
    () => getProblemById(currentProblemId) ?? PHYSICS_PROBLEMS[0],
    [currentProblemId]
  );

  const answeredCount = useMemo(
    () =>
      PHYSICS_PROBLEMS.filter(
        (p) => attempts[p.id] && attempts[p.id].rawInput.trim().length > 0
      ).length,
    [attempts]
  );

  const results = useMemo(() => calculateResults(PHYSICS_PROBLEMS, attempts), [attempts]);

  const handleSelectMode = (nextMode: QuizMode) => {
    setMode(nextMode);
    if (nextMode === 'simulasi') {
      // Ensure explanations are closed while running an active simulation
      setOpenExplanationMap({});
    }
  };

  const handleSelectProblem = (problemId: number) => {
    narrator.stop();
    setCurrentProblemId(problemId);
    setPage('practice');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (problemId: number, value: string) => {
    setAttempts((prev) => ({
      ...prev,
      [problemId]: {
        rawInput: value,
        checked: false,
        isCorrect: null,
        feedbackMessage: '',
      },
    }));
  };

  const handleCheckAnswer = (problemId: number) => {
    const problem = getProblemById(problemId);
    if (!problem) return;
    const raw = attempts[problemId]?.rawInput ?? '';
    const graded = gradeAnswer(problem, raw);

    setAttempts((prev) => ({
      ...prev,
      [problemId]: {
        rawInput: raw,
        checked: true,
        isCorrect: graded.validFormat ? graded.isCorrect : false,
        feedbackMessage: graded.message,
      },
    }));
  };

  const handleClearAnswer = (problemId: number) => {
    setAttempts((prev) => {
      const next = { ...prev };
      delete next[problemId];
      return next;
    });
  };

  const handleToggleExplanation = () => {
    if (mode === 'simulasi' && !simulationFinished) return;
    setOpenExplanationMap((prev) => ({
      ...prev,
      [currentProblemId]: !prev[currentProblemId],
    }));
  };

  const handleFinishSimulation = () => {
    narrator.stop();
    // Evaluate all typed answers on simulation completion
    setAttempts((prev) => {
      const next = { ...prev };
      for (const p of PHYSICS_PROBLEMS) {
        const entry = next[p.id];
        if (entry && entry.rawInput.trim().length > 0) {
          const graded = gradeAnswer(p, entry.rawInput);
          next[p.id] = {
            rawInput: entry.rawInput,
            checked: true,
            isCorrect: graded.validFormat ? graded.isCorrect : false,
            feedbackMessage: graded.message,
          };
        }
      }
      return next;
    });
    setSimulationFinished(true);
    setPage('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetAll = () => {
    narrator.stop();
    setAttempts({});
    setElapsedSeconds(0);
    setSimulationFinished(false);
    setOpenExplanationMap({});
    setCurrentProblemId(1);
    setPage('menu');
  };

  const handleReviewProblem = (problemId: number) => {
    narrator.stop();
    setCurrentProblemId(problemId);
    setOpenExplanationMap((prev) => ({ ...prev, [problemId]: true }));
    setPage('explanation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (target: AppPage) => {
    narrator.stop();
    if (target === 'explanation' && mode === 'simulasi' && !simulationFinished) {
      setPage('practice');
    } else {
      setPage(target);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrimaryTopAction = () => {
    if (page === 'landing') {
      handleNavigate('menu');
    } else if (mode === 'simulasi' && !simulationFinished) {
      handleFinishSimulation();
    } else {
      handleNavigate('results');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F8] text-[#1C1214]">
      <TopNav
        currentPage={page}
        mode={mode}
        simulationFinished={simulationFinished}
        onNavigate={handleNavigate}
        onPrimaryAction={handlePrimaryTopAction}
      />

      <div className="flex-1">
        {page === 'landing' && (
          <LandingPage
            totalQuestions={PHYSICS_PROBLEMS.length}
            answeredCount={answeredCount}
            mode={mode}
            onSelectMode={handleSelectMode}
            onStartPractice={() => handleNavigate('menu')}
            onOpenQuestionList={() => handleNavigate('menu')}
          />
        )}

        {page === 'menu' && (
          <MenuLatihanPage
            problems={PHYSICS_PROBLEMS}
            attempts={attempts}
            mode={mode}
            elapsedSeconds={elapsedSeconds}
            simulationFinished={simulationFinished}
            onSelectMode={handleSelectMode}
            onSelectProblem={handleSelectProblem}
            onFinishSimulation={handleFinishSimulation}
            onResetAll={handleResetAll}
          />
        )}

        {(page === 'practice' || page === 'explanation') && (
          <QuestionWorkspacePage
            problems={PHYSICS_PROBLEMS}
            currentProblem={currentProblem}
            attempt={attempts[currentProblem.id]}
            allAttempts={attempts}
            mode={mode}
            elapsedSeconds={elapsedSeconds}
            simulationFinished={simulationFinished}
            isExplanationOpen={Boolean(openExplanationMap[currentProblem.id])}
            isDedicatedExplanationView={page === 'explanation'}
            activeNarrationKey={narrator.activeSection}
            narratorStatus={narrator.status}
            onSelectProblem={handleSelectProblem}
            onInputChange={handleInputChange}
            onCheckAnswer={handleCheckAnswer}
            onClearAnswer={handleClearAnswer}
            onToggleExplanation={handleToggleExplanation}
            onOpenDedicatedExplanation={() => setPage('explanation')}
            onBackToPractice={() => setPage('practice')}
            onBackToMenu={() => handleNavigate('menu')}
            onFinishSimulation={handleFinishSimulation}
            onSpeakSection={narrator.speakSection}
            onStopNarrator={narrator.stop}
          />
        )}

        {page === 'results' && (
          <ResultsPage
            problems={PHYSICS_PROBLEMS}
            attempts={attempts}
            results={results}
            mode={mode}
            elapsedSeconds={elapsedSeconds}
            onReviewProblem={handleReviewProblem}
            onBackToMenu={() => handleNavigate('menu')}
            onResetAll={handleResetAll}
          />
        )}
      </div>

      <NarratorBar
        status={narrator.status}
        activeSection={narrator.activeSection}
        activeText={narrator.activeText}
        rate={narrator.rate}
        onSetRate={narrator.setRate}
        onPause={narrator.pause}
        onResume={narrator.resume}
        onStop={narrator.stop}
      />

      <footer className={`mt-12 border-t border-[#E7DCDF] bg-white py-6 ${narrator.status !== 'idle' ? 'pb-24' : ''}`}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-xs text-[#5A4A4D] sm:flex-row sm:px-6">
          <p className="font-semibold text-[#7B1126]">
            Mister Jo · Olimpiade Sains Fisika Tingkat Kota/Kabupaten
          </p>
          <p>Think Scientifically. Solve Precisely. Be an Olympiad Champion.</p>
        </div>
      </footer>
    </div>
  );
}
