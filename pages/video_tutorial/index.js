import { useState } from "react";
import styled from "styled-components";
import Topic from "../../components/Topic";
import BlogSideNav from "../../components/BlogSideNav";
import VideoCards from "../../components/VideoCards";
import cats from "../../cats";

const data = cats[0].subCats[4];

const video_tutorial = () => {
  const [title, setTitle] = useState(data.pages[0].name);
  return (
    <>
      <Wrapper>
        <Nav>{"健康 > 中医 > 视频课程"}</Nav>
        <Topic title="视频课程" noAll />
        <div style={{marginTop: 20}}></div>
        <Topic title={title} flex={6} fixedHeight noAll>
          <VideoCards />
          <VideoCards />
          <VideoCards />
          <VideoCards />
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

export default video_tutorial;
