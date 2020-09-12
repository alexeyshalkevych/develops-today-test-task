import { NextPage } from 'next';
import Head from 'next/head';
import FormNewPost from '../../components/FormNewPost/FormNewPost';

const New: NextPage = () => {
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
      <FormNewPost />
    </>
  );
};

export default New;
