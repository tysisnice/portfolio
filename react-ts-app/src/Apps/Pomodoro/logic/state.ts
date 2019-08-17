
export function getReadableTime(time: number): string {
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
  readableTime: string = '00:00';
  setTime: number = 0;
  endTime: number = 0;
  time: number = 0;
}


export class PomodoroState {
  constructor(workTime: number = 25, breakTime: number = 5) {
    this.workTime = new PomoTimeGroup(workTime);
    this.breakTime = new PomoTimeGroup(breakTime);
  }
  pomodoroOnline: number = 0;
  timerRunning: boolean = false;
  currentTime: number = 0;
  working: boolean = true;
  workTime: PomoTimeGroup;
  breakTime: PomoTimeGroup;
}
