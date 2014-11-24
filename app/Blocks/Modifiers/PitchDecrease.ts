//import PitchModule = require("../AudioEffectComponents/Pitch");
//import IModifier = require("../IModifier");
//import Modifier = require("../Modifier");
//import Grid = require("../../Grid");
//
//class PitchDecrease extends Modifier {
//
//    constructor(grid: Grid, position: Point){
//        super(grid, position);
//
//        var effect = new PitchModule(0.5); // Pitch decreases by 4ths
//
//        //TODO: Make pitch modifier take parameter scaled to musical notation: (EXAMPLE 1=A4, 2=Bb4 3=B4, 4=C4...)
//
//        this.Effects.Add(effect);
//
//        // Define Outline for HitTest
//        this.Outline.push(new Point(-1, 0),new Point(0, -1),new Point(1, 0),new Point(0, 1));
//    }
//
//    Draw(ctx:CanvasRenderingContext2D) {
//        super.Draw(ctx);
//
//        this.Ctx.beginPath();
//        ctx.fillStyle = "#fff";
//        this.DrawMoveTo(-1,0);
//        this.DrawLineTo(0,-1);
//        this.DrawLineTo(1,0);
//        this.DrawLineTo(0,1);
//        ctx.closePath();
//        ctx.fill();
//    }
//
//}
//
//export = PitchDecrease;