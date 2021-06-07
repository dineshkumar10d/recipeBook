import { Component } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[RecipeService]
})
export class AppComponent {
  loadedPage = 'recipes';
  onRouting(page: string){
    this.loadedPage = page; 
  }
}