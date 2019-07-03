
import React from 'react';
import { IDrumPad } from '../logic/state';

interface IDrumPadProps extends IDrumPad {
  updateDisplay: (charname: string) =>  void;
  volume: number;
}

interface IDrumPadState {
  pressed: boolean;
}

class DrumPad extends React.Component<IDrumPadProps, IDrumPadState> {
  constructor(props: IDrumPadProps) {
    super(props);
    this.state = { pressed: false };
    this.handlePress = this.handlePress.bind(this);
    this.handleUnpress = this.handleUnpress.bind(this);
  }

  render() {
    const { pressed } = this.state;
    const { char, name, audio } = this.props;
    const classname = `drum-pad${pressed ? ' pad-pressed' : ''}`;
    const charUpper = char.toUpperCase();
  
    return (
      <div id={name} className={classname} onTouchStart={this.handlePress} onTouchEnd={this.handleUnpress} onMouseDown={this.handlePress} onMouseUp={this.handleUnpress}>
        <h3>{charUpper}</h3>
        <p>{name}</p>
        {charUpper}
        <audio id={charUpper} src={audio}>s</audio>
      </div>
      )
  }

  componentDidMount() {
    document.addEventListener('keydown', e => {
      e.key.toLowerCase() === this.props.char && this.handlePress();
    });
    document.addEventListener('keyup', e => {
      e.key.toLowerCase() === this.props.char && this.handleUnpress();
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', e => {
      e.key.toLowerCase() === this.props.char && this.handlePress();
    });
    document.removeEventListener('keyup', e => {
      e.key.toLowerCase() === this.props.char && this.handleUnpress();
    });
  }

  handlePress() {
    const { char, volume, name } = this.props;
    const audioEl = document.getElementById(char.toUpperCase()) as HTMLAudioElement;
    if (!audioEl) {
      return;
    }
    audioEl.volume = volume / 100;
    audioEl.currentTime = 0;
    audioEl.play();
    this.props.updateDisplay(name);
    this.setState({ pressed: true });
  }

  handleUnpress() {
    this.setState({ pressed: false })
  }
}


export default DrumPad;