import {createStore, applyMiddleware } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'; //esto nos permite manejar peticiones asinconrans entre otras cosas
import rootReducer from './reducers'; //importamos todos los reducers de la app

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;