import { put, call } from 'redux-saga/effects';
import * as Eff from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import {
  getPostsRequest,
  getPostsSuccess,
  getPostsError,
  addPostRequest,
  addPostSuccess,
  addPostError,
} from '../actions/postsActions';
import { fetchPosts, fetchCreatePost } from '../../services/blogApi';
import {
  IPost,
  fetchPostsActionTypes,
  fetchAddPostActionTypes,
  INewPost,
} from '../../interfaces';

const { takeLatest }: any = Eff;

function* fetchPostsWorker() {
  yield put(getPostsRequest());

  try {
    const posts: IPost[] = yield call(fetchPosts);

    yield put(getPostsSuccess(posts));
  } catch (error) {
    yield put(getPostsError(error.code));
  }
}

function* fetchAddPostWorker(newPost: INewPost) {
  yield put(addPostRequest());

  try {
    const post: IPost = yield call(fetchCreatePost, newPost);

    yield put(addPostSuccess(post));
  } catch (error) {
    yield put(addPostError(error.response));
  }
}

export function* fetchPostsWatcher(): SagaIterator<void> {
  yield takeLatest(fetchPostsActionTypes.FETCH_POSTS, fetchPostsWorker);
}

export function* fetchAddPostWatcher(): SagaIterator<void> {
  yield takeLatest(fetchAddPostActionTypes.FETCH_ADD_POST, fetchAddPostWorker);
}
