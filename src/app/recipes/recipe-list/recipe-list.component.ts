import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipeSignal = new EventEmitter<Recipe>();
recipes: Recipe[] = [
new Recipe('A test Recipe', "A description", "https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32.jpg"),
new Recipe('A test Recipe II', "A rendang gulai daging", "https://upload.wikimedia.org/wikipedia/commons/1/1b/Nasi_Lemak_Medan_Rendang_3.jpg")
];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe) {
   this.recipeSignal.emit(recipe)
  }

}
