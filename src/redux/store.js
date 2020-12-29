import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducer'
const middleware = [thunk,]
const enhancers = [];

if(process.env.NODE_ENV === 'development'){
    const logger = createLogger()
    middleware.push(logger)
    const reduxDevToolExtension = window.__REDUX_DEVTOOLS_EXTENSION__
    if(typeof reduxDevToolExtension === 'function'){
        enhancers.push(reduxDevToolExtension())
    }
}

const composedEnchancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, composedEnchancers)

export default store