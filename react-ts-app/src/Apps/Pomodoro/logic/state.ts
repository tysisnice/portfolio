
export function getReadableTime(time: number) {
  let minutes: string | number = (time/1000/60) << 0;
  let seconds: number | string = Math.round((time/1000) % 60);
  seconds === 60 && (seconds = 59);
  seconds < 10 && (seconds = '0' + seconds);
  minutes < 10 && (minutes = '0' + minutes);
  return `${minutes}:${seconds}`;
}

export class PomoTimeGroup {
  constructor(time: number = 1, endTime: number = 0) {
    this.setTime = time;
    this.endTime = 60000 * endTime;
    this.time = 60000 * time;
    this.readableTime = getReadableTime(this.time);
  }
  readableTime: string;
  setTime: number;
  endTime: number;
  time: number;
}


export class PomodoroState {
  constructor(workTime: number = 25, breakTime: number = 5) {
    this.pomodoroOnline = 0;
    this.timerRunning = false;
    this.currentTime = 0;
    this.working = true;
    this.workTime = new PomoTimeGroup(workTime);
    this.breakTime = new PomoTimeGroup(breakTime);
  }
  pomodoroOnline: number;
  timerRunning: boolean;
  currentTime: number;
  working: boolean;
  workTime: PomoTimeGroup;
  breakTime: PomoTimeGroup;
}
