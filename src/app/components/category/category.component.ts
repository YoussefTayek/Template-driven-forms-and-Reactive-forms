


import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  cat:Category
  constructor( ) {
    this.cat={
      id:0,
      name:""
    }
   }

  ngOnInit(): void {
    
  }
  onSubmit(){
    console.log(this.cat);
  }

}
