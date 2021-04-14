import { Item } from "./item";

export class ItemList{
  static id :number = 0;
  items : Item[] = [];
  isVisible:boolean = false;
  myId : number = 0;
  name : string = '';

<<<<<<< HEAD
  constructor( name:string){
    Item.id = 0;
    this.myId = ItemList.id;
    ItemList.id++;
    this.name = name;

=======
  constructor(items:Item[], name:string){
    this.items = [...items];
    this.myId = ItemList.id;
    ItemList.id++;
    this.name = name;
>>>>>>> b5428bc97bd688502e6591d4d8746011e919e9c4
  }

  deleteItem():void{

  }

}
