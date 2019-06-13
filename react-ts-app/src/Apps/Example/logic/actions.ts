
import { ActionCreator, AnyAction } from 'redux';

export const ACTION_NAME = 'ACTION_NAME';

export const actionCreator: ActionCreator<AnyAction> = (payload) => {
  return {
    type: ACTION_NAME,
    payload
  }
};
