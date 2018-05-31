import types from  './types';

const itemsHasErrored = bool => {
  return {
    type: types.GET_WEATHER_FAILURE,
    hasErrored: bool
  };
}

const itemsIsPending = bool => {
  return {
    type: types.GET_WEATHER_PENDING,
    isLoading: bool
  };
}

const itemsFetchDataSuccess = items => {
  return {
    type: types.GET_WEATHER_SUCCESS,
    items
  };
}

export default {
  itemsHasErrored,
  itemsIsPending,
  itemsFetchDataSuccess,
}
