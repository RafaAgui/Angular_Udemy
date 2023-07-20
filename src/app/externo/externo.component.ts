import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.scss'],
  providers: [PeticionesService]
})

export class ExternoComponent implements OnInit{

  public user: any;
  public userId: any;
  public newUser: any;
  usedSave: any

    constructor(
      private _peticionesService: PeticionesService
    ){

      this.userId = 1;
      this.newUser = {
        'name': '',
        'job': ''
      };
    }

    ngOnInit(){
      this.cargarUser();
    }

    cargarUser(){
      this._peticionesService.getUser(this.userId).subscribe(
        result => {
          this.user = result.data;
        },
        error => {
          console.log(<any>error);
        }
      )
    }

    onSubmit(form: any){
      this._peticionesService.addUser(this.newUser).subscribe(
        response => {
          this.usedSave = response;

          form.reset();
        },
        error => {
          console.log(<any>error);
        }
      );
    }
}
