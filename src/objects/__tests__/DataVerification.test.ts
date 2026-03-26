import { expect } from 'vitest'
import { AcademicProjects } from '../DataLoader'
import { testMultipleCases } from './MultipleCaseTester'
import { Project } from '../data_structures/Project';

testMultipleCases('Test Academic projects', AcademicProjects, (project) => {
  expect(project instanceof Project).toBeTruthy();
})

