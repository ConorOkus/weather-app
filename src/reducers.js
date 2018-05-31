import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { items, itemsHasErrored, itemsIsPending } from "./Form/weather/reducers";

const rootReducer = combineReducers({
  form: formReducer,
  items,
  itemsHasErrored,
  itemsIsPending,
});

export default rootReducer;