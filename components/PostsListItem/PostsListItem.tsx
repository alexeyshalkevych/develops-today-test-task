import React from 'react';
import Link from 'next/link';
import { IPost } from '../../interfaces';

interface IPostsListItemProps {
  post: IPost;
}

const PostsListItem: React.FC<IPostsListItemProps> = ({ post }) => {
  return (
    <Link as={`/posts/${post.id}`} href="/posts/[postId]">
      <a>
        <h2>{post.title}</h2>
      </a>
    </Link>
  );
};

export default PostsListItem;
