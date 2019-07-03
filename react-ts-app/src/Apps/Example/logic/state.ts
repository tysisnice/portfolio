
export default class ExampleState {
  constructor(prop: any) {
    this.payload = { prop };
  }
  payload: any;
}

export const initialState = new ExampleState('wow');
