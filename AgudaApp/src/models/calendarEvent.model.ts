import { Item } from "./item";

export class CalendarEvent extends Item{
    constructor (public imageURL: string, public date:Date,
                public headline: string, public content: string,
                public open: boolean, public id?: string){
        super();
    }

    //event that return from firebase, shoud use this func to parse it to CalendarEvent class object
    public static toCalEvent(json){
        let event = Object.create(CalendarEvent.prototype);
        return Object.assign(event, json);
    }
}