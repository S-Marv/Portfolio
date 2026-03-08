import { expect } from 'vitest'
import { DataLoader } from '../DataLoader'
import { parseProject } from '../ProjectParser'
import { testMultipleCases } from './MultipleCaseTester'

const loader = new DataLoader()

testMultipleCases('Test Academic projects', loader.getAcademicProjects(), (project) => {
  expect(parseProject(project)).toBeDefined()
})
