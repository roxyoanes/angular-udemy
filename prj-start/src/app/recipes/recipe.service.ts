import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "this is a test desc",
      "https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg",
    [
      new Ingredient("Meat", 1),
      new Ingredient("French Fries", 20)
    ]),
    new Recipe(
      "Another test recipe",
      "this is a test desc",
      "https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg",
    [
      new Ingredient("Buns", 1),
      new Ingredient("French Fries", 20)
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingregients: Ingredient[]) {
    this.slService.addIngredients(ingregients);
  }
}
