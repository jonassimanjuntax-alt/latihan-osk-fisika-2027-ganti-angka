import { PhysicsProblem } from '../types/physics';
import { PROBLEMS_PART_1 } from './problemsPart1';
import { PROBLEMS_PART_2 } from './problemsPart2';

export const PHYSICS_PROBLEMS: PhysicsProblem[] = [
  ...PROBLEMS_PART_1,
  ...PROBLEMS_PART_2,
];

export function getProblemById(id: number): PhysicsProblem | undefined {
  return PHYSICS_PROBLEMS.find((p) => p.id === id);
}
