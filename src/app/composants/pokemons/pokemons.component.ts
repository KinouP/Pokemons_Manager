import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../modeles/pokemon';
import {PokemonServiceService} from '../../services/pokemon-service.service';
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  cpteur: number;
  pokemons: Array<Pokemon>;

  constructor(private service: PokemonServiceService) {
  }

  fcadrePokedex() {
    this.pokemons = this.service.getPokemons();
    this.cpteur = this.service.cpt();
  }


  ngOnInit() {
    this.fcadrePokedex();
  }

  envoyer() {
    return this.service.triPokemon(nom);
  }
}
