// import axios from 'axios';
import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {GET_CITIES_LIST} from '../actions';
import {getCitiesListSuccess, getCitiesListError} from './actions';
import {appSecrets} from '../../secret';
export function* watchLoginUser() {
  yield takeEvery(GET_CITIES_LIST, getCitiesListCall);
}
const getCitiesListAsync = async () => {
  try {
    const {weatherApiSceretKey, weatherApiURL} = appSecrets;
    const res = await fetch(
      `${weatherApiURL}${weatherApiSceretKey}`,
    ).then(response => response.json());
    return res;
  } catch (e) {
    return e;
  }
};
function* getCitiesListCall() {
  try {
    const citiesList = yield call(getCitiesListAsync);
    if (citiesList?.cod === '200') {
      yield put(getCitiesListSuccess(citiesList.list));
    } else {
      yield put(getCitiesListError('Cities List Fetching Failed'));
    }
  } catch (error) {
    yield put(getCitiesListError(error));
  }
}
export default function* rootSaga() {
  yield all([fork(watchLoginUser)]);
}
