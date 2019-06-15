
import React, { ChangeEvent } from 'react';


interface ISettingsProps {
  display: string;
  volume: number;
  adjustVolume: (vol: number) => void;
}


function Settings({ display, volume, adjustVolume }: ISettingsProps) {
  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    adjustVolume(Number(target.value));
  }
  return (
    <div className="DM-Settings">
      <h1 id="display">{display}</h1>
      <input type="range" onChange={handleChange} value={volume}/>
    </div>
  );
}


export default Settings