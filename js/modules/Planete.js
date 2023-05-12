import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine une sorte de planete...
 */
export class Planete extends AbstractForm {
  // add default values to avoid errors on empty arguments
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    ordreConstruction = 1
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }

  /**
   * Dessine la forme spécifique à cette classe (ici une "planete")
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save()

    // set the styles for this shape
    ctx.fillStyle = this.fillColor
    ctx.lineWidth = this.strokeWidth

    // create the *path*
    ctx.beginPath()
    ctx.strokeStyle = this.strokeColor

    // pousse l'objet au bas de l'écran
    let new_y = (this.pesanteur) ? ctx.canvas.height - this.height : this.y

    let rayon = this.width / 2;
    let sommets = [];
    let nbSommets = 31;
    let angle = 0;
    let x1
    let y1;
    let ox
    let oy // origine
    ox = this.x + rayon;
    oy = this.y + rayon;

    // calcul des sommets du graphe
    for (let i = 0; i < nbSommets; i++) {
      x1 = ox + Math.cos(angle) * rayon;
      y1 = oy + Math.sin(angle) * rayon;
      sommets.push({ 'x': ~~Math.round(x1), 'y': ~~Math.round(y1) });
      angle += ((2 * Math.PI) / nbSommets);
    }
    // maintenant on dessine les arrêtes qui relie un sommet à tous les autres
    for (let i = 0; i < sommets.length; i++) {
      let p1 = sommets[i];
      for (let j = i + 1; j < sommets.length; j++) {
        let p2 = sommets[j];
        ctx.moveTo(p1.x, p1.y)
        ctx.lineTo(p2.x, p2.y);
      }
    }
    // ctx.rect(this.x, this.y, this.width, this.height)
    ctx.closePath()

    ctx.stroke()

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Planete...]}
   */
  static buildForms() {
    const cx = window.innerWidth / (~~(Math.random() * 4) + 2)
    const w = window.innerWidth / (~~(Math.random() * 4) + 2)

    const myPlanete = new Planete(cx, 10, w, w, 'gold', '', 1, false)
    const forms = [myPlanete]
    return forms
  }

}
