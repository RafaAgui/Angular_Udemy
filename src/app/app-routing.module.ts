import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import component modules here to make sure they are loaded first before the app starts routing them in order
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VidejuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //Rutas de la aplicación
  { path:'', component:HomeComponent },
  {path:"zapatillas", component:ZapatillasComponent},
  {path:"videojuegos", component:VidejuegoComponent},
  {path:"cursos", component:CursosComponent},
  {path:"cursos/:name", component:CursosComponent},
  {path:"**", redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
