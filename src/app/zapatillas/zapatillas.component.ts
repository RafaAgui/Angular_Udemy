import { Component } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component ({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})

export class ZapatillasComponent {
  public title: string;
  public list: string;
  public zapatillas: Array<Zapatilla>;
  public myBrand: string;
  public color: string;
  public marcas: string[];


  constructor() {

    this.color = 'yellow';
    this.title = "Zapatillas Juegos";
    this.list = "Listado de las mejores zapatillas";
    this.myBrand = '';

    this.marcas = new Array;

    this.zapatillas = [
      new Zapatilla("Adidas Ultraboost", "Adidas", "blanco", 250, true),
      new Zapatilla("Nike Runner", "Nike", "negras", 80, true),
      new Zapatilla("Nike Air Max", "Nike", "blancas", 280, true),
      new Zapatilla("Nike Air Max", "Nike", "rojas", 100, true)
    ];
  }

  ngOnInit(){
    console.log(this.zapatillas);
  }
  getBrand(){
   this.marcas.push(this.myBrand);
  }
  deleteBrand(index: number){
    this.marcas.splice(index, 1);
  }

}
