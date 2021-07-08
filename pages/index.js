import { useState } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import Topic from "../components/Topic";
import SlideShow from "../components/SlideShow";
import CardGrid from "../components/CardGrid";
import feeds from '../data/feeds';

const Home = () => {
  return (
    <>
      <br />
      <SlideShowWrapper>
        <SlideShow />
      </SlideShowWrapper>
      <Wrapper >
        <Topic title="最新动态" flex={1} noAll>
          <CardGrid feeds={feeds}/>
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
