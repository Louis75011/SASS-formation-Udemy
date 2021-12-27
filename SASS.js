/*
MES NOTES DU COURS SASS SUR UDEMY (12.2021) :
https://www.udemy.com/course/sass-scss-la-formation-ultime/learn/


Introduction :

Pré-processeur pour le CSS qui ressemble au langage Ruby (aucune acolade ni point-virgule) sans utilisation de SCSS.

Syntacticaly Awesome Style Sheets.
SASS = feuille de style avec une syntaxe incroyable
SCSS = utilisation du CSS classique dans le préprocesseur (processus d'imbrication et POO en plus)

L'avantage de SASS est que la syntaxe est concise et facile à lire.
L'avantage de SCSS est que la syntaxe est plus précise, elle encourage à rédiger proprement, bonne intégration et similaire au CSS3 (genre de CSS4 !)

Installations :
gem sass, ruby + MampServer avec macOS + un éditeur de code.
Sinon passer par un logociel comme : https://scout-app.io/

Ruby :
Un langage développé par un programmeur japonais qui a recréé un langage efficace et simple de compréhension (intuitif, proche de l'anglais). SASS a été créé grâce à Ruby, c'est pour ça qu'il faut passer par son intallation.


Lancement et configuration (https://openclassrooms.com/fr/courses/6106181-simplifiez-vous-le-css-avec-sass/6599386-installez-sass-sur-votre-machine) :

npm init -y
npm install -g sass
npm run sass

In .JSON pour la compilation du fichier SASS au fichier CSS (mode compressé pour minifer) :

  "scripts": {
    "sass": "sass --watch ./design/sass/default.scss:./design/css/default.css --style compressed",
    "test": "echo \"Error: no test specified\" && exit 1"
  },


Variable :
Création de donnée stockable que permet SASS un peu comme dans JavaScript.
La variable s'écrit avec le signe $ suivi d'un nom en écriture camelCase

$nomDeVariable: valeur;

On use de ce qui est stocké dans la variable pour la définir dans une valuer css par ex un back-ground-color.


Opération et concaténation :
C'est aussi possible avec les nombres, additions, multiplications, etc.

$myVarA = "Hello ";
$myVarB = "World";
$total = $myVarA + myVarB // Envoie "Hello World"

padding: 200 px / 20 // Divise le px du padding par 20

L'opérateur & :
Un opérateur pratique qui permet le factoring notre code


footer {
    margin-top: 7rem;
    padding: 50px;
    background-color: $secondaryColor;

    span {
        color: white;

        &:hover {
            text-decoration: underline;
        }
    }
}

l'enfant "&:hover" agit ici comme un this. en JS, récupère la valeur du parent span (selecteur).


Importation :
@import 'header';
@import 'footer';
// Importations des sous fichiers de default.scss avec directive


Concept d'héritage % :

Présent souvent dans les langages.

% le symbole pourcentage désigne un bloc de propriété en SASS

// Bloc de propriétés à appeler
    %alert {
    }

// Récupération d'un bloc de propriétés
    @extend %alert;


Les mixins :

Ressemble à l'héritage mais plus poussé.

@mixin border-radius($degrees) {
    border-radius: $degrees;
}

  %alert {
        padding: 15px;
        border: 1px solid black;
        color: white;
        @include border-radius(10px);
    }

    footer {
    margin-top: 7rem;
    padding: 50px;
    background-color: $secondaryColor;
    @include border-radius(20px);
    }

Sur la variable on redéfini à chaque fois les pixels quand on appel la mixin.


Les fonctions :



*/