import React, { createRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store/store';
import * as actions from './store/actions';

// react Hook function component
const App = () => {

  // call using state
  const counterStates: any = useSelector((state: RootState) => state.counter);
  const { counter } = counterStates; // This is state from reducer
  const dispatch = useDispatch(); // call action to redux
  const counterInput: any = createRef<HTMLInputElement>(); // ref to Input HTML

  const setCounterOnClick = () => {
    const counterValue = counterInput.current.value;
    dispatch(actions.setCounter(counterValue)); // dispatch from Input to redux action
  };

  const countDownOnClick = () => {
    dispatch(actions.counterStart()); // dispatch from Button to redux action >> actionTypes has been Watched by Saga
  };

  return (
    <>
      <h2>simple counter</h2>

      <h1 style={{
        textAlign: 'center'
      }}>
        {counter}
      </h1>

      <input ref={counterInput} placeholder='set counter value' type='number' />
      <button style={{
        margin: '10px'
      }}
        onClick={setCounterOnClick}
      >
        Set
      </button>
      <br />
      
      <button onClick={countDownOnClick}>count Down</button>
    </>
  );
}

export default App;
