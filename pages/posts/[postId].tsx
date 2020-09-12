import { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { IPost } from '../../interfaces';
import { fetchPost } from '../../services/blogApi';
import {
  Image,
  Title,
  Description,
  AuthorPostWrapper,
  AuthorPostAvatar,
  AuthorPostName,
  AuthorPostCreated,
  WriteSubtitle,
} from '../../components/PostsListItem/PostListItem.styled';

interface IPostProps {
  post: IPost;
}

const PostWrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: 70%;

  > div {
    margin-bottom: 30px;
  }
`;

const Post: NextPage<IPostProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Develops Today Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kufam:ital,wght@0,400;0,500;0,600;0,700;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PostWrapper>
        <WriteSubtitle>writing</WriteSubtitle>
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
        <Title>{post.title}</Title>
        <Description>{post.body}</Description>
        <Image
          src="https://images.unsplash.com/photo-1581462050168-00c97ee89d1f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
          alt="blog-code-card"
        />
      </PostWrapper>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { postId } = context.query;
  const post: IPost = await fetchPost(postId);

  return {
    props: {
      post,
    },
  };
};

export default Post;
