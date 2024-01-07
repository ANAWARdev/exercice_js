// Hello world!
//  Écrivez un script qui affiche le message "Hello World !" sur la page.
// document.body.innerText = "Hello World!";


// Affichage d'un formulaire avec un champ texte
// Écrivez un script qui affiche un formulaire avec un champ texte.
//  Écrivez ensuite dans ce champ le message "Vous avez réussi votre exercice".

// nbsp pour cacher tout les données récupérées par php

// document.writeln('<form id="myForm">');
// document.writeln('<div>');
// document.writeln('<label for="myField">Champ&nbsp;:</label>');
// document.writeln('<input type="text" id="myField" size="60">');
// document.writeln('</div>');
// document.writeln('</form>');
 
// document.getElementById('myField').value="Vous avez réussi votre exercice";


// Validation d'un formulaire
// Vous avez une page avec un formulaire et un champ.
// Écrivez un script qui va valider le formulaire. Si le champ est vide,
// un message d'erreur est affiché à côté du champ et le formulaire n'est pas envoyé.
// Si le champ contient des données, le formulaire peut être envoyé.
// function validateForm() {
//   if (document.getElementById("myField").value == "") {
//     document.getElementById("myFieldError").innerHTML =
//       "Le champ ne peut être vide";
//     return false;
//   } else {
//     document.getElementById("myFieldError").innerHTML = "";
//     alert("Le formulaire peut être envoyé");
//     return true;
//   }
// }

// Type des variables
// Déclarez trois variables a, b et c comme "1", "2" et a+b. 
// Afficher le type et la valeur de chaque variable. Ensuite, 
// forcez le type de a et b à entier et exécuter à nouveau a+b.
//  Afficher le type et la valeur de chaque variable.


// a = "1";
// b = "2";
// c = a + b;
 
// document.writeln("Type et valeur des variables:");
// document.writeln(" = ");
// document.writeln("  a: ("+typeof(a)+") "+a);
// document.writeln("  b: ("+typeof(b)+") "+b);
// document.writeln("  c: ("+typeof(c)+") "+c);
 
// document.writeln("");


// a = parseInt(a);
// b = parseInt(b);
// c = a + b;
 
// document.writeln("Type et valeur des variables:");
// document.writeln("-----------------------------");
// document.writeln("  a: ("+typeof(a)+") "+a);
// document.writeln("  b: ("+typeof(b)+") "+b);
// document.writeln("  c: ("+typeof(c)+") "+c);

// Fonction avec nombre indéterminé d'arguments
// Créez une fonction qui fait la somme d'un nombre indéterminé d'entiers.
//  Écrivez un script qui va tester cette fonction.
//  function sumAll() {
//     var index;
//     var sum = 0;
//     for(index = 0; index < arguments.length; index++) {
//       sum += arguments[index];
//     }
//     return sum;
//   }
   
//   var a = 12;
//   var b = 34;
//   var c = 56;
//   var d = 78;
//   var e = 90;
   
//   document.writeln("Variables définies:");
//   document.writeln("-------------------");
//   document.writeln("a = "+a);
//   document.writeln("b = "+b);
//   document.writeln("c = "+c);
//   document.writeln("d = "+d);
//   document.writeln("e = "+e);
//   document.writeln("")
   
//   document.writeln("Additions:");
//   document.writeln("----------");
//   document.writeln("Somme de a ("+a+"), b ("+b+") et c ("+c+")                 : sumAll(a, b, c)       => "+sumAll(a, b, c));
//   document.writeln("Somme de b ("+b+") et d ("+d+")                         : sumAll(b, d)          => "+sumAll(b, d));
//   document.writeln("Somme de a ("+a+"), b ("+b+"), c ("+c+"), d ("+d+") et e ("+e+") : sumAll(a, b, c, d, e) => "+sumAll(a, b, c, d, e));
//   document.writeln("Somme d'aucun élément                             : sumAll()              => "+sumAll());

// Nombre aléatoire
// Écrivez un script qui va générer un nombre aléatoire.
//  Vous devrez trouver ce nombre. Pour chaque essai,
//   le script vous dira si le nombre à trouver est plus grand ou plus petit.
//    Lorsque le nombre est trouvé,
//  le script vous dira en combien de coups.
// function verifyReply() {
//     var proposedValue = valueField.value;
//     var pattern       = /^\d+$/;
//     if(pattern.test(proposedValue)) {
//       numberTry++;
//       proposedValue = parseInt(proposedValue);
//       if(proposedValue < valueToFind) {
//         document.getElementById('result').innerHTML = "Le nombre à trouver est plus grand";
//         valueField.value = '';
//         valueField.focus();
//       } else if(proposedValue > valueToFind) {
//         document.getElementById('result').innerHTML = "Le nombre à trouver est plus petit";
//         valueField.value = '';
//         valueField.focus();
//       } else {
//         document.getElementById('result').innerHTML = "Vous avez trouvé la solution en "+numberTry+" coups";
//       }
//     } else {
//       document.getElementById('result').innerHTML = "La valeur proposée doit être un nombre!!";
//     }
//     return false;
//   }
   
//   var maxValue    = 1024;
//   var valueToFind = Math.floor((Math.random()*maxValue)+1);
//   var numberTry   = 0;
//   var valueField  = document.getElementById('valueField');
   
//   if(valueToFind > maxValue) {
//     valueToFind = maxValue;
//   }
   
//   document.getElementById('maxValue').innerHTML = maxValue;
//   valueField.value = '';
//   valueField.focus();


// Objet en chaîne de caractères
// Définir un objet 'member' (membre) avec les attributs 'id' (identifiant), 
// 'name' (nom) et 'grade' et une méthode 'toString' personnalisée.
//  Créer un objet 'team' qui contient des membres.
//   Créer une instance de 'team' et y ajouter des membres. 
//   Afficher les membres de 'team' en utilisant la fonction 'toString' de 'member'.

// function member(id, name, grade) {
//     this.id       = id;
//     this.name     = name;
//     this.grade    = grade;
//     this.toString = function() {
//       return "ID: "+this.id+", Name: "+this.name+", Grade: "+this.grade;
//     }
//   }
   
//   function team() {
//     this.members  = new Array();
//     this.add      = function(member) {
//       var index           = this.members.length;
//       this.members[index] = member;
//       return index;
//     }
//     this.toString = function() {
//       return this.members.join("\n");
//     }
//   }
   
//   var myTeam = new team();
   
//   myTeam.add(new member(42, "Alice", "ICT C"));
//   myTeam.add(new member(43, "Abdelhamid", "ICT C"));
//   myTeam.add(new member(44, "Baya", "ICT C"));
//   myTeam.add(new member(45, "Firmus", "ICT B"));
//   myTeam.add(new member(46, "Jean", "ICT C"));
//   myTeam.add(new member(47, "Badria", "ICT A"));
//   myTeam.add(new member(48, "Lalla", "ICT C"));
//   myTeam.add(new member(49, "Souleymane", "ICT B"));
   
//   document.writeln(myTeam);

// (js avancé)
// Calculateur de salaire
// Calculer le salaire d'une personne sur base de son salaire brut en décomptant 
// les frais suivants:

// Impôts sur le revenu : 18%
// Assurance employé : 7%
// Régime de pensions du Canada : 5%
// Les personnes peuvent recevoir comme supplément un bonus de 100$
//  ou une allocation de 150$.

// Il est possible de recevoir des réductions sur les 
// impôts sur le revenu sous certaines conditions :

// Si le travailleur est une femme, elle reçoit 2% de réduction.
// Si le travailleur a 3 personnes à charge, il reçoit 1% de réduction.
// Si le travailleur a 4 personnes à charge, il reçoit 2% de réduction.