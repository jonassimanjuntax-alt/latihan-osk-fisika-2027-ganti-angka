import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateResults,
  formatIndoDecimal,
  gradeAnswer,
  parseIndoDecimal,
} from './grader';
import { PHYSICS_PROBLEMS } from '../data/problems';
import { StudentAttempt } from '../types/physics';

test('formatIndoDecimal formats numbers to 1 decimal place with comma', () => {
  assert.equal(formatIndoDecimal(10.5), '10,5');
  assert.equal(formatIndoDecimal(0.8), '0,8');
  assert.equal(formatIndoDecimal(-5.5), '-5,5');
  assert.equal(formatIndoDecimal(35), '35,0');
  assert.equal(formatIndoDecimal(-0.02), '0,0');
  assert.equal(formatIndoDecimal(16.5586), '16,6');
});

test('parseIndoDecimal validates Indonesian comma decimals and rejects dots/thousands', () => {
  const ok = parseIndoDecimal('12,5');
  assert.equal(ok.valid, true);
  assert.equal(ok.value, 12.5);
  assert.equal(ok.hasSingleDecimal, true);

  const neg = parseIndoDecimal(' -5,5 ');
  assert.equal(neg.valid, true);
  assert.equal(neg.value, -5.5);
  assert.equal(neg.hasSingleDecimal, true);

  const noDec = parseIndoDecimal('35');
  assert.equal(noDec.valid, true);
  assert.equal(noDec.hasSingleDecimal, false);

  const twoDec = parseIndoDecimal('10,52');
  assert.equal(twoDec.valid, true);
  assert.equal(twoDec.hasSingleDecimal, false);

  const dot = parseIndoDecimal('10.5');
  assert.equal(dot.valid, false);
  assert.match(dot.errorMessage ?? '', /koma/i);

  const thousands = parseIndoDecimal('1.250,5');
  assert.equal(thousands.valid, false);

  const empty = parseIndoDecimal('   ');
  assert.equal(empty.valid, false);
});

test('gradeAnswer accepts exact 1-decimal answers and proportional tolerance', () => {
  const q1 = PHYSICS_PROBLEMS[0]; // 10,5
  assert.equal(gradeAnswer(q1, '10,5').isCorrect, true);
  assert.equal(gradeAnswer(q1, '10,6').isCorrect, true); // within 0.1 tolerance
  assert.equal(gradeAnswer(q1, '10,8').isCorrect, false);
  assert.equal(gradeAnswer(q1, '10.5').validFormat, false);
  assert.equal(gradeAnswer(q1, '11').validFormat, false); // requires 1 decimal place

  const q10 = PHYSICS_PROBLEMS[9]; // -5,5
  assert.equal(gradeAnswer(q10, '-5,5').isCorrect, true);
  assert.equal(gradeAnswer(q10, '5,5').isCorrect, false); // wrong sign!
});

test('calculateResults tallies scores, topic breakdowns, and study recommendations', () => {
  const attempts: Record<number, StudentAttempt> = {};
  for (const p of PHYSICS_PROBLEMS) {
    // Answer Kinematika & Osilasi correctly, others wrong or blank
    if (p.topic === 'Kinematika' || p.topic === 'Osilasi') {
      attempts[p.id] = {
        rawInput: p.answerFormatted,
        checked: true,
        isCorrect: true,
        feedbackMessage: 'Benar',
      };
    } else if (p.id === 5) {
      attempts[p.id] = {
        rawInput: '9,9',
        checked: true,
        isCorrect: false,
        feedbackMessage: 'Belum tepat',
      };
    }
  }

  const results = calculateResults(PHYSICS_PROBLEMS, attempts);
  assert.equal(results.totalQuestions, 20);
  assert.equal(results.correctCount, 6); // 4 Kinematika + 2 Osilasi
  assert.equal(results.incorrectCount, 1);
  assert.equal(results.answeredCount, 7);
  assert.equal(results.unansweredCount, 13);
  assert.equal(results.successPercent, 30);
  assert.equal(results.recommendedTopics.includes('Kinematika'), false);
  assert.equal(results.recommendedTopics.includes('Osilasi'), false);
  assert.equal(results.recommendedTopics.includes('Hukum Newton'), true);
});
