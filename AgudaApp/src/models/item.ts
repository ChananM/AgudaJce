export class Item{
    public static toObject(item){
        return JSON.parse(JSON.stringify(item));
    }
}