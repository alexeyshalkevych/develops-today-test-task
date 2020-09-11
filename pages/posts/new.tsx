import { NextPage } from 'next';
import Router from 'next/router';
import FormNewPost from '../../components/FormNewPost/FormNewPost';

const New: NextPage = () => {
  return (
    <>
      <h1>Crate post page ...</h1>
      <FormNewPost />
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

export default New;
