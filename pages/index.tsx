import { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import { END } from 'redux-saga';
import { fetchPostsActionTypes } from '../interfaces';
import { wrapper } from '../store';
import PostsListContainer from '../containers/PostsListContainer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Develops Today Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostsListContainer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async ({ store }: any) => {
    if (!store.getState().blog.posts?.length) {
      store.dispatch({ type: fetchPostsActionTypes.FETCH_POSTS });
      store.dispatch(END);
    }

    await store.sagaTask.toPromise();
  },
);

export default Home;
