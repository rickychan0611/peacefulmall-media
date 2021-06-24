import "../.semantic/dist/semantic.min.css";
import "../styles.css";
import theme from "../theme";
import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import { RecoilRoot, useRecoilState } from "recoil";
import TopNav from "../components/TopNav";
import TopBar from "../components/TopBar";
import { useIsDesktop } from "../util/useScreenSize";

function MyApp({ Component, pageProps }) {
  const isDesktop = useIsDesktop();

  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Head>
          <title>Peaceful Mall - Health</title>
          <meta
            httpEquiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Container>
          {isDesktop && <TopNav />}
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
  justify-content: center;
  width: 100vw;
`;
const Wrapper = styled.div`
  width: 100%;
  padding-top: ${(p) => (p.isDesktop ? "110px" : "80px")};
  padding-bottom: 60px;
  margin: 0 auto;
`;

export default MyApp;
