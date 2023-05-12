import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un smiley
 */
export class Troisieme extends AbstractForm {
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
    
      


   // 3e smiley

   ctx.beginPath();
   ctx.fillStyle = "purple";
   ctx.arc(ox+50,oy+90, 50, 0, Math.PI * 2, true);  // Cercle extérieur
   ctx.moveTo(ox+15,oy+55);
   ctx.fill();

   ctx.beginPath();
   ctx.arc(ox+50, oy+120, 35, 0, Math.PI, true);  // Bouche (sens horaire)
   ctx.moveTo(ox+65,oy+105);
   ctx.stroke();
   
   ctx.beginPath();
   ctx.fillStyle = "blue";
   ctx.arc(ox+35,oy+80, 5, 0, Math.PI * 2, true);  // Oeil gauche
   ctx.moveTo(ox+95,oy+105);
   ctx.fill();

   ctx.beginPath();
   ctx.fillStyle = "orange";
   ctx.arc(ox+65, oy+80, 5, 0, Math.PI * 2, true);  // Oeil droite
   ctx.fill();

   ctx.beginPath();
   ctx.lineWidth = '5';
   ctx.strokeStyle = '#4C8';
   ctx.arc(ox-10,oy+70,20,0.5*Math.PI, 1.8*Math.PI,false);//Arc vert
   ctx.closePath();
   ctx.stroke();

   ctx.beginPath();
   ctx.lineWidth = '5';
   ctx.strokeStyle = '#48C';
   ctx.arc(ox+110,oy+70,20,0.5*Math.PI, 1.2*Math.PI, true);//Arc bleu
   ctx.closePath();
   ctx.stroke();



        
      

    ctx.restore()
  }

 /**
   * get array of instances of this classe 
   * @return {[Troisieme,...]}
   */
  static buildForms() {
    // create a new rectangle object using the Immeuble class
    const myTroisieme = new Troisieme(1, 1, 50, 50, '', '', 2, false,2)
    let max = ~~(Math.random()* 3) +1// max in [..]
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new Troisieme(
          ~~(Math.random() * 1000 ),
          ~~(Math.random() * 200 ) + 100,
          myTroisieme.fillColor,
          myTroisieme.strokeColor,
          '',
          i % 2 === 0 // pesenteur une fois sur 2
        )
      )
    }
    // retourne un tableau d'objets de type Triangle
    return forms
  }
}