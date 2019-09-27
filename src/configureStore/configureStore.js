import { createStore, combineReducers } from 'redux';
import rootReducer from '../RootReducer';

export default function configureStore() {
  const store = createStore(
    combineReducers({
      ...rootReducer,
    }),
  );

  return store;
}
