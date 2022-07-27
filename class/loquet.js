export class Loquet{

    constructor() {
      this.nom = "loquet"
      this.article = {defini:"le", indefini:"un"}
      this.ouvert = false
    }

    regarder() {
      let phrase 
      phrase = 
        this.ouvert ? 
            `<strong>${this.article.defini} ${this.nom}</strong> est en position ouvert`
        : 
            `<strong>${this.article.defini} ${this.nom}</strong> est en position fermé`
      return phrase
    }

    tourner() {
      this.ouvert = !this.ouvert
      return "Clic"
    }
}