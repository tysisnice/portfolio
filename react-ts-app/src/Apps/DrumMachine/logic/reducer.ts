
import DrumMachineState, { initialState } from './state'
import { UPDATE_DISPLAY, ADJUST_VOLUME } from './actions';
import { Reducer } from 'redux';


const reducer: Reducer<DrumMachineState> = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_DISPLAY: 
      return { ...state, ...payload };

    case ADJUST_VOLUME:
      return { ...state, ...payload };

    default: return state;
  }
}

export default reducer;