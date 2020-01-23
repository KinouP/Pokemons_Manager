import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerationsComponent } from './composants/generations/generations.component';
import { PokemonsComponent } from './composants/pokemons/pokemons.component';

import{LOCALE_ID} from '@angular/core';
import{registerLocaleData} from '@angular/common';
import localeFR from '@angular/common/locales/fr';
import { PokemonComponent } from './composants/pokemon/pokemon.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonsComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
