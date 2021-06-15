import '../.semantic/dist/semantic.min.css';
import '../styles.css';
import theme from '../theme';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import { RecoilRoot, useRecoilState } from 'recoil';
import TopCat from '../components/TopCat';
import TopBar from '../components/TopBar';
import { useIsDesktop } from '../util/useScreenSize';

function MyApp({ Component, pageProps }) {
  const isDesktop = useIsDesktop();

  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Head>
          <title>Peaceful Mall - Health</title>
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        </Head>
        <Container>
          {isDesktop && <TopCat />}
          <TopBar />
          <Wrapper isDesktop={isDesktop}>
            <Component {...pageProps} />
          </Wrapper>
        </Container>
      </RecoilRoot>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  /* align-items: center; */
  justify-content: center;
  width: 100vw;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 140px 40px 10px 40px;
  padding-top: ${p => p.isDesktop ? "140px" : "80px"};
  margin: 0 auto;
`;

export default MyApp;
