//Plafond, sol, mur
export class Surface{
    constructor(param) {
        this.nom = param["nom"]
        this.article = param["article"]
        this.objet = param["objet"] || false
    }

    regarder() {
        return `<strong>${this.article.indefini} ${this.nom}</strong>${this.objet ? ` avec <strong>${this.objet.article.indefini} ${this.objet.nom}</strong>` : ""}`
    }
}
