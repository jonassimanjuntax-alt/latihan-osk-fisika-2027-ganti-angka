import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  buildHashRoute,
  clampPageForMode,
  parseHashRoute,
  resolveInitialNavigation,
} from './navigationState.ts';

describe('navigationState', () => {
  it('parses valid hash routes and rejects invalid problem IDs', () => {
    assert.deepEqual(parseHashRoute('#beranda', 20), { page: 'landing' });
    assert.deepEqual(parseHashRoute('#daftar-soal', 20), { page: 'menu' });
    assert.deepEqual(parseHashRoute('#soal-7', 20), { page: 'practice', problemId: 7 });
    assert.deepEqual(parseHashRoute('#pembahasan-15', 20), { page: 'explanation', problemId: 15 });
    assert.deepEqual(parseHashRoute('#hasil', 20), { page: 'results' });

    assert.equal(parseHashRoute('#soal-0', 20), null);
    assert.equal(parseHashRoute('#soal-21', 20), null);
    assert.equal(parseHashRoute('#tidak-dikenal', 20), null);
  });

  it('builds consistent hash routes for every AppPage', () => {
    assert.equal(buildHashRoute('landing', 1), '#beranda');
    assert.equal(buildHashRoute('menu', 5), '#daftar-soal');
    assert.equal(buildHashRoute('practice', 12), '#soal-12');
    assert.equal(buildHashRoute('explanation', 12), '#pembahasan-12');
    assert.equal(buildHashRoute('results', 12), '#hasil');
  });

  it('restores persisted active page instead of resetting to landing when hash is absent', () => {
    assert.deepEqual(
      resolveInitialNavigation({
        hash: '',
        search: '',
        persistedPage: 'practice',
        persistedProblemId: 9,
        mode: 'belajar',
        simulationFinished: false,
        maxProblemId: 20,
      }),
      { page: 'practice', problemId: 9 }
    );

    assert.deepEqual(
      resolveInitialNavigation({
        hash: '',
        search: '',
        persistedPage: 'menu',
        persistedProblemId: 1,
        mode: 'belajar',
        simulationFinished: false,
        maxProblemId: 20,
      }),
      { page: 'menu', problemId: 1 }
    );

    assert.deepEqual(
      resolveInitialNavigation({
        hash: '',
        search: '',
        persistedPage: 'results',
        persistedProblemId: 20,
        mode: 'simulasi',
        simulationFinished: true,
        maxProblemId: 20,
      }),
      { page: 'results', problemId: 20 }
    );
  });

  it('locks explanation route while simulation is active and honors hash priority', () => {
    assert.equal(clampPageForMode('explanation', 'simulasi', false), 'practice');
    assert.equal(clampPageForMode('explanation', 'simulasi', true), 'explanation');

    assert.deepEqual(
      resolveInitialNavigation({
        hash: '#pembahasan-4',
        search: '',
        persistedPage: 'menu',
        persistedProblemId: 1,
        mode: 'simulasi',
        simulationFinished: false,
        maxProblemId: 20,
      }),
      { page: 'practice', problemId: 4 }
    );

    assert.deepEqual(
      resolveInitialNavigation({
        hash: '',
        search: '?autostart=1',
        persistedPage: 'landing',
        persistedProblemId: 1,
        mode: 'belajar',
        simulationFinished: false,
        maxProblemId: 20,
      }),
      { page: 'menu', problemId: 1 }
    );
  });
});
