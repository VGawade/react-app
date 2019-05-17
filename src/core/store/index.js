import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import dashboardSaga from '../sagas/dashboardSaga';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(dashboardSaga);
  return store;
};

export default configureStore;
