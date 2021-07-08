import { useState } from 'react';
import styled from "styled-components";
import Topic from "../../../components/Topic";
import Content from "../../../components/Content";
import CardGrid from "../../../components/CardGrid";
import feeds from '../../../data/feeds';

const article = () => {

  return (
    <>
      <Wrapper>
        <Content feeds={feeds}/>
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
