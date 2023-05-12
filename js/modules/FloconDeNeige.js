import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un flocon de neige
 */
export class FloconDeNeige extends AbstractForm {
  constructor (
    x = 0,
    y = 0,
    size = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    ordreConstruction = 100
  ) {
    super(x, y, size, size, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction);
    this.size = size;
  }


 /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw (ctx) {
    ctx.save()

    // votre code ici



    ctx.fillStyle = this.fillColor;
    ctx.beginPath();
    ctx.moveTo(this.x + this.size * Math.cos(0), this.y + this.size * Math.sin(0));
    for (let i = 1; i < 6; i++) {
      ctx.lineTo(this.x + this.size * Math.cos(i * 2 * Math.PI / 6), this.y + this.size * Math.sin(i * 2 * Math.PI / 6));
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  /**
   * get array of instances of this classe 
   * @return {[FloconDeNeige,...]}
   */
  static buildForms() {
    // create a new rectangle object using the FloconDeNeige class
    const myFloconDeNeige = new FloconDeNeige(1, 1, 10, '', '', 2, false, 2);
    const max = ~~(Math.random() * 300) + 100; // (1..301)
    let forms = [];
    for (let i = 0; i < max; i++) {
      forms.push(
        new FloconDeNeige(
          ~~(Math.random() * 2000),
          ~~(Math.random() * 250),
          myFloconDeNeige.size,
          '#fff',
          '',
          '',
          i % 2 === 0 // pesenteur une fois sur 2 
        )
      );
    }
    // retourne un tableau d'objets de type FloconDeNeige
    return forms;
  }
}
