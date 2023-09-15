import { Injectable } from '@angular/core';
import {Food} from "../../shared/models/Food";
import {Tag} from "../../shared/models/Tag";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
}
  getAllFoodsByTag(tag: string):Food[] {
    // Statement ? doJob1: doJob2
    return tag == "All"?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllFoodsBySearchTerm(searchTerm: string):Food[] {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  // get all tags
  getAllTags():Tag[] {
    return [
      {name: "All", count: 14},
      {name: "Lunch", count: 1},
      {name: "Pizza", count: 4},
      {name: "Fruits", count: 0},
      {name: "Coffee", count: 2},
      {name: "Capuchino", count: 1},
      {name: "Burger", count: 1},
      {name: "Hamburger", count: 1}
    ];
  }

  getAll():Food[] {
    return [
      {
        id:1,
        name: 'Venta de Capuchino',
        cookTime: '10-20',
        price: 5,
        favorite: true,
        origins: ['italy','Senegal', 'Germany'],
        stars: 3,
        imageUrl: '/assets/images/1.jpg',
        tags: ['Coffee', 'Capuchino']
      },
      {
        id:2,
        name: 'Green Salad',
        cookTime: '5-10',
        price: 12,
        favorite: false,
        origins: ['Senegal'],
        stars: 4,
        imageUrl: '/assets/images/3.jpg',
        tags: ['FastFood', 'Hamburger']
      },
      {
        id:3,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['italy'],
        stars: 2,
        imageUrl: '/assets/images/4.jpg',
        tags: ['FastFood', 'Hamburger']
      },
      {
        id:4,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4,
        imageUrl: '/assets/images/5.jpg',
        tags: ['FastFood', 'Hamburger']
      },
      {
        id:6,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['italy'],
        stars: 5,
        imageUrl: '/assets/images/4.jpg',
        tags: ['FastFood', 'Hamburger']
      },
      {
        id:7,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/11.jpg',
        tags: ['FastFood', 'Hamburger']
      },
      {
        id:10,
        name: 'Tomatoes',
        cookTime: '10-20',
        price: 6,
        favorite: true,
        origins: ['Africa'],
        stars: 5,
        imageUrl: '/assets/images/10.jpg',
        tags: ['FastFood', 'Hamburger']
      }

    ]
  }


}
