import Grid = require("../../Grid");
import BlocksSketch = require("../../BlocksSketch");
import Source = require("../Source");

class RecorderBlock extends Source {

    public Recorder: any;
    public BufferSource;
    public Filename: string;
    public RecordedBlob;
    public StopPlaybackOnRecord: boolean;
    public PlaybackRate: number;

    Init(sketch?: Fayde.Drawing.SketchContext): void {

        this.PlaybackRate = 1;

        super.Init(sketch);

        this.Sources.push( new Tone.Sampler(this.BufferSource) );
        this.BufferSource = this.Sources[0].context.createBufferSource();
        this.Recorder = new Recorder(App.AudioMixer.Master, {
            workerPath: "Assets/Recorder/recorderWorker.js"
        });

        this.Sources.forEach((s: Tone.Sampler) => {
            s.connect(this.EffectsChainInput);
            s.player.loop = true;
            s.volume.value = 10;
        });

        this.StopPlaybackOnRecord = false;

        this.Filename = "BlokdustRecording.wav";

        // Define Outline for HitTest
        this.Outline.push(new Point(-1, 0),new Point(0, -1),new Point(1, -1),new Point(2, 0),new Point(2, 1),new Point(1, 2));
    }

    Update() {
        super.Update();
    }

    Draw() {
        super.Draw();
        (<BlocksSketch>this.Sketch).BlockSprites.Draw(this.Position,true,"recorder");
    }

    MouseDown() {
        super.MouseDown();
        this.StartRecording();
    }

    MouseUp() {
        super.MouseUp();
        this.StopRecording();
    }

    StartRecording() {
        this.Recorder.clear();
        console.log('STARTED RECORDING...');
        this.Recorder.record();
    }

    StopRecording() {
        this.Recorder.stop();

        this.Sources.forEach((s: any)=> {
            this.TriggerRelease();
        });

        console.log('STOPPED RECORDING');
        this.SetBuffers();
    }

    StartPlayback() {
        this.Sources.forEach((s: any)=> {
            this.TriggerAttack();
        });

        console.log("STARTED PLAYBACK");
        console.log(this.GetRecordedBlob());
    }

    SetBuffers() {

        this.Recorder.getBuffers((buffers) => {

            this.BufferSource.buffer = this.Sources[0].context.createBuffer(1, buffers[0].length, 44100);
            this.BufferSource.buffer.getChannelData(0).set(buffers[0]);
            this.BufferSource.buffer.getChannelData(0).set(buffers[1]);

            this.Sources[0].buffer = this.BufferSource.buffer;

            this._OnBuffersReady();
        });
    }

    private _OnBuffersReady() {
        this.StartPlayback();
    }

    StopPlayback() {
        this.Sources.forEach((s: any)=> {
            this.TriggerRelease();
        });
        console.log("STOPPED PLAYBACK");
    }

    GetRecordedBuffers() {
        return this.BufferSource.buffer;
    }

    GetRecordedBlob() {
        this.Recorder.exportWAV((blob) => {
            this.RecordedBlob = blob;
        });

        return this.RecordedBlob;
    }

    DownloadRecording() {
        this.Recorder.setupDownload(this.GetRecordedBlob(), this.Filename);
    }

    Dispose(){
        super.Dispose();
        this.BufferSource = null;
        this.Recorder = null;
        this.RecordedBlob = null;

        this.Sources.forEach((s: any)=> {
            s.dispose();
        });

    }

    CreateSource(){
        return super.CreateSource();
    }

    CreateEnvelope(){
        return super.CreateEnvelope();
    }

    TriggerAttack(){
        super.TriggerAttack();

        if(!this.IsPowered() || this.Sources[0].player.state === "stopped") {
            this.Sources.forEach((s: any)=> {
                s.triggerAttack();
            });
        }
    }

    TriggerRelease(){
        super.TriggerRelease();

        if(!this.IsPowered()) {
            this.Sources.forEach((s: any)=> {
                s.triggerRelease();
            });
        }
    }

    TriggerAttackRelease(){

    }
}

export = RecorderBlock;