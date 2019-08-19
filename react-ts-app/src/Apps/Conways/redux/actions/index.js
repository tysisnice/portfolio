
export function defaultAction(x, y) {

	const n = y + 'poop';

	return {
		type: 'CGL_DEFAULT',
		new: x,
		more: n
	}
}


export function resetBoard() {
	return {
		type: 'CGL_SETUP'
	}
}


export function unitClick(alive, row, column) {
	return {
		type: 'CGL_UNIT_CLICK',
		alive: alive,
		row: Number(row),
		column: Number(column)
	}
}


export function playPause() {
	return {
		type: 'CGL_PLAY_PAUSE'
	}
}

export function randomize() {
	return {
		type: 'CGL_RANDOMIZE'
	}
}

