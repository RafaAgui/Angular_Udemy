import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit{
  name: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {

  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.name = params['name'];
      console.log('Param:', params);
    })
  }

  redirect(){
    this._router.navigate(['/zapatillas']);
  }
}
