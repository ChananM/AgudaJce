export class Item{

    constructor(public id?: string, public createdOn?: string){
        
    }

    public static toObject(item){
        return JSON.parse(JSON.stringify(item));
    }
}