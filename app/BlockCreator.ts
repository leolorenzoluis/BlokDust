/**
 * ADDING BLOCKS TO PROJECT
 * ------------------------
 *
 * 1: Import the block module below
 * 2: Add the block Name, ID & Description to "MenuJson" for it to appear in the menu
 *
 */

import IBlock = require("./Blocks/IBlock");

// SOURCE BLOCKS //
import ToneSource = require("./Blocks/Sources/ToneSource");
import Noise = require("./Blocks/Sources/Noise");
import Microphone = require("./Blocks/Sources/Microphone");
import Soundcloud = require("./Blocks/Sources/Soundcloud");
import Granular = require("./Blocks/Sources/Granular");
import Recorder = require("./Blocks/Sources/Recorder");

// EFFECTS BLOCKS //
import AutoWah = require("Blocks/Effects/Post/AutoWah");
import BitCrusher = require("Blocks/Effects/Post/BitCrusher");
import Chomp = require("Blocks/Effects/Post/Chomp");
import Chopper = require("Blocks/Effects/Post/Chopper");
import Chorus = require("Blocks/Effects/Post/Chorus");
import Convolver = require("Blocks/Effects/Post/ConvolutionReverb");
import Delay = require("Blocks/Effects/Post/Delay");
import Distortion = require("Blocks/Effects/Post/Distortion");
import Envelope = require("Blocks/Effects/Pre/Envelope");
import EQ = require("Blocks/Effects/Post/EQ");
import Filter = require("Blocks/Effects/Post/Filter");
import Gain = require("Blocks/Effects/Post/Gain");
import LFO = require("Blocks/Effects/Pre/LFO");
import Panner = require("Blocks/Effects/Post/Panner");
import Phaser = require("Blocks/Effects/Post/Phaser");
import Pitch = require("Blocks/Effects/Pre/Pitch");
import Reverb = require("Blocks/Effects/Post/Reverb");
import Scuzz = require("Blocks/Effects/Pre/Scuzz");

// POWER BLOCKS //
import ParticleEmitter = require("./Blocks/Power/ParticleEmitter");
import Power = require("./Blocks/Power/Power");
import Toggle = require("./Blocks/Power/Logic/Toggle");
import Momentary = require("./Blocks/Power/Logic/Momentary");
import Laser = require("./Blocks/Power/Laser");

// INTERACTION BLOCKS //
import ComputerKeyboard = require("Blocks/Interaction/ComputerKeyboard");
import MIDIController = require("Blocks/Interaction/MIDIController");

class BlockCreator {

    //TODO: Do all the blocks need to be here??? What does this do?

    // create instances of blocks for GetBlock() to return.

    // SOURCE BLOCKS //
    private static ToneSource: ToneSource = new ToneSource();
    private static Noise: Noise = new Noise();
    private static Microphone: Microphone = new Microphone();
    private static Soundcloud: Soundcloud = new Soundcloud();
    private static Granular: Granular = new Granular();
    private static Recorder: Recorder = new Recorder();

    // EFFECT BLOCKS //
    private static AutoWah: AutoWah = new AutoWah();
    private static BitCrusher: BitCrusher = new BitCrusher();
    private static Chomp: Chomp = new Chomp();
    private static Chopper: Chopper = new Chopper();
    private static Chorus: Chorus = new Chorus();
    private static Convolver: Convolver = new Convolver();
    private static Delay: Delay = new Delay();
    private static Distortion: Distortion = new Distortion();
    private static Envelope: Envelope = new Envelope();
    private static EQ: EQ = new EQ();
    private static Filter: Filter = new Filter();
    private static Gain: Gain = new Gain();
    private static LFO: LFO = new LFO();
    private static Panner: Panner = new Panner();
    private static Pitch: Pitch = new Pitch();
    private static Reverb: Reverb = new Reverb();
    private static Scuzz: Scuzz = new Scuzz();

    // POWER BLOCKS //
    private static ParticleEmitter: ParticleEmitter = new ParticleEmitter();
    private static Power: Power = new Power();
    private static Toggle: Toggle = new Toggle();
    private static Momentary: Momentary = new Momentary();
    private static Laser: Laser = new Laser();

    // INTERACTION BLOCKS //
    private static ComputerKeyboard: ComputerKeyboard = new ComputerKeyboard();
    private static MIDIController: MIDIController = new MIDIController();

    public static MenuJson: any = {
        "categories": [
            {
                "name": "Source",
                "items": [
                    {
                        "name": "Tone",
                        "id": ToneSource,
                        "description": "A single oscillator with frequency and waveform controls."
                    },
                    {
                        "name": "Noise",
                        "id": Noise,
                        "description": "A noise generator with 'White', 'Brown' and 'Pink' waveform types."
                    },
                    {
                        "name": "Microphone",
                        "id": Microphone,
                        "description": "Captures sound from the devices microphone input. Connect it to a Power block to arm it and avoid audio feedback by using headphones."
                    },
                    {
                        "name": "SoundCloud",
                        "id": Soundcloud,
                        "description": "A sampler loaded with a SoundCloud track of your choice. Select a section of the audio and loop it, reverse it or change the playback rate"
                    },
                    {
                        "name": "Granular",
                        "id": Granular,
                        "description": "It takes a SoundCloud sample of your choice and chops it into tiny pieces and uses that as a sound source."
                    },
                    {
                        "name": "Recorder",
                        "id": Recorder,
                        "description": "Records the master output and then works like a SoundCloud Block. You can then play back your recordings on a loop and at different pitches."
                    }
                ]
            },

            // todo: put descriptions in config.json? then they can potentially be localised
            {
                "name": "Effects",
                "items": [
                    {
                        "name": "Autowah",
                        "id": AutoWah,
                        "description": "Creates a filter sweep in response to the volume of audio input when connected to any source block."
                    },
                    {
                        "name": "Bit Crusher",
                        "id": BitCrusher,
                        "description": "Creates distortion by reducing the audio resolution when connected to any source block."
                    },
                    {
                        "name": "Chomp",
                        "id": Chomp,
                        "description": "A randomised filter with adjustable rate & width. Can connect to any source block."
                    },
                    {
                        "name": "Chopper",
                        "id": Chopper,
                        "description": "Volume modulation with adjustable rate & depth. Can connect to any source block."
                    },
                    {
                        "name": "Chorus",
                        "id": Chorus,
                        "description": "Stereo chorus/flange. Creates a delayed & modulated copy of the audio. Can connect to any source block."
                    },
                    {
                        "name": "Convolution",
                        "id": Convolver,
                        "description": "A reverb which simulates a physical space by using a recorded sample. Can connect to any source block."
                    },
                    {
                        "name": "Delay",
                        "id": Delay,
                        "description": "A 'ping-pong' delay with adjustable time & feedback. Can connect to any source block."
                    },
                    {
                        "name": "Distortion",
                        "id": Distortion,
                        "description": "A digital clipping distortion. Can connect to any source block."
                    },
                    {
                        "name": "Envelope",
                        "id": Envelope,
                        "description": "An ADSR envelope. Alters the volume of sound over time. Can connect to Tone and Noise source blocks."
                    },
                    {
                        "name": "EQ",
                        "id": EQ,
                        "description": "A 'parametric' EQ with 4 filters. Can connect to any source blocks."
                    },
                    {
                        "name": "Filter",
                        "id": Filter,
                        "description": "A 'peaking' filter used for boosting or suppressing frequencies."
                    },
                    {
                        "name": "Gain",
                        "id": Gain,
                        "description": "Increase or decrease the volume."
                    },
                    {
                        "name": "LFO",
                        "id": LFO,
                        "description": "Modulates the pitch of a Tone block."
                    },
                    {
                        "name": "Phaser",
                        "id": Phaser,
                        "description": "Creates a sweeping effect by mixing the original audio with a slightly shifted out-of-time copy."
                    },
                    {
                        "name": "Pitch",
                        "id": Pitch,
                        "description": "Multiplies the pitch of a source. A pitch setting of 2 would mean twice the pitch or an octave higher."
                    },
                    {
                        "name": "Reverb",
                        "id": Reverb,
                        "description": "A digital reverb based on the Freeverb which uses 8 comb filters on both left and right channels."
                    },
                    {
                        "name": "Scuzz",
                        "id": Scuzz,
                        "description": "No idea. Can connect to Tone Blocks"
                    }
                ]
            },

            {
                "name": "Power",
                "items": [
                    {
                        "name": "Particle Emitter",
                        "id": ParticleEmitter,
                        "description": "Fires particles across the screen. When a particle hits a source block, that source is momentarily triggered."
                    },
                    {
                        "name": "Power",
                        "id": Power,
                        "description": "Creates energy for source blocks, particle emitters & lasers. This allows them to be constantly on."
                    },
                    {
                        "name": "Toggle Switch",
                        "id": Toggle,
                        "description": "Toggles energy for source blocks, particle emitters & lasers."
                    },
                    {
                        "name": "Momentary Switch",
                        "id": Momentary,
                        "description": "Momentary energy for source blocks, particle emitters & lasers."
                    },
                    {
                        "name": "Laser",
                        "id": Laser,
                        "description": "Fires a super cool laser beam that gives energy to anything it touches."
                    }
                ]
            },

            {
                "name": "Interaction",
                "items": [
                    {
                        "name": "Computer Keyboard",
                        "id": ComputerKeyboard,
                        "description": "Control a source using your computer keys. In monophonic mode, one note is produced at a time. Glide can be added to sweep from one note to another. In polyphonic mode, multiple notes can be played together."
                    },
                    {
                        "name": "MIDI Controller",
                        "id": MIDIController,
                        "description": "Allows you to control source blocks with a USB MIDI device. Connect the device and make sure it is selected in the settings panel. Same settings as Computer Keyboard."
                    }
                ]
            }

        ]
    };

    public static GetBlock(type: any): IBlock {
        return eval("new " + type + "()");
    }

}

export = BlockCreator;