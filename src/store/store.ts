import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { watchCounter } from './sagas/index';
import { counterReducer } from './reducers';


// For using useSelector
export interface RootState {
    counter: number,
};

// including all reducer
const rootReducer = combineReducers({
    counter: counterReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware,logger));

sagaMiddleware.run(watchCounter);

export default store;

