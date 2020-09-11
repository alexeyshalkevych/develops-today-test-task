export interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface INewPost {
  title: string;
  body: string;
}

export interface IError {
  code: string;
}

export type postIdQuery = string | string[] | undefined;

export enum fetchPostsActionTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_REQUST = 'FETCH_POSTS_REQUST',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
  HYDRATE = '__NEXT_REDUX_WRAPPER_HYDRATE__',
}

export enum fetchAddPostActionTypes {
  FETCH_ADD_POST = 'FETCH_ADD_POST',
  FETCH_ADD_POST_REQUST = 'FETCH_ADD_POST_REQUST',
  FETCH_ADD_POST_SUCCESS = 'FETCH_ADD_POST_SUCCESS',
  FETCH_ADD_POST_ERROR = 'FETCH_ADD_POST_ERROR',
}

export interface IPostsActions {
  type: fetchPostsActionTypes | fetchAddPostActionTypes;
  payload?: IPost[] | IPost | IError;
}

export interface IErrorAction {
  type: fetchPostsActionTypes | fetchAddPostActionTypes;
  payload?: IError;
}

export interface IPostsState {
  posts: IPost[];
  isLoading: boolean;
  error: IError | null;
}

export interface IRootState {
  blog: IPostsState;
}
