import { combineReducers} from 'redux';
import logReducer from './logReducer';

//exporto un conjunto con todos los reducers de mi app
export default  combineReducers({
    log: logReducer
});