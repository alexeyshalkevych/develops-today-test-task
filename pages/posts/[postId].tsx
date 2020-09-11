import { NextPage, GetServerSideProps } from 'next';
import Router from 'next/router';
import { IPost } from '../../interfaces';
import { fetchPost } from '../../services/blogApi';

interface IPostProps {
  post: IPost;
}

const Post: NextPage<IPostProps> = ({ post }) => {
  return (
    <>
      <h1>Post page ...</h1>
      <p>{post.body}</p>
      <br />
      <button
        type="button"
        onClick={() => {
          Router.push('/');
        }}
      >
        Go to all posts
      </button>
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
