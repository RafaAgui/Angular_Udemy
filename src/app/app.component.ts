import { Component } from '@angular/core';
import { __values } from 'tslib';
import {config } from './models/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'new-project';
  public desciption: string;

  public config: any;

  constructor (){
    this.config = config;
    this.title = config.title;
    this.desciption = config.description;
  }

}
