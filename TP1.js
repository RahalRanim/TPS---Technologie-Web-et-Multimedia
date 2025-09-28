/* ==========================
   Partie 1 – Rappel et Syntaxe moderne
   ========================== */

// Exercice 1 – Variables et portée
console.log('\n--- Exercice 1 : Variables et portée ---');

var aVar = 'je suis var (globale ou fonction)';
let aLet = 'je suis let (bloc)';
const aConst = 'je suis const (bloc, non réaffectable)';

console.log('Avant bloc :', { aVar, aLet, aConst });

{
  // nouveau bloc
  var aVar = 'var modifiée à l\'intérieur du bloc'; // var remplace la variable dans la portée fonction/globale
  let aLet = 'let locale au bloc';
  const aConstBloc = 'const locale au bloc';
  console.log('Dans bloc :', { aVar, aLet, aConstBloc });
}

console.log('Après bloc :', { aVar, aLet, aConst });

// var : sort du bloc -> écrase la valeur globale
// let : reste local au bloc
// const : reste local au bloc

// Question piège : que se passe-t-il si on réaffecte une const ?
console.log('\nQuestion piège : réaffecter une const :');
try {
  // aConst = 'nouvelle valeur'; // décommenter provoque une erreur TypeError en mode strict
  // Pour montrer proprement :
  Object.defineProperty(globalThis, 'demoConst', { value: 'initial' });
  // Tentative de réaffectation provoquera une erreur si demoConst était écrite en tant que const dans le code.
  console.log('Réaffectation d\'une const provoque une erreur (TypeError) à l\'exécution).');
} catch (err) {
  console.error('Erreur lors de la réaffectation :', err.message);
}


// Exercice 2 – Fonctions fléchées
console.log('\n--- Exercice 2 : Fonctions fléchées ---');

// Fonction classique
function sommeClassique(a, b) {
  return a + b;
}
console.log('sommeClassique(2,3) =', sommeClassique(2, 3));

// Réécriture en fonction fléchée (avec return implicite)
const somme = (a, b) => a + b; // return implicite
console.log('somme(2,3) =', somme(2, 3));

// Remarques :
// - Les fonctions fléchées n'ont pas leur propre this ni arguments.


// Exercice 3 – Destructuring
console.log('\n--- Exercice 3 : Destructuring ---');
const user = { name: "Noor", age: 10, city: "Tunis" };
// Extraire name et age
const { name, age } = user;
console.log('name =', name, ', age =', age);


// Exercice 4 – Spread Operator
console.log('\n--- Exercice 4 : Spread Operator ---');
const t1 = [1, 2, 3];
const t2 = [4, 5, 6];
// Fusionner deux tableaux
const fusion = [...t1, ...t2];
console.log('fusion =', fusion);

// Faire une copie d'un objet puis modifier une valeur
const original = { a: 1, b: 2, c: 3 };
const copie = { ...original, b: 42 }; // copie avec b modifié
console.log('original =', original);
console.log('copie =', copie);


/* ==========================
   Partie 2 – Objets, Classes, Tableaux
   ========================== */

// Exercice 5 – Objet simple
console.log('\n--- Exercice 5 : Objet livre ---');

const livre = {
  titre: 'Le Petit Prince',
  auteur: 'Antoine de Saint-Exupéry',
  annee: 1943,
  getInfo() {
    return `"${this.titre}" par ${this.auteur} (${this.annee})`;
  }
};

console.log('getInfo ->', livre.getInfo());

// Exercice 6 – Classe ES6
console.log('\n--- Exercice 6 : Classe Etudiant ---');

class Etudiant {
  constructor(nom, note) {
    this.nom = nom;
    this.note = note;
  }

  getMention() {
    if (this.note >= 16) return 'Très bien';
    if (this.note >= 14) return 'Bien';
    if (this.note >= 10) return 'Passable';
    return 'Échec';
  }
}

// Instancier 3 étudiants
const etudiants = [
  new Etudiant('Amina', 17),
  new Etudiant('Sami', 15),
  new Etudiant('Lina', 9)
];

etudiants.forEach(e => console.log(`${e.nom} (${e.note}) -> ${e.getMention()}`));


// Exercice 7 – Tableaux avancés
console.log('\n--- Exercice 7 : Tableaux avancés ---');
const notes = [12, 5, 17, 9, 20];

// 1. Calculer la moyenne (avec reduce)
const sommeNotes = notes.reduce((acc, val) => acc + val, 0);
const moyenne = sommeNotes / notes.length;
console.log('Moyenne =', moyenne);

// 2. Trier le tableau en ordre décroissant (sans modifier l'original)
const notesDesc = [...notes].sort((a, b) => b - a);
console.log('Notes (décroissant) =', notesDesc);

// 3. Filtrer les notes >= 10
const notesAdmissibles = notes.filter(n => n >= 10);
console.log('Notes >= 10 =', notesAdmissibles);


