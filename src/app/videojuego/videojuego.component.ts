import { Component } from '@angular/core';

@Component ({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html'
})

export class VidejuegoComponent {
  public title: string;
  public list: string;
  public mostrar_videojuego: boolean = true;

  constructor() {
    this.title = "Video Juegos";
    this.list = "Listado de los juegos más populares"
  }

  mostrarVideojuegos(value: boolean){
    this.mostrar_videojuego = value;
  }
}
