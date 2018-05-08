import { Item } from "./item";

export class HomeStory extends Item {

    //NEVER set the fields "id" and "createdOn" manually. firebase will do it automaticlly
    constructor(public imageURL: string, public headline: string, public content: string, public preview: string) {
        super();
    }

    public setParams(imageURL, headline, content, preview) : HomeStory{
        this.imageURL = imageURL;
        this.headline = headline;
        this.content = content;
        this.preview = preview;
        return this;
    }

    //func for firebase, avoid it.
    public static toHomeStory(json){
        let story = Object.create(HomeStory.prototype);
        return Object.assign(story, json);
    }
}