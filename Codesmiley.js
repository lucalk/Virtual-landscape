
/**
 * Déssine un triangle
 */
export class Smiley extends AbstractForm {
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
    ordreConstruction = 100
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }


   smiley(ctx, dx, dy) {
    let ox = dx
    let oy = dy

    ctx.beginPath();
    ctx.arc(ox + 50, oy + 50, 50, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(ox + 85, oy + 50);
    ctx.arc(ox + 50, oy + 50, 35, 0, Math.PI, false);  // Bouche (sens horaire)
    ctx.moveTo(ox + 40, oy + 40);
    ctx.arc(ox + 35, oy + 40, 5, 0, Math.PI * 2, true);  // Oeil gauche
    ctx.moveTo(ox + 70, oy + 40);
    ctx.arc(ox + 65, oy + 40, 5, 0, Math.PI * 2, true);  // Oeil droite
    ctx.stroke();
}

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save()
    this.smiley(ctx, this.x, this.y)
    
    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Triangle,...]}
   */
  static buildForms() {
    // create a new smiley object using the Smiley class
    let forms = []
    // ~~(Math.random() * 5) + 5 // max in [5..10]
    forms.push(new Smiley(~~(Math.random() * 500) ,~~(Math.random() * 500) ,100,100,'blue','black', 1, true,50))
    forms.push(new Smiley(~~(Math.random() * 500) ,~~(Math.random() * 700) ,100,100,'blue','black', 1, false,50))

    console.log('nb de smileys : ' + forms.length)

    // retourne un tableau d'objets de type Smiley
    return forms
  }

}






// nouveau 




import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un smiley
 */
export class Smiley extends AbstractForm {
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
    super(x,y,width, height, fillColor, strokeColor, strokeWidth, pesenteur, odreConstruction)
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
    
      
    ctx.beginPath();
    ctx.arc(ox+50, oy+90, 50, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(ox+15,oy+35);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(ox+50, oy+90, 35, 0, Math.PI, false);  // Bouche (sens horaire)
    ctx.moveTo(ox+15, oy+35);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(ox+65,oy+80, 5, 0, Math.PI * 2, true);  // Oeil gauche
    ctx.moveTo(ox+15,oy+35);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(ox+35,oy+80, 5, 0, Math.PI * 2, true);  // Oeil droite
    ctx.fill();



        
      

    ctx.restore()
  }

 /**
   * get array of instances of this classe 
   * @return {[Smiley,...]}
   */
  static buildForms() {
    // create a new rectangle object using the Immeuble class
    const mySmiley = new Smiley(1, 1, 50, 50, '', '', 2, true,2)
    let max = ~~(Math.random()* 4) + 1 // max in [..]
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new Smiley(
          ~~(Math.random() * 500 ),
          ~~(Math.random() * 500 ),
          mySmiley.fillColor,
          mySmiley.strokeColor,
          '',
          i % 2 === 0 // pesenteur une fois sur 2
        )
      )
    }
    // retourne un tableau d'objets de type Triangle
    return forms
  }
}
