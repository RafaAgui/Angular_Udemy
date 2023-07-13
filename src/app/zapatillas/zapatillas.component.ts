import { Component } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component ({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css'],
  providers:[ZapatillaService]
})

export class ZapatillasComponent {
  public title: string;
  public list: string;
  public zapatillas: Zapatilla[] = [];
  public myBrand: string;
  public color: string;
  public marcas: string[];


  constructor(private _zapatillaService: ZapatillaService) {

    this.color = 'yellow';
    this.title = "Zapatillas Juegos";
    this.list = "Listado de las mejores zapatillas";
    this.myBrand = '';
    this.marcas = new Array;

  }

  ngOnInit(){
    this.zapatillas = this._zapatillaService.getZapatillas();
  }
  getBrand(){
   this.marcas.push(this.myBrand);
  }
  deleteBrand(index: number){
    this.marcas.splice(index, 1);
  }

}
