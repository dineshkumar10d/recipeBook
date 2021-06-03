import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 ingredients:Ingredient[]=[
   new Ingredient('sugar',100),
   new Ingredient('weat flour',150)
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
