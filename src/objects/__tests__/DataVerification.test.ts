import { expect } from 'vitest'
import { AcademicProjects } from '../DataLoader'
import { parseProject } from '../ProjectParser'
import { testMultipleCases } from './MultipleCaseTester'

testMultipleCases('Test Academic projects', AcademicProjects, (project) => {
  expect(parseProject(project)).toBeDefined();
})
