import { itemsHasErrored, itemsIsPending, items } from "./reducers";

describe('reducers', () => {

  describe('itemsHasErrored', () => {
    test('should return the correct state', () => {
      expect(itemsHasErrored(false, { type: 'GET_WEATHER_FAILURE', hasErrored: true}))
        .toEqual(true);
    });
  });

  describe('itemsIsPending', () => {
    test('should return the correct state', () => {
      expect(itemsIsPending(false, { type: 'GET_WEATHER_PENDING', isLoading: true}))
        .toEqual(true);
    });
  });

  describe('items', () => {
    test('should return the correct state', () => {
      expect(items(false, { type: 'GET_WEATHER_SUCCESS', items: 'some items'}))
        .toEqual('some items');
    });
  });
});