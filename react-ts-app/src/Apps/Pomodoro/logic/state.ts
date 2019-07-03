
export default class PomodoroState {
  constructor(prop: any) {
    this.payload = { prop };
  }
  payload: any;
}

export const initialState = new PomodoroState('wow');
