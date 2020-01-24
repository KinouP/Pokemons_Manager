import {Component, Input, Output} from '@angular/core';
import {PokemonService} from './services/pokemon-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'TP3Pokemon';

  triPokemon(nom) {
    return this.service.triPokemon(nom);
  }

  constructor(private service: PokemonService) {
  }
}
