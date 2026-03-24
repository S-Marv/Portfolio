import { Icon } from "@/objects/data_structures/Icon";

const BASE_URL = "icons/";
const IconIdMap = new Map<string, Icon>();
const Keys :string[] = [];

function make(id:string, imageName:string, color:string){
    const icon = new Icon(id, BASE_URL + imageName, color);
    Keys.push(id);
    IconIdMap.set(id, icon);
    return icon;
}

const Icons :Icon[]= [
    make("GITHUB", "github_white.png", "#1a237e"),
    make("YOUTUBE", "youtube.png", "#B2071D"),
    make("LINKEDIN", "linkedin.jpg", "#0a66c2"),
    make("ITCHIO", "itchio_white.png", "#fe2247")
];

export { IconIdMap, Keys, Icons }