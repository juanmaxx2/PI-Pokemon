import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer'
import thunkMiddleWare from 'redux-thunk';
const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhacer(applyMiddleware(thunkMiddleWare))
);

export default store;