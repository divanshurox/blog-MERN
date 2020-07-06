import { GET_BLOG, POST_BLOG, DELETE_BLOG, BLOG_LOADING, GET_ONE_BLOG } from './actions';
import axios from 'axios';
import { returnErrors } from './errorAction';
import { tokenConfig } from './authActions';

export const getBlog = () => dispatch => {
    dispatch(blogLoading());
    axios.get('/api/blogs')
        .then(res => dispatch({
            type: GET_BLOG,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
}

export const getOneBlog = (id) => (dispatch, getState) => {
    dispatch(blogLoading());
    axios.get(`/api/blogs/${id}`, tokenConfig(getState))
        .then(res => dispatch({
            type: GET_ONE_BLOG,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
}

export const blogLoading = () => {
    return {
        type: BLOG_LOADING
    }
}

export const postBlog = (blog) => (dispatch, getState) => {
    axios.post('/api/blogs', blog, tokenConfig(getState))
        .then((res) => dispatch({
            type: POST_BLOG,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
}

export const deleteBlog = (id) => (dispatch, getState) => {
    axios.delete(`/api/blogs/${id}`, tokenConfig(getState))
        .then(res => dispatch({
            type: DELETE_BLOG,
            payload: id
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
}