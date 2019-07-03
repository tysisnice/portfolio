
import { 
  createStore, 
  Store, 
  combineReducers,
  ActionCreator,
  AnyAction,
  Dispatch,
  applyMiddleware
} from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { randomQuoteMachine, RandomQuoteState } from './Apps/RandomQuoteMachine';
import { markdownPreviewer, MarkdownState } from './Apps/MarkdownPreviewer';
import { drumMachine, DrumMachineState } from './Apps/DrumMachine';
import { calculator, CalculatorState } from './Apps/Calculator';

export type ThunkResult = AnyAction | ThunkAction<void | Promise<void>, AppState, undefined, AnyAction>;
export type ThunkActionCreator = ActionCreator<ThunkResult>
export type AnyDispatch = Dispatch | any;

export interface AppState {
  randomQuoteMachine: RandomQuoteState,
  markdownPreviewer: MarkdownState,
  drumMachine: DrumMachineState,
  calculator: CalculatorState
}

export const store: Store = createStore(
  combineReducers({
    randomQuoteMachine,
    markdownPreviewer,
    drumMachine,
    calculator
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

