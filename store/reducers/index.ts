import { combineReducers } from 'redux';
import postsReducers from './postsReducers';
import { IRootState } from '../../interfaces';

const rootReducer = combineReducers<IRootState>({
  blog: postsReducers,
});

export default rootReducer;
