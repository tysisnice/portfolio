
import { 
  createStore, 
  Store, 
  combineReducers
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { randomQuoteMachine, RandomQuoteState } from './Apps/RandomQuoteMachine';
import { markdownPreviewer, MarkdownState } from './Apps/MarkdownPreviewer';
import { drumMachine, DrumMachineState } from './Apps/DrumMachine';

export interface AppState {
  randomQuoteMachine: RandomQuoteState,
  markdownPreviewer: MarkdownState,
  drumMachine: DrumMachineState
}

export const store: Store = createStore(
  combineReducers({
    randomQuoteMachine,
    markdownPreviewer,
    drumMachine
  }),
  composeWithDevTools()
);

