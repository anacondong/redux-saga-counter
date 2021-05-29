import * as actionTypes from './actionTypes';

export const counterStart = (): { type: string } => { // no counting here >> it will counting on Watcher
    return {
        type: actionTypes.COUNTER_START,
    };
};

export const counting = (): { type: string } => {
    return {
        type: actionTypes.COUNTING,
    };
};

export const setCounter = (counter: number): { type: string, counter: number } => {
    return {
        type: actionTypes.SET_COUNTER,
        counter,
    };
};