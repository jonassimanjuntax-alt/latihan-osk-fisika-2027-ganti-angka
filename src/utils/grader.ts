import {
  PhysicsProblem,
  PhysicsTopic,
  QuizResults,
  StudentAttempt,
  TopicBreakdown,
} from '../types/physics';

export const TOPIC_ORDER: PhysicsTopic[] = [
  'Kinematika',
  'Hukum Newton',
  'Usaha dan Energi',
  'Momentum Linear',
  'Dinamika Rotasi',
  'Osilasi',
];

export interface ParsedAnswerResult {
  valid: boolean;
  value: number | null;
  usesComma: boolean;
  hasSingleDecimal: boolean;
  errorMessage?: string;
}

/**
 * Formats a number using Indonesian decimal convention (comma, exactly 1 decimal place, no thousands separator).
 */
export function formatIndoDecimal(value: number): string {
  const rounded = Math.round(value * 10) / 10;
  const fixed = Object.is(rounded, -0) ? '0.0' : rounded.toFixed(1);
  return fixed.replace('.', ',');
}

/**
 * Parses student short-answer numerical input.
 * Supports Indonesian comma decimal ("10,5"), rejects confusing thousands separators,
 * and flags dot usage with a clear Indonesian guidance message.
 */
export function parseIndoDecimal(raw: string): ParsedAnswerResult {
  const trimmed = raw.trim().replace(/\s+/g, '');
  if (!trimmed) {
    return {
      valid: false,
      value: null,
      usesComma: false,
      hasSingleDecimal: false,
      errorMessage: 'Masukkan jawaban numerik terlebih dahulu (contoh: 12,5).',
    };
  }

  // Reject characters outside digits, minus/plus sign, comma, or dot
  if (!/^[+-]?[\d.,]+$/.test(trimmed)) {
    return {
      valid: false,
      value: null,
      usesComma: false,
      hasSingleDecimal: false,
      errorMessage: 'Gunakan hanya angka, tanda negatif (-), dan koma (,) sebagai desimal.',
    };
  }

  const commaCount = (trimmed.match(/,/g) || []).length;
  const dotCount = (trimmed.match(/\./g) || []).length;

  // Reject thousands separators or multiple separators
  if (commaCount > 1 || dotCount > 1 || (commaCount >= 1 && dotCount >= 1)) {
    return {
      valid: false,
      value: null,
      usesComma: false,
      hasSingleDecimal: false,
      errorMessage:
        'Jangan gunakan pemisah ribuan. Tulis satu tanda koma untuk desimal, misalnya 125,0.',
    };
  }

  if (dotCount === 1) {
    return {
      valid: false,
      value: null,
      usesComma: false,
      hasSingleDecimal: false,
      errorMessage: 'Gunakan koma (,) sebagai tanda desimal, bukan titik (.). Contoh: 12,5.',
    };
  }

  const normalized = trimmed.replace(',', '.');
  const numeric = Number(normalized);

  if (!Number.isFinite(numeric)) {
    return {
      valid: false,
      value: null,
      usesComma: commaCount === 1,
      hasSingleDecimal: false,
      errorMessage: 'Format bilangan tidak valid. Contoh format yang benar: 10,5.',
    };
  }

  const parts = trimmed.split(',');
  const hasSingleDecimal = parts.length === 2 && parts[1].length === 1;

  return {
    valid: true,
    value: numeric,
    usesComma: commaCount === 1,
    hasSingleDecimal,
  };
}

export interface GradeResult {
  validFormat: boolean;
  isCorrect: boolean;
  message: string;
}

/**
 * Evaluates student's numeric input against the exact problem answer and proportional tolerance.
 */
export function gradeAnswer(
  problem: PhysicsProblem,
  rawInput: string
): GradeResult {
  const parsed = parseIndoDecimal(rawInput);
  if (!parsed.valid || parsed.value === null) {
    return {
      validFormat: false,
      isCorrect: false,
      message: parsed.errorMessage ?? 'Format jawaban belum sesuai.',
    };
  }

  if (!parsed.hasSingleDecimal) {
    return {
      validFormat: false,
      isCorrect: false,
      message:
        'Tuliskan jawaban tepat satu angka di belakang koma menggunakan tanda koma (contoh: ' +
        formatIndoDecimal(parsed.value) +
        ').',
    };
  }

  // Enforce sign correctness explicitly when answer is non-zero
  if (problem.answerValue !== 0 && Math.sign(parsed.value) !== Math.sign(problem.answerValue)) {
    return {
      validFormat: true,
      isCorrect: false,
      message:
        'Belum tepat. Perhatikan arah atau tanda positif/negatif besaran fisika pada soal ini.',
    };
  }

  const diff = Math.abs(parsed.value - problem.answerValue);
  const isCorrect = diff <= problem.tolerance + 1e-9;

  if (isCorrect) {
    return {
      validFormat: true,
      isCorrect: true,
      message: 'Benar! Perhitungan dan pembulatan satu angka desimal Anda sudah tepat.',
    };
  }

  return {
    validFormat: true,
    isCorrect: false,
    message:
      'Belum tepat. Periksa kembali prinsip fisika, penurunan rumus, satuan, dan pembulatan satu angka di belakang koma.',
  };
}

/**
 * Computes final score, accuracy, per-topic breakdown, and study recommendations.
 */
export function calculateResults(
  problems: PhysicsProblem[],
  attempts: Record<number, StudentAttempt>
): QuizResults {
  const totalQuestions = problems.length;
  let answeredCount = 0;
  let correctCount = 0;
  let incorrectCount = 0;

  const topicMap = new Map<PhysicsTopic, TopicBreakdown>();
  for (const topic of TOPIC_ORDER) {
    topicMap.set(topic, {
      topic,
      total: 0,
      answered: 0,
      correct: 0,
      incorrect: 0,
      accuracyPercent: 0,
    });
  }

  for (const problem of problems) {
    const tb = topicMap.get(problem.topic)!;
    tb.total += 1;

    const attempt = attempts[problem.id];
    const hasInput = Boolean(attempt && attempt.rawInput.trim().length > 0);

    if (attempt && attempt.checked && attempt.isCorrect !== null) {
      answeredCount += 1;
      tb.answered += 1;
      if (attempt.isCorrect) {
        correctCount += 1;
        tb.correct += 1;
      } else {
        incorrectCount += 1;
        tb.incorrect += 1;
      }
    } else if (hasInput) {
      // If simulation finishes with un-checked typed answer, evaluate it automatically
      const graded = gradeAnswer(problem, attempt!.rawInput);
      answeredCount += 1;
      tb.answered += 1;
      if (graded.validFormat && graded.isCorrect) {
        correctCount += 1;
        tb.correct += 1;
      } else {
        incorrectCount += 1;
        tb.incorrect += 1;
      }
    }
  }

  const topicBreakdowns: TopicBreakdown[] = [];
  const recommendedTopics: PhysicsTopic[] = [];

  for (const topic of TOPIC_ORDER) {
    const tb = topicMap.get(topic)!;
    if (tb.total > 0) {
      tb.accuracyPercent = Math.round((tb.correct / tb.total) * 1000) / 10;
      topicBreakdowns.push(tb);
      if (tb.correct < tb.total) {
        recommendedTopics.push(topic);
      }
    }
  }

  const unansweredCount = totalQuestions - answeredCount;
  const successPercent =
    totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 1000) / 10 : 0;
  const score = successPercent;

  return {
    totalQuestions,
    answeredCount,
    correctCount,
    incorrectCount,
    unansweredCount,
    score,
    successPercent,
    topicBreakdowns,
    recommendedTopics,
  };
}
