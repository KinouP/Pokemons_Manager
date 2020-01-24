import {Injectable} from '@angular/core';
import {Pokemon} from '../modeles/pokemon';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  basePokemon = [
    new Pokemon(1, 'Bulbizarre', 'graine', ['plante', 'poison'], 0.70, 6.9, 1),
    new Pokemon(2, 'Herbizarre', 'bourgeon', ['plante', 'poison'], 1, 13, 1),
    new Pokemon(3, 'Florizarre', 'fleur', ['plante', 'poison'], 2, 100, 1),
    new Pokemon(4, 'Salamèche', 'lézard', ['feu'], 0.60, 8.5, 1),
    new Pokemon(5, 'Reptincel', 'gros lézard', ['feu'], 1.1, 3.6, 1),
    new Pokemon(6, 'Dracaufeu', 'dragon', ['feu', 'vol'], 1.7, 90.5, 1),
    new Pokemon(7, 'Carapuce', 'petite tortue', ['eau'], 0.5, 9, 1),
    new Pokemon(8, 'Carabaffe', 'moyenne tortue', ['eau'], 1, 22.5, 1),
    new Pokemon(9, 'Tortank', 'grosse tortue', ['eau'], 1.6, 85.5, 1),
    new Pokemon(10, 'Chenipan', 'chenille', ['insect', 'poison'], 0.3, 2.9, 1),
    new Pokemon(63, 'Abra', 'télékinésiste', ['psy'], 1.3, 56.5, 1),
    new Pokemon(133, 'Evoli', 'evolutif', ['normal'], 0.3, 6.5, 1)
  ];

  constructor(private http: HttpClient) {
  }

  //appel de l'API
 /* appelAPI() {
    return this.http.get('https://pokeapi.co/api/v2/');
  }*/

  getGenerations() {
    return this.http.get('https://pokeapi.co/api/v2/generation/');
  }

  //compter le nombre de pokemon
  cpt(): number {
    return this.basePokemon.length;
  }

  //retrouner le tableau de pokemon
  getPokemons(): Array<Pokemon> {
    return this.basePokemon;
  }

  //tri les pokemon
  triPokemon(nom) {
    const regex = new RegExp(nom, 'gi');
    return this.basePokemon.filter(PokeTri => PokeTri.nom.match(regex));
  }

}
