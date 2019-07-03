
export default class CalculatorState {
  constructor(currentOp: string = '0', operation: string[] = ['0']) {
    this.operationList = operation;
    this.currentOp = currentOp;
    this.solution = 'ans';
  }
  operationList: string[];
  currentOp: string;
  solution: string;

}

export const initialState = new CalculatorState();
