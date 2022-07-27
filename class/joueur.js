export class Joueur{
    constructor(){
        this.nom = "Henry"
        this.memoire = {}
        //this.inventaire = []
    }

    setMemoire(objet){
        this.memoire = objet
    }
    
    getMemoire(){
        return this.memoire
    }
}