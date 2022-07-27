export class Piece{
  constructor(param) {
    this.nom = param["nom"]
    this.article = param["article"]
    this.surface = param["surface"]
    this.objets = {}
  }
  
  
  getObjets() {   
    let objets = {}

    Object.keys(this.surface).forEach( lasurface => {
      const objet = this.surface[lasurface]["objet"]
      const surface = this.surface[lasurface]
      objets = { ...objets, [surface.nom]: surface}
      if (objet){
        objets = { ...objets, [objet.nom]: objet}
        if (objet.type_fermeture){
          objets = { ...objets, [objet.type_fermeture.nom]: objet.type_fermeture}
        }
      }
    })

    this.objects = objets
  }
  
  
  regarder() {
    const lessurfaces = Object.keys(this.surface)
    
    let messageDeDescription = "Autour de vous il y a "

    lessurfaces.forEach( unesurface => {
      if (unesurface != "undefined") {
        messageDeDescription += `<strong>${this.surface[unesurface].article.defini} ${this.surface[unesurface].nom}</strong> ${this.surface[unesurface].objet? `avec  <strong>${this.surface[unesurface].objet.article.defini} ${this.surface[unesurface].objet.nom}</strong>`:``}, `
      }
    })

    return messageDeDescription
  }

  getObjet() {
    return this.objects
  }
}
