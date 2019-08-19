

const initialState = {
		width: 50,
		height: 34,
		gameRunning: true,
		generations: 0,
		firstPlay: true
	};



// the actual reducer
const reducer = function(state = initialState, action) {

	switch(action.type) {

		case 'CGL_FIRST':
			const f = state.get('firstPlay');
			if (f) {
				return state
					.set('boardMap', setBoard(state.get('width'), state.get('height')))
					.set('generations', 0)
					.set('firstPlay', false)
					.set('boardMap', randomize(state.get('boardMap')));
			} return state;

		case 'CGL_SETUP':
			const width = state.get('width');
			const height = state.get('height');
			return state.set('boardMap', setBoard(width, height)).set('generations', 0);

		case 'CGL_UNIT_CLICK':
			return state.setIn(["boardMap", action.row, action.column, "alive"], !action.alive)
									.setIn(["boardMap", action.row, action.column, "old"], false);

		case 'CGL_PLAY_PAUSE':
			return state.update("gameRunning", running => !running);

		case 'CGL_RANDOMIZE':
			return state.set('boardMap', randomize(state.get('boardMap')));

		case 'CGL_RUN_GAME':
			if (state.get('gameRunning')) {
				return state.set('boardMap',
					playRound(state.get('boardMap'))).update('generations', gen => gen+1);
			}
			else { return state };

		default:
			return state;
	}

}



// functions
function setBoard(width, height) {
	var board = [];
	for (var i = 0; i < height; i++ ) {
		var row = [];
		for (var o = 0; o < width; o++ ) {
			row.push( {old: false, alive: false, id: 'id'+i+'.'+o} );
		}
		board.push(row);
	}
	return board;
}


function randomize(board) {
	for ( var i = 0; i < board.length; i++ ) {
		for ( var o = 0; o < board[i].length; o++ ) {
			const randomNum = Math.floor(Math.random() * 5);
			if (randomNum < 2) {
				board[i][o].alive = true;
			} else {
				board[i][o].alive = false;
			}
		}
	}
	return board;
}


function playRound(board) {
	var newBoard = [];
	for ( var i = 0, length = board.length; i < length; i++ ) {
		let row = [];
		for ( var o = 0, width = board[i].length; o < width; o++ ) {
			let num = 0;
			let iMinusOne = i - 1;
			let iPlus_One = i + 1;
			let oMinusOne = o - 1;
			let oPlus_One = o + 1;

			if ( i === 0 )      		iMinusOne = length - 1;
			if ( i === length - 1 ) iPlus_One = 0					;
			if ( o === 0 )					oMinusOne = width  - 1;
			if ( o === width - 1 ) 	oPlus_One = 0					;

			if ( board[iMinusOne][oMinusOne].alive )  num++ ;
			if ( board[iMinusOne][	 	o 	 ].alive )  num++ ;
			if ( board[iMinusOne][oPlus_One].alive )  num++ ;
			if ( board[ 	 i		][oMinusOne].alive )  num++ ;
			if ( board[ 	 i 	  ][oPlus_One].alive )  num++ ;
			if ( board[iPlus_One][oMinusOne].alive )  num++ ;
			if ( board[iPlus_One][ 		o 	 ].alive )  num++ ;
			if ( board[iPlus_One][oPlus_One].alive )  num++ ;

			if (  board[i][o].alive )  {
				if (num === 2 || num === 3) {
					row.push({alive: true, old: true, id: 'id'+i+'.'+o})
				} else {
					row.push({alive: false, old: false, id: 'id'+i+'.'+o})
				}
			}
			else {
				if ( num === 3 ) {
					row.push({alive: true, old: false, id: 'id'+i+'.'+o})
				} else {
					row.push({alive: false, old: false, id: 'id'+i+'.'+o})
				}
			}

		}
		newBoard.push(row);
	}
	return newBoard;
}




export default reducer;