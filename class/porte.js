export class Porte{
    constructor(param) {
      this.nom = param["nom"]
      this.article = param["article"]
      this.ouverte = false || param["ouverte"]
      this.type_fermeture = param["fermeture"]
  
    }
    regarder() {
       let phrase = this.ouverte ? 
        `<strong>${this.article.defini} ${this.nom}</strong> est ouverte`
      : 
        `<strong>${this.article.defini} ${this.nom}</strong> est fermé avec <strong>${this.type_fermeture.article.indefini} ${this.type_fermeture.nom}</strong>` 
      
      return phrase
    }
    ouvrir() {
      let phrase = ""
  
      if (this.type_fermeture.ouvert) {
        if (!this.ouvert){
          phrase = `Tu a ouvert <strong>${this.article.defini} ${this.nom}</strong>`
          this.ouverte = true
        } else {
          phrase = `<strong>${this.article.defini} ${this.article.nom}</strong> est déjà ouverte`
        }
      } else {
        phrase = this.ouverte ?
          `<strong>${this.article.defini} ${this.nom}</strong> est ouverte`
        :
          `<strong>${this.article.defini} ${this.nom}</strong> est bloquer par <strong>${this.type_fermeture.article.indefini} ${this.type_fermeture.nom}</strong>`
      }
  
      return phrase
    }
    fermer() {
      let phrase = ""

      if (this.ouvert){
        phrase =  `Tu a fermé <strong>${this.article.defini} ${this.nom}</strong>`
        this.ouverte = false
      } else {
        phrase = `<strong>${this.article.defini} ${this.nom}</strong> est déjà fermé`
      }
    }
  }