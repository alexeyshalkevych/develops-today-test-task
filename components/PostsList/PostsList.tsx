import React from 'react';
import { useSelector } from 'react-redux';
import { IPost } from '../../interfaces';
import PostsListItem from '../PostsListItem/PostsListItem';

interface IPostsListProps {
  posts?: IPost[];
}

const PostsList: React.FC<IPostsListProps> = () => {
  const posts = useSelector(state => state.blog.posts);

  return (
    <ul>
      {posts &&
        posts.map((post: IPost) => (
          <li key={post.id}>
            <PostsListItem post={post} />
          </li>
        ))}
    </ul>
  );
};

export default PostsList;
