import { NextPage } from 'next';
import Head from 'next/head';
import FormNewPost from '../../components/FormNewPost/FormNewPost';

const New: NextPage = () => {
  return (
    <>
      <Head>
        <title>Develops Today Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FormNewPost />
    </>
  );
};

export default New;
