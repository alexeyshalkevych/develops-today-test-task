import React from 'react';
import { useSelector } from 'react-redux';
import { IPost, IRootState } from '../../interfaces';
import PostsListItem from '../PostsListItem/PostsListItem';
import { List, ListItem } from './PostList.styled';

interface IPostsListProps {
  posts?: IPost[];
}

const PostsList: React.FC<IPostsListProps> = () => {
  const posts = useSelector<IRootState, IPost[]>(state => state.blog.posts);

  return (
    <List>
      {posts &&
        posts.map((post: IPost) => (
          <ListItem key={post.id}>
            <PostsListItem post={post} />
          </ListItem>
        ))}
    </List>
  );
};

export default PostsList;
