import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducer from '../redux/reducer';

const logger = store => next => action => {
  if (typeof action === 'function') {
    console.log('dispatching a function');
  } else {
    console.log('dispatching', action);
  }
  const result = next(action);
  console.log('nextState', store.getState());
  return result;
};

const middleware = [logger, thunk];

export default createStore(reducer, applyMiddleware(...middleware));
