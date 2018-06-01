import types from  './types';

export const itemsHasErrored = bool => {
  return {
    type: types.GET_WEATHER_FAILURE,
    hasErrored: bool
  };
}

export const itemsIsPending = bool => {
  return {
    type: types.GET_WEATHER_PENDING,
    isLoading: bool
  };
}

export const itemsFetchDataSuccess = items => {
  return {
    type: types.GET_WEATHER_SUCCESS,
    items
  };
}
