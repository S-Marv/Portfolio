import { test } from 'vitest'

export function testMultipleCases<T>(testDesc: string, testCases: T[], testFn: (obj: T) => void) {
  testCases.forEach((testCase, index) => {
    test(testDesc + ' (Index: ' + index + ')', () => testFn(testCase))
  })
}
