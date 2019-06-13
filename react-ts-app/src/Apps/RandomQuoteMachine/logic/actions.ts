import { ActionCreator, AnyAction } from 'redux';

export const NEXT_QUOTE = 'NEXT QUOTE';

export const nextQuote: ActionCreator<AnyAction> = () => {
  return {
    type: NEXT_QUOTE
  }
};
