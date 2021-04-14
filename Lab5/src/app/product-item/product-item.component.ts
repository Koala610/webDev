import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../item';
<<<<<<< HEAD
=======
import { ItemList } from '../itemList';
>>>>>>> b5428bc97bd688502e6591d4d8746011e919e9c4

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  item!: Item;
<<<<<<< HEAD
=======

>>>>>>> b5428bc97bd688502e6591d4d8746011e919e9c4
  @Output() remove = new  EventEmitter();





  goBack():void{
    if(this.item){
      if(this.item.imgs.length >1){
        if(this.item.imgCount == 1 || this.item.imgCount == 2){
          this.item.imgCount--;
        }else if(this.item.imgCount ==0){
          this.item.imgCount = 2;
        }
      }
    }
  }

  goForward():void{
    if(this.item){
      if(this.item.imgs.length >1){
        if(this.item.imgCount == 0 || this.item.imgCount == 1){
          this.item.imgCount++;
        }else if(this.item.imgCount ==2){
          this.item.imgCount = 0;
        }
      }
    }

  }

  deleteItem(id:number):void{
    this.remove.emit(id);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
