import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable()

export class PeticionesService {
  public url: string;


  constructor(public _http:HttpClient) {
    this.url = "https://reqres.in"
  }

  getUser(userId: number): Observable<any>{
    return this._http.get(this.url+'/api/users/'+userId)
  }

  addUser(user: string): Observable<any>{
    let parans = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url+'/api/users', parans, {headers: headers})
  }
}
