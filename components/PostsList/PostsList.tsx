import React from 'react';
import { IPost } from '../../interfaces';
import PostsListItem from '../PostsListItem/PostsListItem';
import { List, ListItem } from './PostList.styled';

interface IPostsListProps {
  posts?: IPost[];
}

const PostsList: React.FC<IPostsListProps> = ({ posts }) => {
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
