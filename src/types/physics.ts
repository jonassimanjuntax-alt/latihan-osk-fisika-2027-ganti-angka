export type PhysicsTopic =
  | 'Kinematika'
  | 'Hukum Newton'
  | 'Usaha dan Energi'
  | 'Momentum Linear'
  | 'Dinamika Rotasi'
  | 'Osilasi';

export type QuizMode = 'belajar' | 'simulasi';

export type AppPage = 'landing' | 'menu' | 'practice' | 'explanation' | 'results';

export type NarrationKey =
  | 'soal'
  | 'stimulus'
  | 'fbd'
  | 'pengetahuanAwal'
  | 'prinsip'
  | 'rumus'
  | 'langkah'
  | 'jawabanAkhir';

export interface FormulaItem {
  label: string;
  latex: string;
  explanation: string;
  symbols: string[];
  validity: string;
}

export interface PhysicsProblem {
  id: number;
  topic: PhysicsTopic;
  title: string;
  /** Stimulus + question text in Indonesian with KaTeX inline math ($...$) */
  questionText: string;
  /** Prompt asking for the exact numerical quantity */
  promptEnding: string;
  /** Unit displayed next to input and answer (empty string if dimensionless) */
  unit: string;
  /** Exact numerical answer rounded to 1 decimal place */
  answerValue: number;
  /** Formatted answer with comma and 1 decimal place, e.g. "10,5" */
  answerFormatted: string;
  /** Proportional numerical tolerance around answerValue */
  tolerance: number;
  /** Whether the problem has a stimulus diagram */
  hasStimulusDiagram: boolean;
  /** Caption describing the stimulus diagram */
  stimulusCaption?: string;
  /** FBD / conceptual diagram caption in explanation section 3 */
  fbdCaption: string;
  /** 8 mandatory explanation sections */
  explanation: {
    memahamiPermasalahan: string[];
    pengetahuanAwal: string[];
    visualisasiFbd: string[];
    prinsipHukum: string[];
    rumusUtama: FormulaItem[];
    penurunanPersamaan: string[];
    langkahPenyelesaian: string[];
    jawabanAkhirCatatan: string;
    pemeriksaanFisika: string[];
  };
  /** Natural Indonesian spoken narration scripts without raw LaTeX */
  narration: Record<NarrationKey, string>;
}

export interface StudentAttempt {
  rawInput: string;
  checked: boolean;
  isCorrect: boolean | null;
  feedbackMessage: string;
}

export interface TopicBreakdown {
  topic: PhysicsTopic;
  total: number;
  answered: number;
  correct: number;
  incorrect: number;
  accuracyPercent: number;
}

export interface QuizResults {
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  score: number;
  successPercent: number;
  topicBreakdowns: TopicBreakdown[];
  recommendedTopics: PhysicsTopic[];
}
