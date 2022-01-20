import PageWrapper from '../components/layout/PageWrapper';
import '../styles/globals.css';

function Main({ Component, pageProps }) {
  return (
    <PageWrapper>
      <Component {...pageProps} />
    </PageWrapper>
  );
}

export default Main;
