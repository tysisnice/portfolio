
import React, { Component } from 'react';
import './index.css';
import store from '../../redux/store';



function startGame() {
		store.dispatch({type: 'CGL_FIRST'});
	}


export default class PlayButton extends Component {

  render() {
    return (
    	<div onClick={startGame}>
	      <a href='#/conways-play'  style={{ textDecoration: 'none' }}>
		      <div className="CGL-playButton">
		        Play the Game of Life!
		      </div>
		    </a>
		  </div>
    );
  }
}
