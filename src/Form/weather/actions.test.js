import { itemsHasErrored, itemsIsPending, itemsFetchDataSuccess } from "./actions";

describe('actions', () => {
  describe('itemsHasErrored', () => {
    test('should return the correct action', () => {
      const expectAction = {
        type: 'GET_WEATHER_FAILURE',
        hasErrored: true,
      }

      expect(itemsHasErrored(true)).toEqual(expectAction);
    });
  });
  describe('itemsIsPending', () => {
    test('should return the correct action', () => {
      const expectAction = {
        type: 'GET_WEATHER_PENDING',
        isLoading: true,
      }

      expect(itemsIsPending(true)).toEqual(expectAction);
    });
  });
  describe('itemsFetchDataSuccess', () => {
    test('should return the correct action', () => {
      const expectAction = {
        type: 'GET_WEATHER_SUCCESS',
        items: 'some items',
      }

      expect(itemsFetchDataSuccess('some items')).toEqual(expectAction);
    });
  });
})