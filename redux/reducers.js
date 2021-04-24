import {combineReducers} from 'redux';
import citiesListReducer from './CitiesList/reducers';
import myWeatherReducer from './MyWeather/reducers';

const reducers = combineReducers({
  citiesListReducer,
  myWeatherReducer,
});

export default reducers;
