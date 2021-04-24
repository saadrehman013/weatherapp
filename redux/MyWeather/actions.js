import {
  GET_MY_WEATHER,
  GET_MY_WEATHER_SUCCESS,
  GET_MY_WEATHER_ERROR,
} from '../actions';

export const getMyWeather = () => ({
  type: GET_MY_WEATHER,
});

export const getMyWeatherSuccess = list => ({
  type: GET_MY_WEATHER_SUCCESS,
  payload: list,
});

export const getMyWeatherError = message => ({
  type: GET_MY_WEATHER_ERROR,
  payload: message,
});

export default {
  getMyWeather,
  getMyWeatherSuccess,
  getMyWeatherError,
};
