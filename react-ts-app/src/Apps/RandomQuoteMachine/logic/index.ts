
import { createSlice, Slice } from 'redux-starter-kit';
import { initialState, RandomQuoteState } from './state';

const slice: Slice = createSlice({
  initialState,
  slice: 'random-quote-machine',
  reducers: {
    nextQuote(state) {
      let list = state.allSelections.slice();
      list.push(state.currentSelection);
      const nextSelection = list.shift() || { image: '', quote: '', quoter: '' };
      const currentSelection = state.nextSelection;
      return { ...state, currentSelection, allSelections: list, nextSelection };
    }
  }
})

const { reducer, actions } = slice;

export { RandomQuoteState };
export const { nextQuote } = actions;

export default reducer;