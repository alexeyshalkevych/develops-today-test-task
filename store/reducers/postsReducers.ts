import { HYDRATE } from 'next-redux-wrapper';
import {
  fetchPostsActionTypes,
  IPostsActions,
  IPostsState,
  fetchAddPostActionTypes,
  IErrorAction,
} from '../../interfaces/index';

const initialState: IPostsState = {
  posts: [],
  error: null,
};

const postReducers = (
  state = initialState,
  { type, payload }: IPostsActions | IErrorAction | any,
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
      return state;

    case fetchPostsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload,
      };

    case fetchPostsActionTypes.FETCH_POSTS_ERROR:
    case fetchAddPostActionTypes.FETCH_ADD_POST_ERROR:
      return {
        ...state,
        error: payload,
      };

    case fetchAddPostActionTypes.FETCH_ADD_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, payload],
      };

    default:
      return state;
  }
};

export default postReducers;
