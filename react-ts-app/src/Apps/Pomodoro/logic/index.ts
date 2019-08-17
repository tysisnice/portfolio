
import { createSlice } from 'redux-starter-kit';
import { PomodoroState, PomoTimeGroup, getReadableTime } from './state';
import { setTimer, theTimer } from './timer';
import { store } from '../../../store';


function incDecGroup(num: number, object: PomoTimeGroup) {
  const group = { ...object };
  group.setTime += num;
  group.endTime += (num * 60000);
  group.time += (num * 60000);
  group.readableTime = getReadableTime(group.time);
  return group;
}

const slice = createSlice({
  initialState: new PomodoroState(),
  slice: 'pomodoro',
  reducers: {
    pomodoroActivate(state) {
      return { ...state, pomodoroOnline: state.pomodoroOnline + 1 };
    },
    pomodoroDeactivate(state) {
      return { ...state, pomodoroOnline: state.pomodoroOnline - 1 };
    },

    incrementWorkTime(state) {
      if (state.workTime.setTime >= 60) {
        return state;
      }
      const workTime = incDecGroup(1, state.workTime);
      return { ...state, workTime };
    },
    decrementWorkTime(state) {
      if (state.workTime.setTime < 2) {
        return state;
      }
      const workTime = incDecGroup(-1, state.workTime);
      return { ...state, workTime };
    },
    incrementBreakTime(state) {
      if (state.breakTime.setTime >= 60) {
        return state;
      }
      const breakTime = incDecGroup(1, state.breakTime);
      return { ...state, breakTime };
    },
    decrementBreakTime(state) {
      if (state.breakTime.setTime < 2) {
        return state;
      }
      const breakTime = incDecGroup(-1, state.breakTime);
      return { ...state, breakTime }
    },

    toggleTimer(state) {
      const { timerRunning, working, workTime, breakTime } = state;
      if (timerRunning) {
        clearInterval(theTimer);
        return { ...state, timerRunning: false };
      }
      const currentTime = new Date().getTime();
      setTimer();
      const newEndTime = working ? 
        { workTime: { ...workTime, endTime: workTime.time + currentTime } } :
        { breakTime: { ...breakTime, endTime: breakTime.time + currentTime } };
      return { ...state, ...newEndTime, timerRunning: true, currentTime };
    },

    resetTimer({ workTime, breakTime }) {
      return new PomodoroState(25, 5);
    },

    timerIsUp(state) {
      const { working, workTime, breakTime } = state;
      const newState = new PomodoroState(workTime.setTime, breakTime.setTime);
      setTimeout(() => store.dispatch(toggleTimer()), 1);
      return { ...newState, working: !working, timerRunning: false };
    },

    updateWorkOrBreakTime(state, { payload: { time } }) {
      const { working, workTime, breakTime } = state;
      let timeGroup;
      if (working) {
        timeGroup = { ...workTime, time, readableTime: getReadableTime(time) };
        return { ...state, workTime: timeGroup };
      }
      timeGroup = { ...breakTime, time, readableTime: getReadableTime(time) };
      return { ...state, breakTime: timeGroup };
    }
  }
});

const { actions, reducer } = slice;
export const { 
  pomodoroActivate,
  pomodoroDeactivate,
  incrementWorkTime, 
  incrementBreakTime, 
  decrementWorkTime,
  decrementBreakTime,
  toggleTimer,
  resetTimer, 
  timerIsUp,
  updateWorkOrBreakTime,
} = actions;
export default reducer;

export { PomodoroState, PomoTimeGroup };