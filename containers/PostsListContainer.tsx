import React from 'react';
import { useSelector } from 'react-redux';
import { IPost, IRootState } from '../interfaces';
import PostsList from '../components/PostsList/PostsList';

const PostsListContainer: React.FC = () => {
  const posts = useSelector<IRootState, IPost[]>(state => state.blog.posts);

  return <PostsList posts={posts} />;
};

export default PostsListContainer;
