import {parseJwt} from '../../utils/factory';
import {
  GET_CITIES_LIST,
  GET_CITIES_LIST_SUCCESS,
  GET_CITIES_LIST_ERROR,
} from '../actions';

const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  citiesList: [],
};
const gitiesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CITIES_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        citiesList: action.payload,
      };
    }

    case GET_CITIES_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        citiesList: [],
      };
    default:
      return {...state};
  }
};

export default gitiesListReducer;
