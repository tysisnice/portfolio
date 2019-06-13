
import React from 'react';
import { IDrumPad } from '../logic/state';

interface IDrumPadProps extends IDrumPad {
  updateState: (char: string) =>  any;
  onUnpress: () => void;
  pressed?: boolean;
  volume: number;
}

function DrumPad (props: IDrumPadProps) {
  const { pressed, char, name, audio, volume, updateState, onUnpress } = props;
  const classname = `drum-pad${pressed ? ' pad-pressed' : ''}`

  function handleClick(name: string) {
    const audioEl = document.getElementById('DM-audio-'+char) as HTMLAudioElement;
    audioEl.volume = volume / 100;
    audioEl.play();
    updateState(char);
  }

  return (
    <div className={classname} onClick={() => handleClick(name)} onMouseUp={onUnpress}>
      <h3>{char}</h3>
      <p>{name}</p>
      <audio id={'DM-audio-'+char} src={audio}>s</audio>
    </div>
    )
}


export default DrumPad;