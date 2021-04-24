import {
  GET_CITIES_LIST,
  GET_CITIES_LIST_ERROR,
  GET_CITIES_LIST_SUCCESS,
} from '../actions';

export const getCitiesList = () => ({
  type: GET_CITIES_LIST,
});

export const getCitiesListSuccess = list => ({
  type: GET_CITIES_LIST_SUCCESS,
  payload: list,
});

export const getCitiesListError = message => ({
  type: GET_CITIES_LIST_ERROR,
  payload: message,
});

export default {
  getCitiesList,
  getCitiesListSuccess,
  getCitiesListError,
};
