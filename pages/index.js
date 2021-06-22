import { useState } from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import Clinics from '../components/Clinics';
import { Icon } from 'semantic-ui-react';
import Topic from '../components/Topic';
import CatBanner from '../components/CatBanner';
import OnlineDoctors from '../components/OnlineDoctors';
import QnA from '../components/QnA';
import QuestionCards from '../components/QuestionCards';
import BlogList from '../components/BlogList';
import VideoCards from '../components/VideoCards';
import HerbCards from '../components/HerbCards';
import SearchCard from '../components/SearchCard';

const doctorCats = ['儿科', '妇科', '产科', '泌尿外科', '消化内科', '口腔科', '耳鼻喉科'];
const special = ['食疗养生', '自我保健'];

const Home = () => {
  return (
    <>
      <CatBanner />
      <br/>
      <Topic title="在线问诊" flex={1} cats={doctorCats}><OnlineDoctors /></Topic>
      <br/>
      <Topic title="中医诊所" flex={1}><Clinics /></Topic>
      <br />
      <TwoColRow>
        <Topic title="中医咨询" flex={2}><QnA /></Topic>
        <Topic title="大家都在问" flex={1}><QuestionCards /></Topic>
      </TwoColRow>
      <br />
      <TwoColRow>
        <Topic title="特色中医" flex={2} cats={special}><BlogList /></Topic>
        <Topic title="大家都在问" flex={1}><QuestionCards /></Topic>
      </TwoColRow>
      <br/>
      <Topic title="视频课程" flex={1}><VideoCards /></Topic>
      <br />
      <TwoColRow>
        <Topic title="中草药百科" flex={2}><HerbCards /></Topic>
        <Topic title="中药房" flex={1}><SearchCard /></Topic>
      </TwoColRow>
    </>
  );
};

const TwoColRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 20px;
`;
export default Home;
