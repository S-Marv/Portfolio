import { MissingPropertyError } from "./Errors";

export class Image {
  static copy(source: any) {
    if(!(source.source && source.altText)) throw new MissingPropertyError(source.source === undefined? "source" : "altText" );
    return new Image(source.source, source.altText);
  }


  source: string
  altText: string

  constructor(source: string, altText: string) {
    this.source = source
    this.altText = altText
  }
}
