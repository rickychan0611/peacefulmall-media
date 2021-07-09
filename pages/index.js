import { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import Topic from "../components/Topic";
import SlideShow from "../components/SlideShow";
import CardGrid from "../components/CardGrid";
import axios from 'axios';

const Home = () => {

  const [feeds, setFeeds] = useState();

  useEffect(async () => {
    try {const getArticles = await axios.get(
      process.env.NEXT_PUBLIC_CORS + process.env.NEXT_PUBLIC_HOST_URL + '/articles'
      ,{ crossdomain: true }
    )
    console.log("getArticles", getArticles.data)
    setFeeds(getArticles.data)}
    catch (err) {
      console.log("err", err)
    }
  }, [])

  return (
    <>
      <br />
      <SlideShowWrapper>
        <SlideShow />
      </SlideShowWrapper>
      <Wrapper >
        <Topic title="最新动态" flex={1} noAll>
          <CardGrid feeds={feeds} />
        </Topic>
      </Wrapper>
    </>
  );
};

const SlideShowWrapper = styled.div`
  background: linear-gradient(139deg, rgba(87,106,142,1) 0%, rgba(27,24,42,1) 54%);
`;
const Wrapper = styled.div`
margin-top: 40px;
  background-color: ${(p) => p.backgroundColor};
`;

export default Home;
