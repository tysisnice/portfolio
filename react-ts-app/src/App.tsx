import React from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';

import Home from './Home';
import RandomQuoteMachineApp from './Apps/RandomQuoteMachine';
import MarkdownPreviewerApp from './Apps/MarkdownPreviewer';
import DrumMachineApp from './Apps/DrumMachine';
import CalculatorApp from './Apps/Calculator';
import PomodoroApp from './Apps/Pomodoro';
import BarChart from './Apps/D3/BarChart/BarChart';

function Filler() {
  return (
    <div>
      <h1>Hi</h1>
      <ul>
        <li><Link to="/random-quote-machine">Random Quote Machine</Link></li>
        <li><Link to="/markdown-previewer">Markdown Previewer</Link></li>
        <li><Link to="/drum-machine">Drum Machine</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/pomodoro">Pomodoro Timer</Link></li>
        <li><Link to="/bar-chart">Bar Chart</Link></li>
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
      <HashRouter>
        <Switch>
          <Route exact={true} path='/' component={Home}/>
          <Route path="/random-quote-machine" component={RandomQuoteMachineApp}/>
          <Route path="/markdown-previewer" component={MarkdownPreviewerApp}/>
          <Route path="/drum-machine" component={DrumMachineApp}/>
          <Route path="/calculator" component={CalculatorApp}/>
          <Route path="/pomodoro" component={PomodoroApp}/>
          <Route path="/bar-chart" component={BarChart}/>
          <Route component={NotFound}/>
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
