var loquet = false


function message(blabla) {
	document.getElementById("text_box").innerHTML += "<p>"+blabla+"</p>";
}

let porte = false

function lecture_porte() {
  return porte
}
function action_porte() {
  porte = !porte
}

const salle = {
  regarder:{
    porte : "La porte a un loquet.",
    loquet : "Il faut le tourner!",
    erreur : "Non tu peu pas regarder sa...."
  },
  tourner :{
    loquet : {
      instruction: action_porte,
      message: "Clic!"
    },
    erreur : "Vous voulez vraiment tourner n'importe quoi!",
  },
  aide : {
    erreur : "Vous pouvez utiliser : ouvrir, quitter, regarder, tourner"
  },
  ouvrir : {
    porte : {
      condition : lecture_porte,
      false : "La porte est coiné",
      true : "Vous savez ouvrir une porte bravo !"
    }
  }
}




function saisie(msg) {
  for (let name in salle) {
    let regex = new RegExp("^"+name);

    if (regex.test(msg)) {
      for (let objet in salle[name]) {
        regex = new RegExp(objet);

        if (regex.test(msg)) {

          if (undefined != salle[name][objet]["condition"]) {
            message ( salle[name][objet]["condition"]() ? salle[name][objet]["true"] : salle[name][objet]["false"] )
          } else if (undefined != salle[name][objet]["instruction"]) {
            salle[name][objet]["instruction"]()
            message(salle[name][objet]["message"])
          } else {
            message(salle[name][objet])
          }
        }
      }
  
    }
  }
}




message("Si vous êtez nouveaux pouvez utilise la commande : \"aide\"")
message("Mise en situation")
message("Vous êtez dans une piéce completement vide, avec seulement une porte")


inputId = document.getElementById('saisi');
inputId.addEventListener('keyup', function onEvent(e) {
    if (e.keyCode === 13) {
        saisie(inputId.value)
        inputId.value =""
    }
});

