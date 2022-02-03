import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/220px-Wiener-Schnitzel02.jpg',
      ingredients: ['French Fries', 'Pork', 'Salad']
    },
    {
      id: 'r2',
      title: 'Egusi Soup',
      imageUrl: 'https://i.pinimg.com/originals/ff/47/aa/ff47aa505d388c4436579121b38e32ab.jpg',
      ingredients: ['Pumpkin seeds', 'Beef', 'palm oil', 'vegetables']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
