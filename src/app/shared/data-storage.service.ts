import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { exhaustMap, map, take } from "rxjs/operators";
import { AuthService } from "../auth/auth/auth.service";

@Injectable({ providedIn: 'root' })
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://recipe-book-b960f-default-rtdb.firebaseio.com/recipes.json', recipes)
            .subscribe((responseData) => {
                console.log(responseData);
            })
    }

    fetchRecipes() {
        return this.http
            .get<Recipe[]>('https://recipe-book-b960f-default-rtdb.firebaseio.com/recipes.json',
        )
            .pipe(
                map(recipes => {
                    return recipes.map(recipe => {
                        return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
                    })
                }))
            .subscribe((recipes) => {
                console.log(recipes)
                this.recipeService.setRecipe(recipes);
            })
    };
}
