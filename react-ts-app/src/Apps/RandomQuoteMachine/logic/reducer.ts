
import { initialState, RandomQuoteState } from './state'
import { NEXT_QUOTE } from './actions';
import { Reducer } from 'redux';



const reducer: Reducer<RandomQuoteState> = (state = initialState, { type }) => {
  switch (type) {
    case NEXT_QUOTE: 
      let list = state.allSelections.slice();
      list.push(state.currentSelection);
      const nextSelection = list.shift() || { image: '', quote: '', quoter: '' };
      const currentSelection = state.nextSelection;
      return {...state, currentSelection, allSelections: list, nextSelection};
    default: return state;
  }
}

export default reducer;