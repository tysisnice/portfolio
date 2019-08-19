

export interface IDrumPad {
  char: string;
  audio: string;
  name: string;
}

export default class DrumMachineState {
  constructor(soundBoard: IDrumPad[] = []) {
    this.display = "Tyson's sounds";
    this.volume = 50;
    this.soundBoard = soundBoard
  }
  
  display: string;
  volume: number;
  soundBoard: IDrumPad[];
}

const initialSoundBoard: IDrumPad[] = [
  { char: 'q', audio: 'audio/s-burp.mp3', name: 'burp' },
  { char: 'w', audio: 'audio/s-beer-burp.mp3', name: 'big burp' },
  { char: 'e', audio: 'audio/s-little-burp.mp3', name: 'little burp' },
  { char: 'a', audio: 'audio/s-dinosaur-burp.mp3', name: 'dinosaur burp' },
  { char: 's', audio: 'audio/s-long-burp.mp3', name: 'long burp' },
  { char: 'd', audio: 'audio/s-deep-burp.mp3', name: 'deep burp' },
  { char: 'z', audio: 'audio/s-ah-yeah.mp3', name: 'ah yeah'},
  { char: 'x', audio: 'audio/s-fart.mp3', name: 'fart' },
  { char: 'c', audio: 'audio/s-cough.mp3', name: 'cough' },
]

export const initialState = new DrumMachineState(initialSoundBoard);
