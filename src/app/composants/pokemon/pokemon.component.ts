import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  pokedex = [
    {
      id: 1,
      nom: 'Bulbizarre',
      categorie: 'graine',
      type: ['plante', 'poison'],
      taille: 0.70,
      poids: 6.9
    },
    {
      id: 2,
      nom: 'Herbizarre',
      categorie: 'bourgeon',
      type: ['plante', 'poison'],
      taille: 1,
      poids: 13
    },
    {
      id: 3,
      nom: 'Florizarre',
      categorie: 'fleur',
      type: ['plante', 'poison'],
      taille: 2,
      poids: 100
    },
    {
      id: 4,
      nom: 'Salamèche',
      categorie: 'lézard',
      type: ['feu'],
      taille: 0.60,
      poids: 8.5
    },
    {
      id: 5,
      nom: 'Reptincel',
      categorie: 'gros lézard',
      type: ['feu'],
      taille: 1.1,
      poids: 3.6
    },
    {
      id: 6,
      nom: 'Dracaufeu',
      categorie: 'dragon',
      type: ['feu'],
      taille: 1.7,
      poids: 90.5
    },
    {
      id: 7,
      nom: 'Carapuce',
      categorie: 'tortue',
      type: ['eau'],
      taille: 0.5,
      poids: 9
    },
    {
      id: 8,
      nom: 'Carabaffe',
      categorie: 'tortue',
      type: ['eau'],
      taille: 1.6,
      poids: 165.5
    },
    {
      id: 9,
      nom: 'Tortank',
      categorie: 'tortue',
      type: ['eau'],
      taille: 1.6,
      poids: 85.5
    },
    {
      id: 10,
      nom: 'Chenipan',
      categorie: 'chenille',
      type: ['insect', 'poison'],
      taille: 0.3,
      poids: 2.9
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
