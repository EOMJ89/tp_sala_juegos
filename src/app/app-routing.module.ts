import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { PipatiComponent } from './componentes/pipati/pipati.component';
import { AdivinanumeroComponent } from './componentes/adivinanumero/adivinanumero.component';
import { AritmeticaComponent } from './componentes/aritmetica/aritmetica.component';
import { MemoriaComponent } from './componentes/memoria/memoria.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aritmetica', component: AritmeticaComponent },
  { path: 'pipati', component: PipatiComponent },
  { path: 'adivinanumero', component: AdivinanumeroComponent },
  { path: 'memoria', component: MemoriaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
