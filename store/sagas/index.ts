import { all } from 'redux-saga/effects';
import { fetchPostsWatcher, fetchAddPostWatcher } from './postSagas';

function* rootSaga(): Generator {
  yield all([fetchPostsWatcher(), fetchAddPostWatcher()]);
}

export default rootSaga;
