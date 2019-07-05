
import { Slice, createSlice } from "redux-starter-kit";
import { initialState, MarkdownState, convertMarkdown } from './state';

const slice: Slice = createSlice({
  slice: 'markdown-previewer',
  initialState,
  reducers: {
    updateMarkdown(state, { payload: { input } }) {
      const result = convertMarkdown(input);
      return { ...state, result, input };
    },
    initMarkdown(state, { payload: { result } }) {
      return { ...state, result };
    }
  }
});


const { actions, reducer } = slice;
export const { updateMarkdown, initMarkdown } = actions;
export { MarkdownState };
export default reducer;
