export class Room {
    public id:number;
    public roomType:string;
    public photo:string;
    public price:number;
    public quantity:number;

    constructor(id:number, roomType:string, price:number, quantity:number, photo:string) {
        this.id = id;
        this.roomType = roomType;
        this.photo = photo;
        this.price = price;
        this.quantity = quantity;
    }
}
