import {all} from 'redux-saga/effects';
import citiesListSagas from './CitiesList/sagas';
import myWeatherSagas from './MyWeather/sagas';

export default function* rootSaga() {
  yield all([citiesListSagas(), myWeatherSagas()]);
}
