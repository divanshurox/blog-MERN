import { combineReducers } from 'redux';
import Blog from './blogReducer';
import Auth from './authReducer';
import Error from './errorReducer';

export default combineReducers({
    blog: Blog,
    auth: Auth,
    error: Error
});
