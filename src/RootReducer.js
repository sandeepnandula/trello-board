
import { combineReducers } from 'redux'
import header from './components/header/header-reducer';
import lists from './components/list-container/list/list-reducer';

export default combineReducers({
    ...header,
    ...lists
});