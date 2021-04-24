// import axios from 'axios';
import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {GET_MY_WEATHER} from '../actions';
import {getMyWeatherSuccess, getMyWeatherError} from './actions';
import {appSecrets} from '../../secret';
// import {AppSecrets} from '../../secret';
export function* watchFetchingMyWeather() {
  yield takeEvery(GET_MY_WEATHER, getMyWeatherCall);
}
const getMyWeatherAsync = async () => {
  try {
    const {weatherApiSceretKey, myWeatherAPIURL} = appSecrets;
    const res = await fetch(
      `${myWeatherAPIURL}${weatherApiSceretKey}`,
    ).then(response => response.json());
    return res;
  } catch (e) {
    return e;
  }
};
function* getMyWeatherCall() {
  try {
    const myWeather = yield call(getMyWeatherAsync);
    if (myWeather?.cod === 200) {
      yield put(getMyWeatherSuccess(myWeather));
    } else {
      yield put(getMyWeatherError('Weather Fetching Failed'));
    }
  } catch (error) {
    yield put(getMyWeatherError(error));
  }
}
export default function* rootSaga() {
  yield all([fork(watchFetchingMyWeather)]);
}
