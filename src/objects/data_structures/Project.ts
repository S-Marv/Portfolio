import { MissingPropertyError } from './Errors'
import { Image } from './Image'
import { Link } from './Link'

export class Project {
  name: string
  description: string
  images: Image[]
  links:Link[]
  
  public static parse(obj:any){
    MissingPropertyError.assertPropsAreDefined([obj.name, obj.description, obj.images], ["name", "description", "images"])
    const links :Link[]|undefined= obj.links?.map(Link.copy)
    const images :Image[]= obj.images.map(Image.copy)
    return new Project(obj.name, obj.description, images, links)
  }

  constructor(name: string, description: string, images?: Image[], links?:Link[]) {
    this.name = name
    this.description = description
    this.images = images? images : [];
    this.links = links? links :[];
  }
}
