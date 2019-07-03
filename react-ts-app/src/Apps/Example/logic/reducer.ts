
import ExampleState, { initialState } from './state'
import { ACTION_NAME } from './actions';
import { Reducer } from 'redux';


const reducer: Reducer = (state: ExampleState = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_NAME: 
      return {...state, ...payload };

    default: return state;
  }
}

export default reducer;