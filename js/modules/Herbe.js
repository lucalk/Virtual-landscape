import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine de l'herbe
 */
export class Herbe extends AbstractForm {
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
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw (ctx) {
    ctx.save();

    // Tige de l'herbe
    ctx.beginPath();
    ctx.moveTo(this.x + 202, this.y + 30);
    ctx.lineTo(this.x + 2, this.y);
    ctx.lineWidth = this.strokeWidth;
    ctx.strokeStyle = this.strokeColor;
    ctx.stroke();

    // Feuille de l'herbe
    ctx.fillStyle = this.fillColor;
    ctx.beginPath();
    ctx.moveTo(this.x + 2, this.y + 20);
    ctx.quadraticCurveTo(this.x + 6, this.y + 10, this.x + 12, this.y + 20);
    ctx.quadraticCurveTo(this.x + 6, this.y + 15, this.x + 2, this.y + 20);
    ctx.fill();

    ctx.restore();
  }

  /**
   * get array of instances of this class 
   * @return {[Herbe,...]}
   */
  static buildForms() {
    const myHerbe = new Herbe(0, 0, 0, 0, 'green', 'green', 2, false, 2);
    let max = ~~(Math.random() * 10000) + 5000; // max in [10, 60]
    let forms = [];

    for (let i = 0; i < max; i++) {
      forms.push(
        new Herbe(
          ~~(Math.random() * 5000) - 1000,
          ~~(Math.random() * 500) + 400,
          myHerbe.width,
          myHerbe.height,
          myHerbe.fillColor,
          myHerbe.strokeColor,
          myHerbe.strokeWidth,
          myHerbe.pesenteur,
          myHerbe.ordreConstruction
        )
      );
    }

    return forms;
  }
}
