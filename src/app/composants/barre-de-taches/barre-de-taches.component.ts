import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PokemonService} from '../../services/pokemon-service';
import {PokemonsComponent} from '../pokemons/pokemons.component';
import {Pokemon} from '../../modeles/pokemon';

@Component({
  selector: 'app-barre-de-taches',
  templateUrl: './barre-de-taches.component.html',
  styleUrls: ['./barre-de-taches.component.css']
})
export class BarreDeTachesComponent implements OnInit {

  @Output() affichagePok = new EventEmitter();

  pokemons: Array<Pokemon>;

  constructor(private service: PokemonService) { }

  ngOnInit() {
  }

}
