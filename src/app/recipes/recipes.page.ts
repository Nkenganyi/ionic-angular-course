import { Recipe } from './recipe.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
    recipes: Recipe[];
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    console.log('ngOnit');
    console.log(this.recipes);
  }

  ionViewWillEnter(){
   console.log('ionViewWillEnter');
   this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ionViewWDidLeave');
  }

  ngOnDestroy(){
      console.log('ngOnDestroy');
  }



}
