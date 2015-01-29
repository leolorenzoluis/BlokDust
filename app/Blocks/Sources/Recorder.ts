import App = require("../../App");
import IBlock = require("../IBlock");
import Block = require("../Block");
import IModifier = require("../IModifier");
import Modifiable = require("../Modifiable");
import Grid = require("../../Grid");
import Source = require("./Source");
import Type = require("../BlockType");
import BlockType = Type.BlockType;
import Particle = require("../../Particle");

declare var RecorderJS;

class RecorderBlock extends Source {

    public Recorder: any;
    //public MonoRecording: boolean = true;
    //private _RecIndex: number = 0;

    constructor(grid: Grid, position: Point) {
        this.BlockType = BlockType.Recorder;

        super(grid, position);


        this.Recorder = new Recorder(App.AudioMixer.Master);

        // Define Outline for HitTest
        this.Outline.push(new Point(-1, 0),new Point(0, -1),new Point(1, -1),new Point(2, 0),new Point(1, 1),new Point(0, 1));
    }

    Update() {
        super.Update();

    }

    Draw() {
        super.Draw();

        this.Ctx.beginPath();
        this.Ctx.fillStyle = App.Palette[9];// GREEN
        this.DrawMoveTo(-1,-1);
        this.DrawLineTo(1,-1);
        this.DrawLineTo(2,0);
        this.DrawLineTo(0,2);
        this.DrawLineTo(-1,1);
        this.Ctx.closePath();
        this.Ctx.fill();

        this.Ctx.beginPath();
        this.Ctx.fillStyle = App.Palette[1];// WHITE
        this.DrawMoveTo(-1,-1);
        this.DrawLineTo(0,0);
        this.DrawLineTo(0,2);
        this.DrawLineTo(-1,1);
        this.Ctx.closePath();
        this.Ctx.fill();
    }

    MouseDown() {
        super.MouseDown();

        console.log('start recording');
        //this.StartRecording();
    }

    MouseUp() {
        super.MouseUp();

        console.log('stop recording');
        //this.StopRecording();
    }

    ParticleCollision(particle: Particle) {
        super.ParticleCollision(particle);

        particle.Dispose();
    }

    //
    //Delete(){
    //
    //}
    //
    //StartRecording() {
    //    this.Recorder.Clear();
    //    this.Recorder.Record();
    //}
    //
    //StopRecording() {
    //    this.Recorder.Stop();
    //    this.Recorder.GetBuffers( this.Recorder.exportWAV( this._doneEncoding ) )
    //}
    //
    //SaveRecording() {
    //    if (this.MonoRecording) {
    //        this.Recorder.ExportMono( this._doneEncoding );
    //    } else {
    //        this.Recorder.ExportStereo( this._doneEncoding );
    //    }
    //}
    //
    //PlayRecording() {
    //
    //}
    //
    //DownloadRecording() {
    //    this.Recorder.Download(this.Recorder.getBuffer());
    //}
    //
    //private _doneEncoding( blob ) {
    //    this.Recorder.Download( blob, "FILENAME" + ((this._RecIndex<10)?"0":"") + this._RecIndex + ".wav" );
    //    this._RecIndex++;
    //}
}

export = RecorderBlock;