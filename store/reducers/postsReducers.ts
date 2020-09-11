import { HYDRATE } from 'next-redux-wrapper';
import {
  fetchPostsActionTypes,
  IPostsActions,
  IPostsState,
  fetchAddPostActionTypes,
} from '../../interfaces/index';

const initialState: IPostsState = {
  posts: [],
  isLoading: false,
  error: null,
};

const postReducers = (
  state = initialState,
  { type, payload }: IPostsActions,
): IPostsState => {
  switch (type) {
    case HYDRATE: {
      return {
        ...state,
        posts: payload.blog.posts,
      };
    }

    case fetchPostsActionTypes.FETCH_POSTS_REQUST:
    case fetchAddPostActionTypes.FETCH_ADD_POST_REQUST:
      return {
        ...state,
        isLoading: true,
      };

    case fetchPostsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: payload,
      };

    case fetchPostsActionTypes.FETCH_POSTS_ERROR:
    case fetchAddPostActionTypes.FETCH_ADD_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case fetchAddPostActionTypes.FETCH_ADD_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: [...state.posts, payload],
      };

    default:
      return state;
  }
};

export default postReducers;
