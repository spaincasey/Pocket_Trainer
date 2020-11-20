import { combineReducers } from 'redux';
import appReducer from './appReducer';
import testObject from './appReducer';

export default combineReducers({
    libraries: appReducer
});