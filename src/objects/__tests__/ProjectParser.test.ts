import { assert, expect, test } from 'vitest'
import { Project } from '../Project'
import { Image } from '../Image'
import { InvalidTypeError, MissingPropertyError, parseProject } from '../ProjectParser'

function testMultipleCases<Type>(testDesc: string, testCases: Type[], testFn: (obj: Type) => void) {
  testCases.forEach((testCase, index) => {
    test(testDesc + ' (Test Index: ' + index + ')', () => testFn(testCase))
  })
}

const TEST_PROJECTS = [
  new Project('TEST', 'test string', []),
  new Project('TEST2 NAME', '<h2>test html</h2> this is a test', [new Image('/w.png', 'w')]),
]

testMultipleCases('test valid parses', TEST_PROJECTS, (original) => {
  const obj = JSON.parse(JSON.stringify(original))
  const output = parseProject(obj)
  assert.deepEqual(output, original, 'matches original')
})

class ErrorTestCase {
  reason: string
  parameter: object
  constructor(reason: any, parameter: object) {
    this.reason = reason
    this.parameter = parameter
  }
}

const WRONG_IMAGE_FORMAT = new ErrorTestCase('altText', {
  name: '',
  description: '',
  images: ['url.url'],
})
const EMPTY_PROJECT = new ErrorTestCase('name', {})
const WRONG_TYPES = new ErrorTestCase(InvalidTypeError, { name: 2, description: 3, images: [] })

testMultipleCases(
  'test invalid parses',
  [WRONG_IMAGE_FORMAT, EMPTY_PROJECT, WRONG_TYPES],
  (element) => {
    expect(() => parseProject(element.parameter)).toThrowError(element.reason)
  },
)
