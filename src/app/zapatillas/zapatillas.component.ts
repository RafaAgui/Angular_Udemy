import { Component } from '@angular/core';

@Component ({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent {
  public title: string;
  public list: string;

  constructor() {
    this.title = "Zapatillas Juegos";
    this.list = "Listado de las mejores zapatillas"
  }
}
