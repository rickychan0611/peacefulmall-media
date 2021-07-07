import { useState } from "react";
import styled from "styled-components";
import { Divider } from "semantic-ui-react";
import Clinics from "../components/Clinics";
import { Icon } from "semantic-ui-react";
import Topic from "../components/Topic";
import CatBanner from "../components/CatBanner";
import OnlineDoctors from "../components/OnlineDoctors";
import QnA from "../components/QnA";
import QuestionCards from "../components/QuestionCards";
import BlogList from "../components/BlogList";
import VideoCards from "../components/VideoCards";
import HerbCards from "../components/HerbCards";
import SearchCard from "../components/SearchCard";
import SlideShow from "../components/SlideShow";

const doctorCats = [
  "儿科",
  "妇科",
  "产科",
  "泌尿外科",
  "消化内科",
  "口腔科",
  "耳鼻喉科",
];
const special = ["食疗养生", "自我保健"];

const Home = () => {
  return (
    <>
      <br />
      <SlideShowWrapper>
        <SlideShow />
      </SlideShowWrapper>
      <Wrapper>
        <Topic title="在线问诊" flex={1} cats={doctorCats} path="/doctor">
          <OnlineDoctors />
        </Topic>
      </Wrapper>

      <Wrapper>
        <Topic title="中医诊所" flex={1} path="/clinic">
          <Clinics />
        </Topic>
      </Wrapper>

      <Wrapper>
        <TwoColRow>
          <Topic title="中医咨询" flex={2} path="/QnA">
            <QnA />
          </Topic>
          <Topic title="大家都在问" flex={1} path="/questions">
            <QuestionCards />
          </Topic>
        </TwoColRow>
      </Wrapper>

      <Wrapper>
        <TwoColRow>
          <Topic
            title="特色中医"
            flex={2}
            cats={special}
            path="/c_med_featured"
          >
            <BlogList />
          </Topic>
          <Topic title="中医常识" flex={1} path="/c_med_knowledge">
            <QuestionCards />
          </Topic>
        </TwoColRow>
      </Wrapper>

      <Wrapper>
        <Topic title="视频课程" flex={1} path="/video_tutorial">
          <VideoCards />
        </Topic>
      </Wrapper>

      <Wrapper>
        <TwoColRow>
          <Topic title="中草药百科" flex={2} path="/herbal_wiki">
            <Divider />
            <HerbCards />
          </Topic>
          <Topic title="中药房" flex={1} path="/herbal_wiki">
            <SearchCard />
          </Topic>
        </TwoColRow>
      </Wrapper>
    </>
  );
};

const SlideShowWrapper = styled.div`
background: linear-gradient(139deg, rgba(87,106,142,1) 0%, rgba(27,24,42,1) 54%);

`;
const Wrapper = styled.div`
  padding: 10px;
  background-color: ${(p) => p.backgroundColor};
`;
const TwoColRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

export default Home;
