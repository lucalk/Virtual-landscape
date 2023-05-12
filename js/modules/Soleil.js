import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine un soleil en haut
 */
export class Soleil extends AbstractForm {
  constructor(
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
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction);
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save();

    // Rayons du soleil
    const nbRays = 12;
    const radius = 80;
    const angleStep = (2 * Math.PI) / nbRays;
    const centerX = this.x + radius;
    const centerY = this.y + radius;
    for (let i = 0; i < nbRays; i++) {
      const angle = i * angleStep;
      const x1 = centerX + radius * Math.cos(angle);
      const y1 = centerY + radius * Math.sin(angle);
      const x2 = centerX + 1.5 * radius * Math.cos(angle);
      const y2 = centerY + 1.5 * radius * Math.sin(angle);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = 'yellow';
      ctx.lineWidth = 5;
      ctx.stroke();
    }

    // Centre du soleil
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius / 2, 0, 2 * Math.PI);
    ctx.fill();

    ctx.restore();
  }

  /**
   * get array of instances of this class
   * @return {[Soleil,...]}
   */
  static buildForms() {
    const mySoleil = new Soleil(0, 0, 0, 0, '', '', 2, false, 2);
    let max = ~~(Math.random() *0 ) + 1; // max in [1, 10]
    let forms = [];

    for (let i = 0; i < max; i++) {
      forms.push(
        new Soleil(
          ~~(Math.random() * 1000),
          0,
          mySoleil.fillColor,
          mySoleil.strokeColor,
          '',
          false
        )
      );
    }

    return forms;
  }
}
