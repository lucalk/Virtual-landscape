import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un smiley
 */
export class Deuxieme extends AbstractForm {
   constructor (
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    ordreConstruction = 100

  ) {
    super(x,y,width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }

 /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw (ctx) {
    ctx.save()

    // votre code ici
   

    let ox = this.x
    let oy = this.y
    
      


    // 2e smiley
    
    ctx.beginPath();
    ctx.arc(ox+50, oy+90, 50, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(ox+15,oy+35);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(ox+10,oy+60);
    ctx.lineTo(ox+45,oy+10);//Ligne droite
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(ox+45,oy+10);
    ctx.lineTo(ox+90,oy+60);//Ligne gauche
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(ox+65,oy+95);
    ctx.lineTo(ox+65,oy+65);
    ctx.stroke();

    ctx.beginPath();
    //ctx.arc(175, 75, 35, 0, Math.PI, false);  // Bouche (sens horaire)
    ctx.moveTo(ox+15, oy+100);
    ctx.lineTo(ox+85,oy+100);//Trait haut bouche
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(ox+15,oy+120);
    ctx.lineTo(ox+85,oy+120);//Trait bas bouche
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(ox+65, oy+105);
    ctx.fillStyle = "red";
    ctx.arc(ox+35,oy+80, 5, 0, Math.PI * 2, true);  // Oeil gauche
    ctx.moveTo(ox+95, oy+105);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(ox+65,oy+80, 5, 0, Math.PI * 2, true);  // Oeil droite
    ctx.fill();



        
      

    ctx.restore()
  }

 /**
   * get array of instances of this classe 
   * @return {[Deuxieme,...]}
   */
  static buildForms() {
    // create a new rectangle object using the Immeuble class
    const myDeuxieme = new Deuxieme(1, 1, 50, 50, '', '', 2, false,2)
    let max = ~~(Math.random()* 10) // max in [..]
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new Deuxieme(
          ~~(Math.random() * 2000 ),
          ~~(Math.random() * 500 ),
          myDeuxieme.fillColor,
          myDeuxieme.strokeColor,
          '',
          i % 2 === 0 // pesenteur une fois sur 2
        )
      )
    }
    // retourne un tableau d'objets de type Triangle
    return forms
  }
}