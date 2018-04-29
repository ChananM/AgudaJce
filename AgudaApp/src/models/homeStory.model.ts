import { Item } from "./item";

export class HomeStory extends Item{

    constructor(public imageURL: string, public headline: string, public content: string, public id?: string){
        super();
    }

    //story that return from firebase, shoud use this func to parse it to HomeStory class object
    public static toHomeStory(json){
        let story = Object.create(HomeStory.prototype);
        return Object.assign(story, json);
    }
}