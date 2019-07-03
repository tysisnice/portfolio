
import React from 'react';
import { connect } from 'react-redux';

import { AppState, AnyDispatch } from '../../../store';

import './Calculator.css';
import { calcOp, equals, deleter, clearAll, CalculatorState } from '../logic';

interface ICalculatorProps extends CalculatorState {
  calcOp: (op: string) => any;
  deleter: () => any;
  equals: () => any;
  clearAll: () => any;
}

class Calculator extends React.Component<ICalculatorProps> {

  render() {
    const { newWindow, props } = this;
    const { calcOp, equals, clearAll, deleter, currentOp, solution } = props;

    return (
      <main className="Calculator">

        <div className='C-textWindow' id="display">{currentOp}</div>
        <div className='C-answerWindow'>{solution}</div>

        <div className="C-grid">
          <div className='C-button' onClick={() => calcOp('7')} id="seven">7</div>
          <div className='C-button' onClick={() => calcOp('8')} id="eight">8</div>
          <div className='C-button' onClick={() => calcOp('9')} id="nine">9</div>
          <div className='C-button-2' onClick={() => calcOp(" / ")} id="divide">&divide;</div>
          <div className='C-button' onClick={() => calcOp('4')} id="four">4</div>
          <div className='C-button' onClick={() => calcOp('6')} id="six">6</div>
          <div className='C-button' onClick={() => calcOp('5')} id="five">5</div>
          <div className='C-button-2' onClick={() => calcOp(" * ")} id="multiply">x</div>
          <div className='C-button' onClick={() => calcOp('1')} id="one">1</div>
          <div className='C-button' onClick={() => calcOp('2')} id="two">2</div>
          <div className='C-button' onClick={() => calcOp('3')} id="three">3</div>
          <div className='C-button-2' onClick={() => calcOp(" - ")} id="subtract">-</div>
          <div className='C-button' onClick={() => calcOp('.')} id="decimal">.</div>
          <div className='C-button' onClick={() => calcOp('0')} id="zero">0</div>
          <div className='C-button' onClick={equals} id="equals">=</div>
          <div className='C-button-2' onClick={() => calcOp(" + ")} id="add">+</div>

          <div className='C-button-2 C-newWindow' onClick={newWindow}>Open New</div>
          <div className='C-button-2' onClick={clearAll} id="clear">C</div>
          <div className='C-button-2' onClick={deleter}>DEL</div>
        </div>
      </main>
    );
  }

  newWindow() {
    window.open(window.location.href, '_blank', 'height=608,width=550');
  }
}

const mapStateToProps = ({ calculator }: AppState) => {
  return { ...calculator };
}

const mapDispatchToProps = (dispatch: AnyDispatch) => {
  return {
    calcOp: (operation: string) => dispatch(calcOp({ operation })),
    equals: () => dispatch(equals()),
    deleter: () => dispatch(deleter()),
    clearAll: () => dispatch(clearAll())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);