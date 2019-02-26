import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model"

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
ingredients: Ingredient[] = [
  new Ingredient('Chicken', 2),
  new Ingredient('Tomatoes', 3)
];
  constructor() {}

  ngOnInit() {
  }

addIngredient(item: Ingredient) {
    this.ingredients.push(item);
}

}
