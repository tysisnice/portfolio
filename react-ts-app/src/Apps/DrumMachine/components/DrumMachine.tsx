
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
  constructor(props: IDrumMachineProps) {
    super(props);
    this.state = {
      pressed: ''
    }
    this.handlePress = this.handlePress.bind(this);
    this.handleUnpress = this.handleUnpress.bind(this);
  }

  render() {
    const { soundBoard, display, volume, adjustVolume } = this.props;
    const drumPads = soundBoard.map( (e, i) => {
      const pressed = this.state.pressed === e.char;
      return (
        <DrumPad volume={volume} key={i+''} {...e} pressed={pressed} onUnpress={this.handleUnpress} updateState={this.handlePress} />
      )
    });
    return (
      <main className="DrumMachine" id="drum-machine">
        <Settings display={display} volume={volume} adjustVolume={adjustVolume}/>
        <div className="DM-keys">
          {drumPads}
        </div>
      </main>
    );
  }

  componentDidMount() {
    document.addEventListener('keydown', (e) => this.handlePress(e.key));
    document.addEventListener('keyup', this.handleUnpress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', (e) => this.handlePress(e.key));
    document.removeEventListener('keyup', this.handleUnpress);
  }

  handlePress(char: string) {
    const padData = this.props.soundBoard.filter(e => e.char === char)[0];
    const name = padData ? padData.name : '';
    this.props.updateDisplay(name);

    this.setState({
      pressed: char
    })
  }

  handleUnpress() {
    this.setState({
      pressed: ''
    })
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
    updateDisplay: (name: string) => dispatch(updateDisplay(name)),
    adjustVolume: (volume: number) => dispatch(adjustVolume(volume)),
  };
} 


export default connect(mapStateToProps, mapDispatchToProps)(DrumMachine);