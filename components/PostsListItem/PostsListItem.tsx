import React from 'react';
import Link from 'next/link';
import { IPost } from '../../interfaces';
import {
  Image,
  Title,
  Description,
  WriteSubtitle,
  AuthorPostWrapper,
  AuthorPostAvatar,
  AuthorPostName,
  AuthorPostCreated,
} from './PostListItem.styled';

interface IPostsListItemProps {
  post: IPost;
}

const PostsListItem: React.FC<IPostsListItemProps> = ({ post }) => {
  return (
    <Link as={`/posts/${post.id}`} href="/posts/[postId]">
      <a>
        <Image
          src="https://images.unsplash.com/photo-1581462050168-00c97ee89d1f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
          alt="blog-code-card"
        />
        <div>
          <WriteSubtitle>writing</WriteSubtitle>
          <Title>{post.title}</Title>
          <Description>{post.body}</Description>
          <AuthorPostWrapper>
            <AuthorPostAvatar
              src="https://ghost.org/blog/content/images/size/w100/2020/08/armand.jpg"
              alt="author-post"
            />
            <div>
              <AuthorPostName>Alex Code</AuthorPostName>
              <AuthorPostCreated>12 SEP 2020 * 8 MIN READ</AuthorPostCreated>
            </div>
          </AuthorPostWrapper>
        </div>
      </a>
    </Link>
  );
};

export default PostsListItem;
