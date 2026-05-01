import { Icon } from "@/objects/data_structures/Icon";

const BASE_URL = "icons/";
const IconIdMap = new Map<string, Icon>();
const Keys :string[] = [];
const Icons :Icon[]= []

function make(id:string, imageName:string, color:string){
    const icon = new Icon(id, BASE_URL + imageName, color);
    Keys.push(id);
    IconIdMap.set(id, icon);
    Icons.push(icon);
    return icon;
}

const GITHUB = make("GITHUB", "github.png", "#1a237e");
const YOUTUBE = make("YOUTUBE", "youtube.png", "#B2071D");
const ITCHIO = make("ITCHIO", "itchio.png", "#B2071D");
const LINKEDIN =  make("LINKEDIN", "linkedin.jpg", "#0a66c2");

export { IconIdMap, Keys, Icons, GITHUB, YOUTUBE, ITCHIO, LINKEDIN}