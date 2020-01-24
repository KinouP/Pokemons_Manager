import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../modeles/pokemon';
import {PokemonService} from '../../services/pokemon-service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  cpteur: number;
  pokemons: Array<Pokemon>;

  constructor(private service: PokemonService) {
  }

  fcadrePokedex() {
    this.pokemons = this.service.getPokemons();
    this.cpteur = this.service.cpt();
  }

  ngOnInit() {
    this.fcadrePokedex();
  }

  envoyer(nom) {
    this.pokemons = this.service.triPokemon(nom);
  }

  reinitRecherche() {
    this.pokemons = this.service.getPokemons();
  }
}
