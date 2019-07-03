
import CalculatorState, { initialState } from './state'
import { CALCULATE_OPERATION, C_EQUALS, C_CLEAR_ALL, C_DELETER } from './actions';
import { Reducer } from 'redux';


const reducer: Reducer = (state: CalculatorState = initialState, { type, payload }) => {
  switch (type) {
    case CALCULATE_OPERATION: 
      return payload;

    case C_EQUALS: 
      const { solution } = state;
      const sol = (solution === 'ans' ? '' : solution)
      return {
        solution,
        currentOp: sol, 
        operationList: sol.split('')
      };
    
    case C_CLEAR_ALL:
      return { ...initialState };

    case C_DELETER: 
      return payload;

    default: return state;
  }
}

export default reducer;