import { applyMiddleware, createStore } from 'redux'
import reducer from './redux/rootReducer'
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/saga/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()
const middleware = [logger, sagaMiddleware]
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))
store.sagaTask = sagaMiddleware.run(rootSaga)

export default store;