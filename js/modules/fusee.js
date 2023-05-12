import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine une fusée
 */
export class Fusee extends AbstractForm {
   constructor (
    x = 0,
    y = 100,
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


    let ox = this.x;
    let oy = this.y;

    ctx.translate(ox, oy);
    ctx.rotate(Math.PI / 4);
    ctx.translate(-ox, -oy);

    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.fillRect(ox + 75, oy + 150, 50, 200);

    ctx.beginPath();
    ctx.moveTo(ox + 75, oy + 150);
    ctx.lineTo(ox + 100, oy + 100);
    ctx.lineTo(ox + 125, oy + 150);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(ox + 100, oy + 200, 25, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(ox + 100, oy + 200, 20, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(ox + 100, oy + 200, 15, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "orange";
    ctx.arc(ox + 100, oy + 200, 10, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(ox + 100, oy + 200, 5, 0, 2 * Math.PI);
    ctx.fill();

    ctx.restore();
  }



 /**
   * get array of instances of this classe
   * @return {[Fusee,...]}
   */
  static buildForms() {
    // create a new rectangle object using the Immeuble class
    const myFusee = new Fusee(1, 1, 50, 50, '', '', 2, false,2)
    let max = ~~(Math.random()* 2)+1 // max in [..]
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new Fusee(
          ~~(Math.random() * 500 ) + 100,
          "-100",
          myFusee.fillColor,
          myFusee.strokeColor,
          '', // pesenteur une fois sur 2


        )
      )
    }
    // retourne un tableau d'objets de type Triangle
    return forms
  }
}