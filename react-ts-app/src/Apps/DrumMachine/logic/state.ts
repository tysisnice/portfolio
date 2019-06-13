

export interface IDrumPad {
  char: string;
  audio: string;
  name: string;
}

export default class DrumMachineState {
  constructor(soundBoard: IDrumPad[] = []) {
    this.display = '';
    this.volume = 50;
    this.soundBoard = soundBoard
  }
  
  display: string;
  volume: number;
  soundBoard: IDrumPad[];
}

const initialSoundBoard: IDrumPad[] = [
  { char: 'q', audio: '', name: 'burp' },
  { char: 'w', audio: '', name: 'big burp' },
  { char: 'e', audio: '', name: 'yum' },
  { char: 'a', audio: '', name: 'huh' },
  { char: 's', audio: '', name: 'oh yeah' },
  { char: 'd', audio: '', name: 'fart' },
  { char: 'z', audio: '', name: 'big fart' },
  { char: 'x', audio: '', name: 'oh yeah' },
  { char: 'c', audio: '', name: 'ya done' },
]

export const initialState = new DrumMachineState(initialSoundBoard);
