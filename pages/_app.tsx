import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { wrapper } from '../store';
import Layout from '../components/Layout/Layout';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Kufam', cursive;
  }
`;

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(MyApp);
