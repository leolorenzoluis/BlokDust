import {AudioFileManager} from './AudioFileManager';
import {AudioNodeConnectionManager} from './AudioNodeConnectionManager';
import {ConnectionManager} from './Connections/ConnectionManager';
import {ConnectionMethodType} from './Connections/ConnectionMethodType';
import {MIDIManager} from './MIDIManager';
import {Waveform} from './Waveform';

export interface IAudio {

    AudioFileManager: AudioFileManager;
    AudioNodeConnectionManager: AudioNodeConnectionManager;
    ConnectionManager: ConnectionManager;
    ConnectionMethodType: ConnectionMethodType;
    ctx: AudioContext;
    HasBufferSourceDetuneCapability: boolean;
    HasClipped: boolean;
    Master: Tone.Master;
    MasterVolume: number;
    Meter: Tone.Meter;
    MeterVolume: number
    MeterVolumeDb: number
    MIDIManager: MIDIManager;
    NoteIndex: string[];
    sampleRate: number;
    Tone: Tone;
    Waveform: Waveform;
    WaveformTypeIndex: string[];
    WaveformTypeIndexNoise: string[];

    Init(): void;

    Monitor(): void;
    MonitorReset(): void;
    ReverseBuffer(blockId: number, buffer: any): void;
    DigestBuffer(blockId: number, buffer: any): void;

    Level: number;
    Peak: number;
    Clip: boolean;
}