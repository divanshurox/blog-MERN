import { GET_BLOG, POST_BLOG, DELETE_BLOG, BLOG_LOADING, GET_ONE_BLOG } from '../actions/actions';

const initState = {
    blogs: [],
    oneBlog: {},
    loading: false
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_BLOG:
            return {
                ...state,
                blogs: action.payload,
                loading: false
            }
        case GET_ONE_BLOG:
            return {
                ...state,
                blog: action.payload,
                loading: false
            }
        case POST_BLOG:
            return {
                ...state,
                blogs: state.blogs.concat(action.payload)
            }
        case DELETE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter((ele) => ele._id !== action.payload)
            }
        case BLOG_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default reducer;