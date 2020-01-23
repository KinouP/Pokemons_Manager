export class Pokemon {
  id: number;
  nom: string;
  categorie: string;
  type: Array<string>;
  taille: number;
  poids: number;
  gen: number;

  constructor(id: number, nom: string, categorie: string, type: Array<string>, taille: number, poids: number, gen: number) {
    this.id = id;
    this.nom = nom;
    this.categorie = categorie;
    this.type = type;
    this.taille = taille;
    this.poids = poids;
    this.gen = gen;
  }

}
