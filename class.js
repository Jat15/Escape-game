//Les class

//la salle
class Piece{
  constructor(param) {
    this.nom = param["nom"]
    this.nord = param["surface"]
  }


}

//Plafond, sol, mur
class Surface{
  constructor(param) {
    this.nom = param["nom"]
    this.nord = param["objet"]
  }
  

}


class Porte {
  constructor(param) {
    this.nom = param["nom"]
    this.ouverte = false || param["ouverte"]
    this.type_fermeture = param["fermeture"]
  }
  regarder() {
    let phrase 
    phrase = this.ouverte ? "La porte est ouverte" : "La porte est fermé"
    return phrase
  }
  ouvrir() {
    return this.type_fermeture.ouvert ? "Tu a ouvert la porte" : "La porte ne peu pas êtres ouverte"
  }
}
  
class Loquet {
  constructor() {
    this.ouvert = false;
  }
  regarder() {
    let phrase 
    phrase = this.ouvert ? "Le loquet est en position ouvert" : "Le loquet est en position fermé"
    return phrase
  }
  tourner() {
    this.ouvert = !this.ouvert
    return "Clic"
  }
}

//Création des intances

const leloquet = new Loquet()
  
const laporte = new Porte({
  nom : "porte",
  ouverte : false,
  fermeture : leloquet
})

//test
/*alert(laporte.regarder())
alert(leloquet.tourner())
alert(laporte.ouvrir())*/

//function

function message(blabla) {
	document.getElementById("text_box").innerHTML += "<p>"+blabla+"</p>";
}

//crée liste mot primaire lier au class
//crée liste mot secondaire

function saisie(msg) {
  const words = msg.split(' ')
  if (words[0]=="regarder")
  {

  }
  else
  {

  }
}



//Evement
inputId = document.getElementById('saisi')
inputId.addEventListener('keyup', function onEvent(e) {
    if (e.keyCode === 13) {
        saisie(inputId.value)
        inputId.value =""
    }
});

const salle = {
  "mur nord" : {
    message:{ }
  },
  "murd est" : {

  },
  "mur sud" : {

  },
  "mur ouest" : {

  },
  "plafond" : {

  },
  "sol" : {

  }
}