import { Injectable } from '@angular/core';
import {Pokemon} from '../modeles/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  basePokemon = [
    {id: 1, nom: 'Bulbizarre', categorie: 'graine', type: ['plante', 'poison'], taille: 0.70, poids: 6.9, gen: 1},
    {id: 2, nom: 'Herbizarre', categorie: 'bourgeon', type: ['plante', 'poison'], taille: 1, poids: 13, gen: 1},
    {id: 3, nom: 'Florizarre', categorie: 'fleur', type: ['plante', 'poison'], taille: 2, poids: 100, gen: 1},
    {id: 4, nom: 'Salamèche', categorie: 'lézard', type: ['feu'], taille: 0.60, poids: 8.5, gen: 1},
    {id: 5, nom: 'Reptincel', categorie: 'gros lézard', type: ['feu'], taille: 1.1, poids: 3.6, gen: 1},
    {id: 6, nom: 'Dracaufeu', categorie: 'dragon', type: ['feu', 'vol'], taille: 1.7, poids: 90.5, gen: 1},
    {id: 7, nom: 'Carapuce', categorie: 'petite tortue', type: ['eau'], taille: 0.5, poids: 9, gen: 1},
    {id: 8, nom: 'Carabaffe', categorie: 'moyenne tortue', type: ['eau'], taille: 1.6, poids: 165.5, gen: 1},
    {id: 9, nom: 'Tortank', categorie: 'grosse tortue', type: ['eau'], taille: 1.6, poids: 85.5, gen: 1},
    {id: 10, nom: 'Chenipan', categorie: 'chenille', type: ['insect', 'poison'], taille: 0.3, poids: 2.9, gen: 1},
    {id: 63, nom: 'Abra', categorie: 'télékinésiste', type: ['psy'], taille: 1.3, poids: 56.5, gen: 1},
    {id: 133, nom: 'Evoli', categorie: 'evolutif', type: ['normal'], taille: 0.3, poids: 6.5, gen: 1}
  ];

  constructor() { }

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
    return result = this.basePokemon.filter(nom => this.basePokemon[nom] === nom);
  }

}
