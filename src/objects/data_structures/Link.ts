import { MissingPropertyError } from "./Errors";

export class Link{
    static copy(source: Link) {
        MissingPropertyError.assertPropsAreDefined([source.text, source.iconId, source.url], ["text", "iconId", "url"])
        return new Link(source.text, source.iconId, source.url)
    }
    
    text:string;
    iconId:string;
    url:string;

    constructor(text:string, iconId:string, url:string){
        this.text = text;
        this.iconId = iconId;
        this.url = url;
    }
}