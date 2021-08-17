import React, {Component} from 'react';
import {View} from 'react-native';
import CounterApp from './src/counterApp';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {rootSaga} from './src/saga';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {counter: state.counter + 1};

    case 'DECREASE':
      return {counter: state.counter - 1};

    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

//const action = store.dispatch({type})

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}
