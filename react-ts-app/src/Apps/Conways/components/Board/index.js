
import React                 from 'react';

// import { Link } from 'react-router';
import { connect }           from 'react-redux';
import * as actions          from '../../redux/actions';
import PureRenderMixin       from 'react-addons-pure-render-mixin';

import { Unit }              from '../Unit';
import store                 from '../../../../store';

import './index.css';


var timer;
// create pure component
export const Board = React.createClass({

  mixins: [PureRenderMixin],
  
  constructor(props) {
    super(props);
    store.dispatch({type: 'CGL_SETUP'});
    store.dispatch({type: 'CGL_RANDOMIZE'});
  },

  renderUnits: function(row, rowIndex) {
    return row.map((tile, tileIndex) => {
      return (
        <Unit //unitId={tile.get('id')}
              row={rowIndex}
              column={tileIndex}
              key={'key '+tile.get('id')}
              alive={tile.get('alive')}
              old={tile.get('old')}
              unitClick={this.props.unitClick}
              />
      );
    });
  },

  renderRows: function() {
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
  },

  render: function() {
    const { playPause, gameRunning, resetBoard, randomize, generations } = this.props;
    return (
      <div className="CGL-board">
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
  },

  componentDidMount: function() {
    timer = setInterval(() => {
      store.dispatch({type: 'CGL_RUN_GAME'});
    }, 0.1);
  },

  componentWillUnmount: function() {
    clearInterval(timer);
  }

});



// create connected container component
const mapStateToProps = function({conways}) {

  return {
    boardMap: conways.get('boardMap'),
    //rowWidth: (conways.get('width') * 21 + 2),
    gameRunning: conways.get('gameRunning'),
    generations: conways.get('generations')
  };
};

export const BoardContainer = connect(mapStateToProps, actions)(Board);


