<<<<<<< HEAD
import { Component, Input, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';
=======
import { Component, Input, OnInit } from '@angular/core';
>>>>>>> b5428bc97bd688502e6591d4d8746011e919e9c4
import { ItemList } from '../itemList';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() itemList!: ItemList;

<<<<<<< HEAD
  @Output() itList:ItemList = this.itemList;

=======
>>>>>>> b5428bc97bd688502e6591d4d8746011e919e9c4

  //itemList : ItemList = new ItemList(this.items);
  constructor() { }

  ngOnInit(): void {
<<<<<<< HEAD
=======

>>>>>>> b5428bc97bd688502e6591d4d8746011e919e9c4
  }

}
