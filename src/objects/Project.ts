import { Image } from './Image'
export class Project {
  name: string
  description: string
  images: Image[]

  constructor(name: string, description: string, images: Image[]) {
    this.name = name
    this.description = description
    this.images = images
  }
}
