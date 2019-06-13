
import { ActionCreator, AnyAction } from 'redux';
import { store } from '../../../store';

export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';
export const INIT_MARKDOWN = "INIT_MARKDOWN";

export const updateMarkdown: ActionCreator<AnyAction> = (input) => {
  const result = convertMarkdown(input);
  localStorage.setItem('markdown data', result);
  return {
    type: UPDATE_MARKDOWN,
    payload: { result, input }
  }
};

export const initMarkdown: ActionCreator<AnyAction> = (result) => {
  return {
    type: INIT_MARKDOWN,
    payload: { result }
  }
}



export let marked: any;

export function convertMarkdown(input: string): string {
  let converted = '';
  if (marked) {
    converted = marked(input);
  }
  else {
    import('marked')
      .then(data => {
        data.setOptions({ breaks: true });
        marked = data.default;
        store.dispatch(initMarkdown(marked(input)));
      });
      converted = input;
  }
  return converted;
};
