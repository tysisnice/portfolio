
import {
  Store,
  ActionCreator,
  AnyAction,
  Dispatch
} from 'redux';
import { ThunkAction } from 'redux-thunk';
import { configureStore } from 'redux-starter-kit';

import { randomQuoteMachine, RandomQuoteState } from './Apps/RandomQuoteMachine';
import { markdownPreviewer, MarkdownState } from './Apps/MarkdownPreviewer';
import { drumMachine, DrumMachineState } from './Apps/DrumMachine';
import { calculator, CalculatorState } from './Apps/Calculator';
import { pomodoro, PomodoroState } from './Apps/Pomodoro';

export type ThunkResult = AnyAction | ThunkAction<void | Promise<void>, AppState, undefined, AnyAction>;
export type ThunkActionCreator = ActionCreator<ThunkResult>
export type AnyDispatch = Dispatch | any;

export interface AppState {
  randomQuoteMachine: RandomQuoteState,
  markdownPreviewer: MarkdownState,
  drumMachine: DrumMachineState,
  calculator: CalculatorState,
  pomodoro: PomodoroState
}

export const store: Store = configureStore({
  reducer: {
    randomQuoteMachine,
    markdownPreviewer,
    drumMachine,
    calculator,
    pomodoro
  }
})

