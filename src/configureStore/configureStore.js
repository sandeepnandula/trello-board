import { createStore, compose } from 'redux';
import rootReducer from '../RootReducer';

export default function configureStore() {
  // Currently enabled the redux store in the build for structure checking purpose
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(),
  );
  return store;
}
