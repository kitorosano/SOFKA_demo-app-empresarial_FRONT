import { combineReducers } from 'redux';
import randomReducer from './randomReducer';
import viewReducer from './viewReducer';

export default combineReducers({
    random: randomReducer,
    view: viewReducer
});