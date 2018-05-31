import types from './types';

export function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case types.GET_WEATHER_FAILURE:
      return action.hasErrored;

    default:
      return state;
  }
}

export function itemsIsPending(state = false, action) {
  switch (action.type) {
    case types.GET_WEATHER_PENDING:
      return action.isLoading;

    default:
      return state;
  }
}

export function items(state = [], action) {
  switch (action.type) {
    case types.GET_WEATHER_SUCCESS:
      return action.items;

    default:
      return state;
  }
}