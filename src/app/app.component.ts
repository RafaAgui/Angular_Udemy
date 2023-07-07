import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'new-project';
  public mostrar_videojuego: boolean = true;


  mostrarVideojuegos(value: boolean){
    this.mostrar_videojuego = value;
  }
}
