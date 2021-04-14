<<<<<<< HEAD
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AppMainComponent } from '../app-main/app-main.component';
=======
import { Component, Input, OnInit, Output } from '@angular/core';
>>>>>>> b5428bc97bd688502e6591d4d8746011e919e9c4
import { Item } from '../item';
import { ItemList } from '../itemList';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
<<<<<<< HEAD
export class ProductListComponent implements OnInit,OnDestroy {
  @Input() items: Item[] = [];
  @Input() itList !: ItemList;

  constructor() {

   }
  ngOnDestroy(): void {
    /*this.itList.items = [...this.items];
    for(let i in AppMainComponent.itemLists){
      if(this.itList.myId == AppMainComponent.itemLists[i].myId){
        AppMainComponent.itemLists[i] = this.itList;
      }
    }*/
  }
=======
export class ProductListComponent implements OnInit {
  @Input() items: Item[] = [];


  constructor() { }
>>>>>>> b5428bc97bd688502e6591d4d8746011e919e9c4

  ngOnInit(): void {

  }

  onTaskRemove(index:number){
<<<<<<< HEAD
    //this.items.splice(index-1,1)
    this.items = this.items.filter((x)=> x.myId !== index)
=======
    this.items.splice(index,1)
>>>>>>> b5428bc97bd688502e6591d4d8746011e919e9c4
  }

}
