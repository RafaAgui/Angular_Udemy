import { Component } from '@angular/core';

@Component ({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html'
})

export class VidejuegoComponent {
  public title: string;
  public list: string;

  constructor() {
    this.title = "Video Juegos";
    this.list = "Listado de los juegos más populares"
  }
}
