
import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../store';

import { Dispatch } from 'redux';
import { updateDisplay, adjustVolume } from '../logic/actions';

import Settings from './Settings';
import DrumPad from './DrumPad';
import { IDrumPad } from '../logic/state';
import './index.css';


interface IDrumMachineProps {
  soundBoard: IDrumPad[];
  volume: number;
  display: string;
  updateDisplay: (name: string) => void;
  adjustVolume: (volume: number) => void;
}

interface IDrumMachineState {
  pressed: string;
}


class DrumMachine extends React.Component<IDrumMachineProps, IDrumMachineState> {
  
  render() {
    const { soundBoard, display, volume, adjustVolume, updateDisplay } = this.props;
    const drumPads = soundBoard.map( (e, i) => {
      return (
        <DrumPad key={i+''} {...e} volume={volume} updateDisplay={updateDisplay}  />
      )
    });
    return (
      <div className="DM-container">
        <main className="DrumMachine" id="drum-machine">
          <Settings display={display} volume={volume} adjustVolume={adjustVolume}/>
          <div className="pads">
            {drumPads}
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ drumMachine }: AppState) => {
  const { soundBoard, volume, display } = drumMachine;
  return {
    soundBoard,
    volume,
    display
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    adjustVolume: (volume: number) => dispatch(adjustVolume(volume)),
    updateDisplay: (name: string) => dispatch(updateDisplay(name))
  };
} 


export default connect(mapStateToProps, mapDispatchToProps)(DrumMachine);