import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected fruits : any [] = [
    {"id":1, "nom":"mangue"},
    {"id":2, "nom":"ananas"},
    {"id":3, "nom":"pomme"},
    {"id":4, "nom":"orange"},
    {"id":5, "nom":"raisin"},
  ]
  
  constructor() { }

  public getFruits(){
    return this.fruits;
  }
}
