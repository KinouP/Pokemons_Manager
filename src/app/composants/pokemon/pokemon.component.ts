import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon;
  @Output() clickSurPokemon = new EventEmitter();

  image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  unClickSurPokemon(){
    this.clickSurPokemon.emit(this.pokemon);
  }

  constructor() { }

  ngOnInit() {
  }

}
