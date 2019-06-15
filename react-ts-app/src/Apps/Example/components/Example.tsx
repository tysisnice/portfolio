
import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../store';

import './ExampleComponent.css';
import { Dispatch } from 'redux';
import { actionCreator } from '../logic/actions';

interface IEProps {
  prop: string,
  action: () => void
}

class ExampleComponent extends React.Component<IEProps> {
  render() {
    const { prop } = this.props;
    return (
      <main className="ExampleComponent">
        <div>{prop}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);