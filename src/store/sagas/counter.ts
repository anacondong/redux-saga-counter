import { put, take, select, call } from "redux-saga/effects";
import { eventChannel, END } from 'redux-saga';
import * as actions from '../actions';


function countdown(secs: number) {
    return eventChannel(emitter => {
        const iv = setInterval(() => {
            secs -= 1;
            if (secs > 0) {
                emitter(secs);
            } else {
                // this causes the channel to close
                emitter(END);
            }
        }, 1000);
        // The subscriber must return an unsubscribe function
        return () => {
            clearInterval(iv);
        };
    }
    );
}

// worker
export function* startCounter() {

    const state = yield select(); // select state
    const counter = state.counter.counter;
    const chan = yield call(countdown, counter + 1); // call function on top
    try {
        while (true) {
            let seconds = yield take(chan);// get value
            console.log(seconds);
            yield put(actions.counting()); // ** dispatch to update state on redux action
        }
    } finally {
        console.log('countdown terminated');
    }
}