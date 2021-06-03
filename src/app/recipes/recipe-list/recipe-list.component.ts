import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('Test-Recipe','this is simply test','https://cdn2.vectorstock.com/i/1000x1000/77/66/recipe-word-text-typography-design-logo-icon-vector-21127766.jpg'),
    new Recipe('Test-Recipe','this is simply test','https://cdn2.vectorstock.com/i/1000x1000/77/66/recipe-word-text-typography-design-logo-icon-vector-21127766.jpg')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
