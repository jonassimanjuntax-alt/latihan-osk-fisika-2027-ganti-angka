import test from 'node:test';
import assert from 'node:assert/strict';
import { PHYSICS_PROBLEMS } from './problems';
import { formatIndoDecimal } from '../utils/grader';

test('dataset contains exactly 20 problems numbered 1..20 matching OSK 2026 structure', () => {
  assert.equal(PHYSICS_PROBLEMS.length, 20);
  PHYSICS_PROBLEMS.forEach((p, idx) => {
    assert.equal(p.id, idx + 1);
    assert.equal(p.answerFormatted, formatIndoDecimal(p.answerValue));
    assert.ok(p.answerFormatted.includes(','), `Problem ${p.id} must use comma decimal`);
    assert.equal(p.answerFormatted.split(',')[1].length, 1, `Problem ${p.id} must have 1 decimal`);
  });
});

test('all 20 problems have complete 8-section explanations and clean TTS narration without raw LaTeX', () => {
  const narrationKeys = [
    'soal',
    'stimulus',
    'fbd',
    'pengetahuanAwal',
    'prinsip',
    'rumus',
    'langkah',
    'jawabanAkhir',
  ] as const;

  for (const p of PHYSICS_PROBLEMS) {
    assert.ok(p.explanation.memahamiPermasalahan.length >= 2);
    assert.ok(p.explanation.pengetahuanAwal.length >= 2);
    assert.ok(p.explanation.visualisasiFbd.length >= 1);
    assert.ok(p.explanation.prinsipHukum.length >= 1);
    assert.ok(p.explanation.rumusUtama.length >= 1);
    assert.ok(p.explanation.penurunanPersamaan.length >= 1);
    assert.ok(p.explanation.langkahPenyelesaian.length >= 2);
    assert.ok(p.explanation.jawabanAkhirCatatan.length > 0);
    assert.ok(p.explanation.pemeriksaanFisika.length >= 1);

    for (const key of narrationKeys) {
      const text = p.narration[key];
      assert.ok(text.length > 20, `Problem ${p.id} narration.${key} too short`);
      assert.equal(text.includes('\\frac'), false, `Problem ${p.id} narration.${key} contains raw LaTeX`);
      assert.equal(text.includes('$'), false, `Problem ${p.id} narration.${key} contains $`);
    }
  }
});

test('all 20 physics solutions match independent first-principles computation', () => {
  const round1 = (x: number) => Math.round(x * 10) / 10;
  const g = 9.8;

  // 1: area under (0,3)->(1,6)->(1.5,6)->(2.5,0)
  assert.equal(PHYSICS_PROBLEMS[0].answerValue, round1(0.5 * (3 + 6) * 1 + 6 * 0.5 + 0.5 * 1 * 6));
  // 2: 7R / (g t1 t2) = 7 * 0.5
  assert.equal(PHYSICS_PROBLEMS[1].answerValue, round1(7 * 0.5));
  // 3: d = (v1 + v2) * sqrt(v1*v2) / g
  assert.equal(PHYSICS_PROBLEMS[2].answerValue, round1(((4.5 + 8.0) * Math.sqrt(4.5 * 8.0)) / g));
  // 4: regular octagon a/b = 1 / sin(pi/8)
  assert.equal(PHYSICS_PROBLEMS[3].answerValue, round1(1 / Math.sin(Math.PI / 8)));
  // 5: 10 sin(beta) - 7 cos(beta) = 10 * (m1/m2) * (0.7*cos(alpha) - sin(alpha))
  assert.equal(
    PHYSICS_PROBLEMS[4].answerValue,
    round1(10 * 1.3 * (0.7 * (12 / 13) - 5 / 13))
  );
  // 6: alpha = 45 + 0.5 * atan(0.45) in degrees
  assert.equal(
    PHYSICS_PROBLEMS[5].answerValue,
    round1(45 + (0.5 * Math.atan(0.45) * 180) / Math.PI)
  );
  // 7: v = sqrt(g r tan(25 deg))
  assert.equal(
    PHYSICS_PROBLEMS[6].answerValue,
    round1(Math.sqrt(g * 60 * Math.tan((25 * Math.PI) / 180)))
  );
  // 8: M_eff = 4*6*12/(6+12), a1/g = (M_eff - 2)/(M_eff + 2)
  const mEff = (4 * 6 * 12) / (6 + 12);
  assert.equal(PHYSICS_PROBLEMS[7].answerValue, round1((mEff - 2) / (mEff + 2)));
  // 9: a = (110 - 12*g*sin30 - 0.25*12*g*cos30)/12
  assert.equal(
    PHYSICS_PROBLEMS[8].answerValue,
    round1((110 - 12 * g * 0.5 - 0.25 * 12 * g * Math.cos(Math.PI / 6)) / 12)
  );
  // 10: W = F . (r2 - r1)
  assert.equal(PHYSICS_PROBLEMS[9].answerValue, round1(3.5 * (4.5 - 1.5) + 5.0 * (-1.2 - 2.0)));
  // 11: delta_l = 3mg/k in cm
  assert.equal(PHYSICS_PROBLEMS[10].answerValue, round1(((3 * 0.8 * g) / 96.0) * 100));
  // 12: x_max = (eta / (mu*g)) * ln(1 + 1/5) in km
  assert.equal(
    PHYSICS_PROBLEMS[11].answerValue,
    round1(((2450e3 / (0.12 * g)) * Math.log(1.2)) / 1000)
  );
  // 13: p = F * dt
  assert.equal(PHYSICS_PROBLEMS[12].answerValue, round1(58 * 1.6));
  // 14: m2 = sqrt(m1 * m3)
  assert.equal(PHYSICS_PROBLEMS[13].answerValue, round1(Math.sqrt(16 * 0.49)));
  // 15: cannon dt in ms
  const v0 = Math.sqrt(2 * g * 10 * Math.sin(Math.PI / 6));
  const dt = (11600 * Math.cos(Math.PI / 6) - 1000 * v0) / (1000 * g * Math.sin(Math.PI / 6));
  assert.equal(PHYSICS_PROBLEMS[14].answerValue, round1(dt * 1000));
  // 16: vector torque/work b - a
  assert.equal(PHYSICS_PROBLEMS[15].answerValue, round1((9 + 4 + 25) - 3));
  // 17: F2 = (5/8) * 220
  assert.equal(PHYSICS_PROBLEMS[16].answerValue, round1((5 / 8) * 220));
  // 18: gyro Omega = ((m1 + m2/2)*g*l) / (I*w)
  assert.equal(
    PHYSICS_PROBLEMS[17].answerValue,
    round1(((2 + 3 / 2) * g * 1.2) / (8 * 4))
  );
  // 19: s0/l = 2 * sqrt(1 - (3/5)^2)
  assert.equal(PHYSICS_PROBLEMS[18].answerValue, round1(2 * Math.sqrt(1 - (3 / 5) ** 2)));
  // 20: k = 2 * pi^2 * m * g / (9 * h)
  assert.equal(
    PHYSICS_PROBLEMS[19].answerValue,
    round1((2 * Math.PI ** 2 * 2.0 * g) / (9 * 1.4))
  );
});
