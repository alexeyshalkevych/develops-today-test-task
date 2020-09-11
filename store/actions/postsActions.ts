import {
  IPost,
  fetchPostsActionTypes,
  fetchAddPostActionTypes,
  IError,
  IPostsActions,
  IErrorAction,
} from '../../interfaces/index';

export const getPostsRequest = (): IPostsActions => ({
  type: fetchPostsActionTypes.FETCH_POSTS_REQUST,
});

export const getPostsSuccess = (posts: IPost[]): IPostsActions => ({
  type: fetchPostsActionTypes.FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsError = (error: IError): IErrorAction => ({
  type: fetchPostsActionTypes.FETCH_POSTS_ERROR,
  payload: error,
});

export const addPostRequest = (): IPostsActions => ({
  type: fetchAddPostActionTypes.FETCH_ADD_POST_REQUST,
});

export const addPostSuccess = (post: IPost): IPostsActions => ({
  type: fetchAddPostActionTypes.FETCH_ADD_POST_SUCCESS,
  payload: post,
});

export const addPostError = (error: IError): IErrorAction => ({
  type: fetchAddPostActionTypes.FETCH_ADD_POST_ERROR,
  payload: error,
});
