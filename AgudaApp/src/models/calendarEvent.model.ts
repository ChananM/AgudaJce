import { Item } from "./item";

//NEVER set the fields "id" and "createdOn" manually. firebase will do it automaticlly
export class CalendarEvent extends Item {

    constructor (   public imageURL: string,
                    public date: string,
                    public headline: string,
                    public content: string,
                    public purchaseURL: string,
                    public open: boolean){
        super();
    }

    public setParams(imageURL, date, headline, content, purchaseURL) : CalendarEvent{
        this.imageURL = imageURL;
        this.date = date;
        this.headline = headline;
        this.content = content;
        this.purchaseURL = purchaseURL;
        return this;
    }

    //func for firebase, avoid it.
    public static toCalEvent(json){
        let event = Object.create(CalendarEvent.prototype);
        return Object.assign(event, json);
    }

    public getDate() :Date{
        return new Date(this.date);
    }
}