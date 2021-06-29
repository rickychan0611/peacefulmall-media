import { useState } from 'react';
import styled from "styled-components";
import Topic from "../../components/Topic";
import BlogSideNav from "../../components/BlogSideNav";
import QnA from "../../components/QnA";
import cats from "../../cats";

const data = cats[0].subCats[3];

const c_med_featured = () => {
  const [title, setTitle] = useState(data.pages[0].name)
  return (
    <>
      <Wrapper>
        <Nav>{"健康 > 中医 > 中医常识"}</Nav>
        <Topic title="中医常识" noAll />
        <TwoCol style={{ marginTop: 20 }}>
          <BlogSideNav data={data} setTitle={setTitle} />

          <Topic title={title} flex={6} fixedHeight noAll>
            <QnA />
          </Topic>
        </TwoCol>
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
  padding: 30px 20px 0px 20px;
`;
const Nav = styled.div`
  margin-bottom: 20px;
`;
const TwoCol = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

export default c_med_featured;
