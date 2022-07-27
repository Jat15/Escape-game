import {Piece} from './class/piece.js'
import {Surface} from './class/surface.js'
import {Porte} from './class/porte.js'
import {Loquet} from './class/loquet.js'
import {Joueur} from './class/joueur.js'

//Création des intances


const joueur = new Joueur()
const piece = new Piece({
  nom:"La première pièce",
  surface: {
    nord: new Surface({
      nom: "mur nord",
      article: {
        defini : "le",
        indefini: "un"
      },
    }),
    sud: new Surface({
      nom: "mur sud",
      article: {
        defini : "le",
        indefini: "un"
      },
      objet: new Porte({
        nom : "porte",
        article: {
          defini : "la",
          indefini: "une"
        },
        ouverte : false,
        fermeture : new Loquet(),
      })
    }),
    est: new Surface({
      nom: "mur est",
      article: {
        defini : "le",
        indefini: "un"
      },
    }),
    ouest: new Surface({
      nom: "mur ouest",
      article: {
        defini : "le",
        indefini: "un"
      },
    }),
    sol: new Surface({
      nom: "sol",
      article: {
        defini : "le",
        indefini: "un"
      },
    }),
    plafond: new Surface({
      nom: "plafond",
      article: {
        defini : "le",
        indefini: "un"
      },
    })
  }
})

function message(blabla, style) {
  style = style ? " class=\"" + style + "\"" : ""
	document.getElementById("text_box").innerHTML += "<p"+ style +">"+blabla+"</p>";
}


piece.getObjets()
const premierDefinition = piece.regarder()
motImportant(premierDefinition)
message(premierDefinition, "text-histoire")

function motImportant(text){
  function listesActions(objet){
    const objets = piece.getObjet()

    let lesActions = Object.getOwnPropertyNames(Object.getPrototypeOf(objets[objet]))
    
    lesActions = lesActions.filter(method => "constructor" != method)

    return lesActions
  }

  // regex />mot espace (mot (espace mot)show or not) recupérée <
  const regex = /\>\w*\s(\w*(\s\w*)?)\<\//
  
  
  let memoireJoueur = joueur.getMemoire()
  let boucle = true

  while( boucle ){
    const motMemoire = text.match(regex)

    if (motMemoire != null){
      const objet = motMemoire[1]
      if (!memoireJoueur[objet]){
        const lesActions = listesActions(objet)
        memoireJoueur = {...memoireJoueur, [objet] : lesActions}
      }
    } else {
      boucle = false
    }
    text = text.replace(regex, '')
  }

  joueur.setMemoire(memoireJoueur)
}


function saisie(msg) {
  const words = msg.split(' ')
  const objets = piece.getObjet()

  let memoireJoueur = joueur.getMemoire()
  let resultat = "Cette action n'est pas disponible"


  //Vérifier si il y a des objets connu
  let objetUtiliser
  
  let lesObjets = Object.keys(memoireJoueur).toString()
  lesObjets = lesObjets.replace(/,/g, "|")
  const regexLesObjet = new RegExp(lesObjets, 'g')

  objetUtiliser = msg.match(regexLesObjet)

  //Vérifier les actions sont disponible avec l'objet
  let actionUtiliser
  if (objetUtiliser != null) {
    if (objetUtiliser.length === 1) {
      let lesActions = memoireJoueur[objetUtiliser[0]].toString()
      lesActions = lesActions.replace(/,/g, "|")
      const regexLesActions = new RegExp(`^${lesActions}`, 'g')

      actionUtiliser = msg.match(regexLesActions)
    } else if (objetUtiliser.length > 1) {
      resultat = "Vous avez mis plusieurs objet"
    }
  } else {
    resultat = "Vous n'avez mis aucun objet"
  } 



  
  if (objetUtiliser != null && actionUtiliser != null) {
    if (objetUtiliser.length === 1 && actionUtiliser.length === 1){
      resultat = objets[objetUtiliser][actionUtiliser]()
    }
  }

  motImportant(resultat)

  message(msg, "text-joueur")
  message(resultat, "text-histoire")
}

//Evement
let inputId = document.getElementById('saisi')
inputId.addEventListener('keyup', function onEvent(e) {
    if (e.keyCode === 13) {
        saisie(inputId.value)
        inputId.value ="" 
    }
});
