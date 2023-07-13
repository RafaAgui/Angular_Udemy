import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()

export class ZapatillaService {
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla("Adidas Ultraboost", "Adidas", "blanco", 250, true),
      new Zapatilla("Nike Runner", "Nike", "negras", 80, true),
      new Zapatilla("Nike Air Max", "Nike", "blancas", 280, true),
      new Zapatilla("Nike Air Max", "Nike", "rojas", 100, true)
    ];
  }

  getZapatillas(): Array<Zapatilla> {
    return this.zapatillas;
  }
}
