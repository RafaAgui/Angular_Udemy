import { Component } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component ({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent {
  public title: string;
  public list: string;
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.title = "Zapatillas Juegos";
    this.list = "Listado de las mejores zapatillas"

    this.zapatillas = [
      new Zapatilla("Adidas Ultraboost", "Adidas", "blanco", 250, true),
      new Zapatilla("Nike Runner", "Nike", "negras", 160, true),
      new Zapatilla("Nike Air Max", "Nike", "blacas", 280, true)
    ];
  }

  ngOnInit(){
    console.log(this.zapatillas);
  }
}
