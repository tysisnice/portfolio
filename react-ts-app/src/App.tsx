import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';

import RandomQuoteMachineApp from './Apps/RandomQuoteMachine';
import MarkdownPreviewerApp from './Apps/MarkdownPreviewer';
import DrumMachineApp from './Apps/DrumMachine';

function Filler() {
  return (
    <div>
      <h1>Hi</h1>
      <ul>
        <li><Link to="/random-quote-machine">Random Quote Machine</Link></li>
        <li><Link to="/markdown-previewer">Markdown Previewer</Link></li>
        <li><Link to="/drum-machine">Drum Machine</Link></li>
      </ul>
    </div>
  )
}

function NotFound() {
  return (
    <div>
      <h1>Error 404</h1>
      <h3>Page not found</h3>
      <Link to="/">Go home</Link>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path='/' component={Filler}/>
          <Route path="/random-quote-machine" component={RandomQuoteMachineApp}/>
          <Route path="/markdown-previewer" component={MarkdownPreviewerApp}/>
          <Route path="/drum-machine" component={DrumMachineApp}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
