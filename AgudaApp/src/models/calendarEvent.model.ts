import { Item } from "./item";

//NEVER set the fields "id" and "createdOn" manually. firebase will do it automaticlly
export class CalendarEvent extends Item{
    constructor (public imageURL: string, public date: string,
                public headline: string, public content: string,
                public open: boolean, public id?: string, public createdOn?: string){
        super();
    }

    //func for firebase, avoid it.
    public static toCalEvent(json){
        let event = Object.create(CalendarEvent.prototype);
        return Object.assign(event, json);
    }
}