import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Store } from "@ngrx/store";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
import * as ShoppingListActions from '../shopping-list/store/shopping-list.action';

@Injectable()
export class RecipeService{
    recipeSelected = new Subject<Recipe>();
    recipeChanged = new Subject<Recipe[]>();
    // private recipes:Recipe[]=[
    //   new Recipe('Wheat-Halwa',
    //   'Thirunelveli Halwa - tasty',
    //   'https://www.jeyashriskitchen.com/wp-content/uploads/2017/10/wheat-halwa.jpg',
    //   [new Ingredient('Wheat',200),
    //    new Ingredient('Sugar',200),
    //    new Ingredient('Cashew-nuts',100),
    //    new Ingredient('ghee',100)
    //   ]),
    //   new Recipe('Coconut-Burfi',
    //   'Coconut Parpi is simply taste',
    //   'https://www.subbuskitchen.com/wp-content/uploads/2017/10/Coconut-Burfi_finalforweb2-1300x730.jpg',
    //   [new Ingredient('Cocunut',1),
    //    new Ingredient('sugar',200)])
    // ];
    private recipes: Recipe[]=[];

      constructor(private slService: ShoppingListService,
        private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>){}

      setRecipe(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
      }
      getRecipes(){
        console.log("Get Recipe",this.recipes.slice());
        return this.recipes;
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        //this.slService.addIngredients(ingredients);
        this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
        console.log("addRecipe",this.recipes);
      }

      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
      }
}