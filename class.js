//Les class

//la salle
class Piece{
  constructor(param) {
    this.nom = param["nom"]
    this.surface = param["surface"]
  }

  description() {
    return this.surface
  }
}

//Plafond, sol, mur
class Surface{
  constructor(param) {
    this.nom = param["nom"]
    this.objet = param["objet"]
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


function message(blabla) {
	document.getElementById("text_box").innerHTML += "<p>"+blabla+"</p>";
}


//Création des intances

const piece = new Piece({
  nom:"La première pièce",
  surface: {
    nord: new Surface({
      nom: "Mur nord"
    }),
    sud: new Surface({
      nom: "Mur sud",
      objet: new Porte({
        nom : "Une superbe porte",
        ouverte : false,
        fermeture : new Loquet()
      })
    }),
    est: new Surface({
      nom: "Mur est"
    }),
    ouest: new Surface({
      nom: "Mur ouest"
    }),
    sol: new Surface({
      nom: "Sol"
    }),
    plafond: new Surface({
      nom: "Plafond"
    })
  }
})

message(piece.surface.sud.objet.regarder())
message(piece.surface.sud.objet.ouvrir())
message(piece.surface.sud.objet.type_fermeture.tourner())
message(piece.surface.sud.objet.ouvrir())


/*
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

*/