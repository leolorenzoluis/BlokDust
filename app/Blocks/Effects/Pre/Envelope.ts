import {IAudioChain} from '../../../Core/Audio/Connections/IAudioChain';
import IDisplayContext = etch.drawing.IDisplayContext;
import {ISource} from '../../ISource';
import {MainScene} from '../../../MainScene';
import Point = etch.primitives.Point;
import {PreEffect} from '../PreEffect';
import {IApp} from "../../../IApp";

declare var App: IApp;

export class Envelope extends PreEffect {

    public Params: EnvelopeParams;
    public Defaults: EnvelopeParams;

    Init(drawTo: IDisplayContext): void {

        this.BlockName = App.L10n.Blocks.Effect.Blocks.Envelope.name;

        this.Defaults = {
            attack: 1,
            decay: 0.5,
            sustain: 0.7,
            release: 1
        };

        this.PopulateParams();

        super.Init(drawTo);

        // Define Outline for HitTest
        this.Outline.push(new Point(-1, -1),new Point(1, -1),new Point(1, 1),new Point(0, 2),new Point(-1, 1));
    }

    Draw() {
        super.Draw();
        this.DrawSprite(this.BlockName);
    }

    UpdateConnections(chain: IAudioChain) {
        super.UpdateConnections(chain);

        chain.Sources.forEach((source: ISource) => {

            if (source.Envelopes.length) {
                source.Envelopes.forEach((e: Tone.AmplitudeEnvelope) => {
                    e.attack = this.Params.attack;
                    e.decay = this.Params.decay;
                    e.sustain = this.Params.sustain;
                    e.release = this.Params.release;
                });
            } else if (source.Sources[0] instanceof Tone.Simpler) {
                source.Sources.forEach((s: Tone.Simpler) => {
                    const e = s.envelope;
                    e.attack = this.Params.attack;
                    e.decay = this.Params.decay;
                    e.sustain = this.Params.sustain;
                    e.release = this.Params.release;
                });
            }
        });
    }

    SetParam(param: string, value: number) {
        super.SetParam(param, value);

        this.Params[param] = value;

        if (this.Chain && this.Chain.Sources) {
            this.Chain.Sources.forEach((source: ISource) => {
                if (source.Envelopes.length) {
                    source.Envelopes.forEach((e: Tone.AmplitudeEnvelope) => {
                        e.attack = this.Params.attack;
                        e.decay = this.Params.decay;
                        e.sustain = this.Params.sustain;
                        e.release = this.Params.release;
                    });
                } else if (source.Sources[0] instanceof Tone.Simpler) {
                    source.Sources.forEach((s: Tone.Simpler) => {
                        const e = s.envelope;
                        e.attack = this.Params.attack;
                        e.decay = this.Params.decay;
                        e.sustain = this.Params.sustain;
                        e.release = this.Params.release;
                    });
                }
            });
        }
    }

    UpdateOptionsForm() {
        super.UpdateOptionsForm();

        this.OptionsForm =
        {
            "name": "Envelope",
            "parameters": [

                {
                    "type" : "ADSR",
                    "name": "ADSR",
                    "setting": "adsr",
                    "nodes": [
                        {
                            "setting": "attack",
                            "value": this.Params.attack,
                            "min": 0.01,
                            "max": 5
                        },

                        {
                            "setting": "decay",
                            "value": this.Params.decay,
                            "min": 0.01,
                            "max": 5
                        },

                        {
                            "setting": "sustain",
                            "value": this.Params.sustain,
                            "min": 0,
                            "max": 1
                        },

                        {
                            "setting": "release",
                            "value": this.Params.release,
                            "min": 0.01,
                            "max": 5
                        }
                    ]
                }
            ]
        };
    }
}
