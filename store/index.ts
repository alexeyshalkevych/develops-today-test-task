import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware, { Task } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { IRootState } from '../interfaces';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore: MakeStore<IRootState> = () => {
  const sagaMiddleware = createSagaMiddleware();

  const enhancer = applyMiddleware(sagaMiddleware);

  const store: SagaStore = createStore(
    rootReducer,
    composeWithDevTools(enhancer),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<IRootState>(makeStore);
