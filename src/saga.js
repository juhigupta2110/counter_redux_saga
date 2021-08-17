import {takeEvery, put, all, takeLatest} from 'redux-saga/effects';

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* helloSaga() {
  console.log('Hello Sagas!');
}

// WORKER SAGA
export function* incrementAsync() {
  yield delay(1000);
  yield put({type: 'INCREASE'});
}

//WATCHER SAGA
export function* watchIncrementAsync() {
  yield takeEvery('INCREASE_ASYNC', incrementAsync);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once

export function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}

// if the async button is pressed quickly several times like 5 times, then the counter should increase directly to +5 after the delay.
