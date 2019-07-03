
import { createSlice } from "redux-starter-kit";
import { initialState } from "./state";

const slice = createSlice({
  initialState,
  slice: 'drum-machine',
  reducers: {
    updateDisplay(state, { payload: { display } }) {
      return { ...state, display };
    },
    
    adjustVolume(state, { payload: { volume } }) {
      const display = `Volume: ${volume}`
      return { ...state, volume, display };
    }
  }
});

const { actions, reducer } = slice;
export const { updateDisplay, adjustVolume } = actions;
export default reducer;