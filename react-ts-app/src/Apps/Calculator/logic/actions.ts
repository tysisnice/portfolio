
import { ActionCreator, AnyAction } from 'redux';
import { ThunkActionCreator } from '../../../store';

export const CALCULATE_OPERATION = 'CALCULATE_OPERATION';
export const C_EQUALS = 'C_EQUALS';
export const C_CLEAR_ALL = 'C_CLEAR_ALL';
export const C_DELETER = 'C_DELETER';
export const C_NEW_WINDOW = 'C_NEW_WINDOW';

export const calcOp: ThunkActionCreator = (operation: string) => (dispatch, getState) => {  
  const { operationList } = getState().calculator;
  const list = operationList.slice(0);
  const isNumber = operation.match(/[0-9]/gi);
  if (list[0] === '0' && isNumber) {
    list.pop();
  }
  if (operation === '.') {
    let l = list.join('').split(' ');
    let f = l[l.length-1]
    if (f.split("").includes('.') && /^\d+\.\d+$/.test(f)) {
      return;
    }
  }
  if (!isNumber && !/\d/.test(list[list.length - 1])) {
    return;
  }

  list.push(operation);
  const currentOp = list.join('');
  const solution = isNumber 
    ? eval('(Number(1 + (' + currentOp + ') - 1)) + ""') 
    : getState().calculator.solution;
  dispatch({
    type: CALCULATE_OPERATION,
    payload: { operationList: list, solution, currentOp }
  })
};

export const equals: ActionCreator<AnyAction> = () => {
  return {
    type: C_EQUALS
  }
};

export const clearAll: ActionCreator<AnyAction> = () => {
  return {
    type: C_CLEAR_ALL
  }
};

export const deleter: ThunkActionCreator = () => (dispatch, getState) => {
  const list = getState().calculator.operationList.slice(0);
  list.pop();
  const currentOp = list.join('');
  const solution = eval(currentOp);
  dispatch({
    type: C_DELETER,
    payload: {
      operationList: list,
      currentOp,
      solution
    }
  });
};


