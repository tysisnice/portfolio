
import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../../../store';
import { actionCreator } from '../logic/actions';

import './index.css';

interface IPomodoroProps {
  prop: string,
  action: () => void
}


class Pomodoro extends React.Component<IPomodoroProps> {
  render() {
    const { prop } = this.props;
    return (
      <main className="Pomodoro">
        <div className="odometer">{}</div>
      </main>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  
  return {
    prop: ' f '
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    action: () => dispatch(actionCreator())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pomodoro);