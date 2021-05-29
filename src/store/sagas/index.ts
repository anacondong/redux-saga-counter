import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";

import {
    startCounter,
} from './counter';

// All of watcher
export function* watchCounter() {
    yield takeEvery(actionTypes.COUNTER_START, startCounter);
};

// ....