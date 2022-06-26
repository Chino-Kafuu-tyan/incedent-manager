import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers/root.reducer';
import { rootWatcher } from './sagas/root-watcher.saga';

const saga = createSagaMiddleware();
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(saga))
);

saga.run(rootWatcher);
