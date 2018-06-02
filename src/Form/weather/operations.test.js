import { itemsFetchData } from './operations';
import types from './types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  test('creates GET_WEATHER_SUCCESS when fetching weather has been done', async () => {
    fetchMock
      .getOnce('/weather', {
        body: {weather: { data: 'some weather'}},
        headers: {'content-type': 'application/json'},
        status: 200
      });

    const expectedActions = [
      {type: types.GET_WEATHER_PENDING, isLoading: true},
      {type: types.GET_WEATHER_PENDING, isLoading: false},
      {type: types.GET_WEATHER_SUCCESS, items: {weather: { data: 'some weather'}}}
    ]

    const store = mockStore({items: {}, itemsHasErrored: false, itemsIsPending: false});

    await store.dispatch(itemsFetchData('/weather'));

    expect(store.getActions()).toEqual(expectedActions)
  });

  test('creates GET_WEATHER_FAILURE when fetching weather fails', async () => {
    fetchMock
      .getOnce('/weather', {
        body: {},
        headers: {'content-type': 'application/json'},
        status: 404
      });

    const expectedActions = [
      {type: types.GET_WEATHER_PENDING, isLoading: true},
      {type: types.GET_WEATHER_FAILURE, hasErrored: true},
    ]

    const store = mockStore({items: {}, itemsHasErrored: false, itemsIsPending: false});

    await store.dispatch(itemsFetchData('/weather'));

    expect(store.getActions()).toEqual(expectedActions)
  });
});
