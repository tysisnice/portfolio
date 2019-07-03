
import { createSlice } from "redux-starter-kit";

export class CalculatorState {
  constructor(currentOp: string = '0', operation: string[] = ['0']) {
    this.operationList = operation;
    this.currentOp = currentOp;
    this.solution = 'ans';
  }
  operationList: string[];
  currentOp: string;
  solution: string;

}

const initialState = new CalculatorState();

const slice = createSlice({
  initialState,
  slice: 'calculator',
  reducers: { 
    calcOp(state, { payload: {operation} }) {
      const { operationList } = state;
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
        : state.solution;
      return { solution, currentOp, operationList: list };
    },

    equals(state) {
      const { solution } = state;
      const sol = (solution === 'ans' ? '' : solution)
      return { solution, currentOp: sol, operationList: sol.split('') };
    },

    clearAll(state) {
      return { ...initialState };
    },

    deleter(state) {
      const list = state.operationList.slice(0);
      list.pop();
      const currentOp = list.join('');
      const solution = eval(currentOp);
      return { operationList: list, currentOp, solution };
    }
  }
});


const { actions, reducer } = slice;

export const { deleter, equals, clearAll, calcOp } = actions;
export default reducer;

