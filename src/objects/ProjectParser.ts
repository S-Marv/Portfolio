import type { Image } from './data_structures/Image'
import { Project } from './data_structures/Project'
export { parseProject, MissingPropertyError, InvalidTypeError }

function parseProject(jsonObj: Object) {
  checkObjectForKeys(jsonObj, ['name', 'description', 'images'])
  const source = jsonObj as Project
  checkStrings([source.name, source.description])
  const images = parseImages(source.images)
  return new Project(source.name, source.description, images)
}

function parseImages(sourceArray: Object[]) {
  const keys = ['altText', 'source']
  sourceArray.forEach((imageObj) => {
    checkObjectForKeys(imageObj, keys)
    const image = imageObj as Image
    checkStrings([image.altText, image.source])
  })
  return sourceArray as Image[]
}

function checkObjectForKeys(obj: Object, keys: string[]) {
  keys.forEach((key) => {
    if (!obj.hasOwnProperty(key)) throw new MissingPropertyError(key)
  })
}

function checkStrings(values: Object[]) {
  const expectedType = 'string'
  values.forEach((value) => {
    if (typeof value != expectedType) throw new InvalidTypeError(value, expectedType)
  })
}

class MissingPropertyError extends Error {
  constructor(propertyName: string) {
    super("missing key '" + propertyName + "'")
  }
}

class InvalidTypeError extends TypeError {
  constructor(value: object, expectedType: string) {
    super("value '" + value + "' is not of expected type " + expectedType)
  }
}
