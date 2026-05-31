import { MissingPropertyError } from "./Errors";

export class Image {
  static copy(obj: any) {
    MissingPropertyError.assertPropsAreDefined([obj.source, obj.altText], ["source", "altText"]);
    return new Image(obj.source, obj.altText);
  }


  source: string
  altText: string

  constructor(source: string, altText: string) {
    this.source = source
    this.altText = altText
  }
}
