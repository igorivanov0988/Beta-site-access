import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducer from '../store/reducers/rootReducer';
import rootSaga from '../store/sagas/rootSaga';

const middlewares = []
let composeEnhancers = compose

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger({}))

  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  }
}

const sagaMiddleware = createSagaMiddleware()
middlewares.push(sagaMiddleware)

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
)

sagaMiddleware.run(rootSaga)