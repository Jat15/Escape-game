var loquet = false


function message(blabla) {
	document.getElementById("text_box").innerHTML += "<p>"+blabla+"</p>";
}

function saisie(msg) {
  if (/^regarder/.test(msg)) {
  	if (/^regarder$/.test(msg))
		message("Vous êtez dans une piéce completement vide, avec seulement une porte")
    else if (/porte$/.test(msg))
    	message("La porte a un loquet")
    else if(/loquet$/.test(msg))
    	message("Il faut le tourner!")
    else 
    	message("Non tu peu pas regarder sa....")
  } else if (/^ouvrir/.test(msg)) {
  	if (loquet && /porte$/.test(msg) )
    	alert("Vous savez ouvrir une porte bravo !")
    else if (/porte$/.test(msg))
    	message("cette porte est coincer!")
    else
    	message("Vous pouvez pas ouvrir sa!")
  } else if (/^tourner/.test(msg)) {
  	if (/loquet$/.test(msg)) {
        loquet = !loquet
    	message("Clic")
    } else {
    	message("Vous voulez vraiment tourner n'importe quoi!")
    }
  } else if (/^aide$/.test(msg))
		message("Vous pouvez utiliser : ouvrir, quitter, regarder, tourner")
  else
    message("Je comprend pas ce que tu dit !!!")
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



const table_regex = {
  regarder:{
    porte : "La porte a un loquet.",
    loquet : "Il faut le tourner!",
    erreur : "Non tu peu pas regarder sa...."
  },
  tourner :{
    loquet : "Clic!",
    erreur : "Vous voulez vraiment tourner n'importe quoi!",
  },
  aide : {
    erreur : "Vous pouvez utiliser : ouvrir, quitter, regarder, tourner"
  },
  ouvrir : {
    porte : {
      condition : porte,
      false : "La porte est coiné",
      true : "Vous savez ouvrir une porte bravo !"
    }
  }
}

porte = false