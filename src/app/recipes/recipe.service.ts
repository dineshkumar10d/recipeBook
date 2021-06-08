import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes:Recipe[]=[
        new Recipe('Wheat-Halwa',
        'Thirunelveli Halwa - tasty',
        'https://www.jeyashriskitchen.com/wp-content/uploads/2017/10/wheat-halwa.jpg',
        [new Ingredient('Wheat',200),
         new Ingredient('Sugar',200),
         new Ingredient('Cashew-nuts',100),
         new Ingredient('ghee',100)
        ]),
        new Recipe('Coconut-Burfi',
        'Coconut Parpi is simply taste',
        'https://www.subbuskitchen.com/wp-content/uploads/2017/10/Coconut-Burfi_finalforweb2-1300x730.jpg',
        [new Ingredient('Cocunut',1),
         new Ingredient('sugar',200)])
      ];

      constructor(private slService: ShoppingListService){}

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}