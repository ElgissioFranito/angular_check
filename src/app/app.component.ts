import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular checkbox';
  voankazos : any[] = [];
  selected : any[] = [];
  selectedFruitsId : number[] = [];

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.voankazos = this.api.getFruits();
    this.selected = [];
    this.selectedFruitsId = [];
  }

  public SelectFruit(){
    let selectedFruits = this.voankazos.filter((e,i) => this.selected[i])
    this.selectedFruitsId = selectedFruits.map(fruit => fruit.id)

    console.log(this.selectedFruitsId);
  }
}
