
import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../../../store';
import {  } from '../logic';

import './Example.css';

interface IProps {
  
}

class ExampleComponent extends React.Component<IProps> {
  render() {
    
    return (
      <main className="ExampleComponent">
        {}
      </main>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {}
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    action: () => dispatch({type: ''})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);