import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine une poule
 */
export class Poule extends AbstractForm {
   constructor (
    x = 0,
    y = 100,
    width = 0,
    height = 0,
    fillColor = 'beige',
    strokeColor = 'marron',
    strokeWidth = 2,
    pesenteur = true,
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


    ctx.fillStyle = 'beige';
    ctx.fillRect(this.x + 20, this.y + 320, 60, 60); // Corps


    ctx.beginPath();
    ctx.arc(this.x + 50, this.y + 305, 15, 0, 2 * Math.PI); // Tête
    ctx.fill();

    // Yeux
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.x + 45, this.y + 300, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(this.x + 55, this.y + 300, 5, 0, 2 * Math.PI);
    ctx.fill();

    // Bec
    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.moveTo(this.x + 50, this.y + 305);
    ctx.lineTo(this.x + 45, this.y + 310);
    ctx.lineTo(this.x + 55, this.y + 310);
    ctx.closePath();
    ctx.fill();

    // Pattes
    ctx.fillStyle = 'yellow';
    ctx.fillRect(this.x + 25, this.y + 380, 10, 30);
    ctx.fillRect(this.x + 65, this.y + 380, 10, 30);

    ctx.restore();
  }

  /**
   * get array of instances of this class 
   * @return {[Poule,...]}
   */
  static buildForms() {
    const myPoule = new Poule(0, 0, 0, 0, 'beige', 'marron', 2, true, 2);
    let max = ~~(Math.random() * 7) + 1; // max in [1, 10]
    let forms = [];

    for (let i = 0; i < max; i++) {
      forms.push(
        new Poule(
          ~~(Math.random() * 1000),
          "150",
          myPoule.fillColor,
          myPoule.strokeColor,
          '',
          true
        )
      );
    }

    return forms;
  }
}
