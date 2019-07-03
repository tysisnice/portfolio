
import { createSlice } from 'redux-starter-kit';

export class ExampleState {

}
const initialState = new ExampleState();

const slice = createSlice({
  initialState,
  slice: 'example',
  reducers: {

  }
});

const { actions, reducer } = slice;
export const {  } = actions;
export default reducer;