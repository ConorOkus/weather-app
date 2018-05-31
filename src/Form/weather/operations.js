import actions from './actions';

export function errorAfterFiveSeconds () {
  // We return a function instead of an action object
  return (dispatch) => {
    setTimeout(() => {
      // This function is able to dispatch other action creators
      dispatch(actions.itemsHasErrored(true));
    }, 5000);
  };
}

export function itemsFetchData(url){
  return (dispatch) => {
    dispatch(actions.itemsIsPending(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(actions.itemsIsPending(false));

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(actions.itemsFetchDataSuccess(items)))
      .catch(() => dispatch(actions.itemsHasErrored(true)));
  };
}