import { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import { END } from 'redux-saga';
import Navigation from '../components/Navigation/Navigation';
import { fetchPostsActionTypes } from '../interfaces';
import { wrapper } from '../store';
import PostsList from '../components/PostsList/PostsList';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Develops Today Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <h1>Posts page ...</h1>
      <PostsList />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    if (!store.getState().blog.posts?.length) {
      store.dispatch({ type: fetchPostsActionTypes.FETCH_POSTS });
      store.dispatch(END);
    }

    await store.sagaTask.toPromise();
  },
);

export default Home;
