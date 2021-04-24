import {
  GET_MY_WEATHER,
  GET_MY_WEATHER_SUCCESS,
  GET_MY_WEATHER_ERROR,
} from '../actions';

const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  myWeather: {},
};
const myWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_WEATHER:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MY_WEATHER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        myWeather: action.payload,
      };
    }

    case GET_MY_WEATHER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        myWeather: {},
      };
    default:
      return {...state};
  }
};

export default myWeatherReducer;
