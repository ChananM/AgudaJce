import { Item } from "./item";

export class HomeStory extends Item {

    //NEVER set the fields "id" and "createdOn" manually. firebase will do it automaticlly
    constructor(public imageURL: string, public headline: string, public content: string, public preview: string) {
        super();
    }

    //func for firebase, avoid it.
    public static toHomeStory(json){
        let story = Object.create(HomeStory.prototype);
        return Object.assign(story, json);
    }
}