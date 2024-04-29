import { nanoid } from "nanoid"
export default class Products{
    constructor( name, price, isDiscount){
        this.id=nanoid()
        this.name=name
        this.price=price
        if(isDiscount>0){
            this.isDiscount=true
        }
        else{
            this.isDiscount=false
        }
    }
}