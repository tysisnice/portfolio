
import React                 from 'react';

// import { Link } from 'react-router';
import { connect }           from 'react-redux';
import * as actions          from '../../redux/actions';

import { Unit }              from '../Unit';
import { store }             from '../../../../store';

import './index.css';


var timer;
// create pure component
export class Board extends React.Component {
  
  constructor(props) {
    super(props);
    store.dispatch({type: 'CGL_SETUP'});
    store.dispatch({type: 'CGL_RANDOMIZE'});
  }

  renderUnits(row, rowIndex) {
    return row.map((tile, tileIndex) => {
      return (
        <Unit //unitId={tile.get('id')}
              row={rowIndex}
              column={tileIndex}
              key={'key '+tile.id}
              alive={tile.alive}
              old={tile.old}
              unitClick={this.props.unitClick}
              />
      );
    });
  }

  renderRows() {
    return this.props.boardMap.map((row, index) => {
      return (
        <div //style={{width: this.props.rowWidth}}
             className="CGL-row"
             key={'key'+index}
             id={'row'+index}>
          {this.renderUnits(row, index)}
        </div>
      );
    })
  }

  render() {
    const { playPause, gameRunning, resetBoard, randomize, generations } = this.props;
    return (
      <div className="CGL-board">
        <h1>Conway's Game of Life</h1>
        <div className="CGL-button-container">
          <button className='CGL-button' onClick={playPause}>
            {gameRunning ? 'Pause' : 'Play'}
          </button>
          <button className='CGL-button' onClick={resetBoard}>
            Reset
          </button>
          <button className='CGL-button' onClick={randomize}>
            Randomize
          </button>
          <div className='CGL-gen'>Generations: {generations}</div>
        </div>
        <div className='CGL-rows'>
          <div>
            {this.renderRows()}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    timer = setInterval(() => {
      store.dispatch({type: 'CGL_RUN_GAME'});
    }, 0.1);
  }

  componentWillUnmount() {
    clearInterval(timer);
  }

};



// create connected container component
const mapStateToProps = function({conways}) {

  return {
    boardMap: conways.get('boardMap'),
    //rowWidth: (conways.get('width') * 21 + 2),
    gameRunning: conways.get('gameRunning'),
    generations: conways.get('generations')
  };
};

export const ConwaysBoard = connect(mapStateToProps, actions)(Board);


