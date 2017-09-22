import { applyMiddleware, createStore } from 'redux';
import { createLogger } from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import rootReducer from './reducers';

const middleware = applyMiddleware(  promise(),  thunk,  createLogger() );
export default createStore(rootReducer, middleware);
