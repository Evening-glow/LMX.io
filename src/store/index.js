/*
applyMiddleware 中间件，可以在添加日志什么的
 */
import { createStore,applyMiddleware } from "redux";
import reducer from './reducer';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default createStore(reducer,applyMiddleware(logger,thunk));