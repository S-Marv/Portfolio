import { assert, expect, test } from 'vitest'
import { Project } from '../data_structures/Project'
import { Image } from '../data_structures/Image'
import { testMultipleCases } from './MultipleCaseTester'
import { MissingPropertyError } from '../data_structures/Errors'
import TestProject from '../../assets/data/TestProjects.json'

const TEST_PROJECTS = [
  new Project('TEST', 'test string', []),
  new Project('TEST2 NAME', '<h2>test html</h2> this is a test', [new Image('/w.png', 'w')]),
]

testMultipleCases('test valid parses', TEST_PROJECTS, (original) => {
  const obj = JSON.parse(JSON.stringify(original))
  const output = obj as Project
  assert.deepEqual(output, original, 'matches original')
})

class ErrorTestCase {
  reason: any
  parameter: any
  constructor(reason: any, parameter: any) {
    this.reason = reason
    this.parameter = parameter
  }
}

const WRONG_IMAGE_FORMAT = new ErrorTestCase(MissingPropertyError.getMessage('source'), {
  name: '',
  description: '',
  images: ['url.url'],
})
const EMPTY_PROJECT = new ErrorTestCase(MissingPropertyError.getMessage('name'), {})
const WRONG_LINK_FORMAT = new ErrorTestCase(MissingPropertyError.getMessage("url"), {
  name:'',
  description: '',
  images: [],
  links:[{text:'', iconId:''}]
})

testMultipleCases(
  'test invalid parses',
  [WRONG_IMAGE_FORMAT, EMPTY_PROJECT, WRONG_LINK_FORMAT],
  (element) => {
    expect(() => Project.parse(element.parameter)).toThrowError(element.reason);
  },
)

test("External Parsing", ()=>{
  Project.parse(TestProject)
})