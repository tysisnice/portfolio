
import { MarkdownState, initialState } from './state'
import { UPDATE_MARKDOWN, INIT_MARKDOWN } from './actions';
import { Reducer } from 'redux';


const reducer: Reducer = (state: MarkdownState = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_MARKDOWN: 
      const { result, input } = payload;
      return { ...state, result, input };
    
    case INIT_MARKDOWN:
      return { ...state, result: payload.result };
    
    default: return state;
  }
}

export default reducer;