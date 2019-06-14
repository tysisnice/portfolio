
import { ActionCreator, AnyAction } from 'redux';

export const UPDATE_DISPLAY = 'UPDATE_DISPLAY';
export const ADJUST_VOLUME = 'ADJUST_VOLUME';

export const updateDisplay: ActionCreator<AnyAction> = (display) => {
  return {
    type: UPDATE_DISPLAY,
    payload: { display }
  }
};

export const adjustVolume: ActionCreator<AnyAction> = (volume: number) => {
  const display = `Volume: ${volume}`
  return {
    type: ADJUST_VOLUME,
    payload: { volume, display }
  }
};
