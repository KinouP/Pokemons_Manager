import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {buildServePath} from '@angular-devkit/build-angular/src/dev-server';
import {PokemonsComponent} from './composants/pokemons/pokemons.component';
import {GenerationsComponent} from './composants/generations/generations.component';


const routes: Routes = [
  {path: 'pokemons', component: PokemonsComponent},
  {path: 'generations', component: GenerationsComponent},
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
  {path: '**', component: PokemonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
