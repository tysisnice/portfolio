
import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../../../store';
import { 
  pomodoroActivate,
  pomodoroDeactivate,
  incrementWorkTime, 
  incrementBreakTime, 
  decrementWorkTime,
  decrementBreakTime,
  toggleTimer,
  resetTimer, 
  PomodoroState,
  timerIsUp
} from '../logic';

import './Pomodoro.css';
import TimeGroup from './TimeGroup';

interface IPomoProps extends PomodoroState {
  incWorkTime: () => void;
  incBreakTime: () => void;
  decWorkTime: () => void;
  decBreakTime: () => void;
  activate: () => void;
  deactivate: () => void;
  toggle: () => void;
  reset: () => void;
  timerIsUp: () => void;
}

class Pomodoro extends React.Component<IPomoProps> {
  render() {
    const { working, toggle, reset, timerRunning, workTime, breakTime, incWorkTime, decWorkTime, incBreakTime, decBreakTime, timerIsUp } = this.props;
    const workGroupProps = {
      increment: incWorkTime,
      decrement: decWorkTime,
      time: workTime.setTime,
      text: 'Work Time',
      id: 'session',
      def: 25,
    };
    const breakGroupProps = {
      increment: incBreakTime,
      decrement: decBreakTime,
      time: breakTime.setTime,
      text: 'Break Time',
      id: 'break',
      def: 5,
    }
    const pauseText = timerRunning ? 'Pause' : 'Start';
    const breakText = working ? 'Take a Break!' : 'Get Back to it!';
    const timeLeft = working ? workTime.readableTime : breakTime.readableTime;
    const timerLabel = <span id="timer-label">{working ? 'Session' : 'Break'}</span>;
    return (
      <main className="Pomodoro">
        <div>
          <h2>A productivity timer</h2>
          <TimeGroup {...workGroupProps} />
          <TimeGroup {...breakGroupProps} fontsize="33px" />
          {timerRunning && timerLabel}
          <h1 id="time-left">{timeLeft}</h1>
          <div className="P-button-container">
            <button onClick={toggle} id="start_stop" style={{width: 96}}>{pauseText}</button>
            <button onClick={reset} id="reset">Reset</button>
            <button onClick={timerIsUp} style={{width: 209}}>{breakText}</button>
          </div>
        </div>
      </main>
    );
  }

  componentDidMount() {
    this.props.activate();
  }

  componentWillUnmount() {
    this.props.deactivate();
  }
}

const mapStateToProps = ({ pomodoro }: AppState) => {
  return { ...pomodoro }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    incWorkTime: () => dispatch(incrementWorkTime()),
    incBreakTime: () => dispatch(incrementBreakTime()),
    decWorkTime: () => dispatch(decrementWorkTime()),
    decBreakTime: () => dispatch(decrementBreakTime()),
    activate: () => dispatch(pomodoroActivate()),
    deactivate: () => dispatch(pomodoroDeactivate()),
    toggle: () => dispatch(toggleTimer()),
    reset: () => dispatch(resetTimer()),
    timerIsUp: () => dispatch(timerIsUp())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pomodoro);