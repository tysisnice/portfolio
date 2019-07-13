import {
  timerIsUp,
  updateWorkOrBreakTime 
} from './index'
import { store } from '../../../store';



export var theTimer: any;

export function timeUp() {
  const { dispatch } = store;
  const audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  audio.id = 'beep';
  audio.play();
  clearInterval(theTimer);
  dispatch(timerIsUp());
  alert('TIME UP!');
}

export function setTimer() {
  theTimer = setInterval(() => {
    const { dispatch, getState } = store;
    const { working, timerRunning, breakTime, workTime } = getState().pomodoro;
    if (!timerRunning) {
      return;
    }
    const timeRightNow = new Date().getTime();
    let time = 0;
    if (working){
      if (0 >= workTime.endTime - timeRightNow) {
        dispatch(updateWorkOrBreakTime({ time }));
        timeUp();
      } else {
        time = workTime.endTime - timeRightNow;
        dispatch(updateWorkOrBreakTime({ time }));
      }
    } else {
      if (0 >= breakTime.endTime - timeRightNow) {
        dispatch(updateWorkOrBreakTime({ time }));
        timeUp();
      } else {
        time = breakTime.endTime - timeRightNow;
        dispatch(updateWorkOrBreakTime({ time }))
      }
    }
  }, 50);
}

