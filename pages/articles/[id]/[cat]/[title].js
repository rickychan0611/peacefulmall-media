import { useState, useEffect } from 'react';
import styled from "styled-components";
import Topic from "../../../../components/Topic";
import Content from "../../../../components/Content";
import CardGrid from "../../../../components/CardGrid";
import axios from 'axios';

const article = () => {
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
      <Wrapper>
        <Content/>
        <Topic title="你可能感興趣" flex={1} noAll>
          <CardGrid feeds={feeds} />
        </Topic>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 20px 0px 20px;
`;

export default article;
