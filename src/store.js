import { applyMiddleware, createStore } from 'redux'
import reducer from './redux/rootReducer'
import logger from 'redux-logger';

const store = createStore(reducer, applyMiddleware(logger));

export default store;