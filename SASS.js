/*
MES NOTES DU COURS SASS SUR UDEMY (12.2021) :
https://www.udemy.com/course/sass-scss-la-formation-ultime/learn/
https://sass-lang.com/documentation


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


Une fonction (intégration de POO en général) :
C'est un sous-programme qui effectue une tâche et permet de renvoyer un résultat. Souvent elle contient un paramètre qui servira à l'exécution de la tâche en cas de récupération dans la fonction.

Un robot pour acheter quelque chose à la boulangerie effectue plusieurs tâches : 1) sort de la maison, 2) ferme la porte, 3) va à la boulangerie, 4)
prendre une baguette, 5) régler son dû, 6) revenir à la maison (ouvrir/fermer la porte, etc.).

C'est une séries d'instructions. On donne un nom expression, on ajoute peut-être un paramètre, puis on implémente son code.

En SASS, il y a des fonctions natives :

padding: length(15px 10px); // Faire la moyenne du nombre d'élément, donc réponse 2.

content to-upper-case(abcd) // ABCD

Fonctions anonymes : nous créons ici les nôtres propres
La mixin y ressemble mais ça génère un code, là où la fonction retourne un résultat

@function thewallstreet($nombreA, $nombreB) {
    @return $nombreA / $nombreB + $nombreA * ($nombreB - $sombreA);
}

content: thewallstreet(15, 3);

// Appel de la fonction et définition des deux nombres retournées


Condition :

Une instruction conditionnelle est une fonction d'un langage de programmation. La condtition renvoyée est booléenne : soit vraie soit fausse !

@if @else @elseif (SI, SINON)
%colour {
    color: white;
    background-color: $colour;
}

@if (+18) {
    // Rediriger vers le site
    color: white;
    background-color: orange;
}
@else {
    // Rester sur la page
    color: white;
    background-color: cyan;
}

$colour : orange, gray, cyan;


Les boucles :

Une structure (en bloc) permettant de répéter des instructions autant de fois qu'une condition est respectée.

En pseudo-code :
Boucle (suis-je à la dernière page ?) {
    lire le texte;
    tourner la page;
}

Directive @for utilise la boucle for, il y a aussi les deux autres types @while et @each.

Générer toutes mes grilles :
// i va prendre les valeurs de 1 à 6, et réaliser le width sur chacune contenue dans le i (pour index) :

@for $i from 1 through 6 {
    .grid-#{$i} {
        width: 100px*$i;
    }
}

La boucle @each prend deux valeurs et est utile lorsqu'il faut récupérer plusieurs images et leurs titres propres. Elle prend chaque valeur dans une boucle.

@each $name in super-img, bootstrap, js {
    .#{$name}-icon {
        background-image: url('/img/#{$name}.png');
    }
}

$i: = 0;
@while $i <= 6 {
    .grid-#{$i} {
        width: 100px*$i;
    }
    $i: $i + 1;
}
// Incrémenter sa boucle pour éviter "'l'infini" ! Celle-ci est la plus simple de construction.


Ajout dynamique de valeurs :
$list: banane, peche;
$fruit: cerise;
$list: append($list, $fruit, comma); // Fonction d'ajout du fruit à la liste

Liste de couleurs (variable, each, interpollation) :

$mapColor : blue, orange, white, yelow;
@each $value in $mapColor {
    .color-#{$value} {
        color #{$value};
    }
}

*/