import { Image } from './Image'
import type { Link } from './Link'
export class Project {
  name: string
  description: string
  images: Image[]
  links:Link[]

 public static fromProject(source:Project){
    return new Project(source.name, source.description, source.images, source.links);
  }

  constructor(name: string, description: string, images?: Image[], links?:Link[]) {
    this.name = name
    this.description = description
    this.images = images? images : [];
    this.links = links? links :[];
  }
}
