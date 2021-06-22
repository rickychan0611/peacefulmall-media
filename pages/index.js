import { useState } from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import Clinics from '../components/Clinics';
import { Icon } from 'semantic-ui-react';
import CatBanner from '../components/CatBanner';
import OnlineDoctors from '../components/OnlineDoctors';
import Topic from '../components/Topic';

const doctorCats = ['儿科', '妇科', '产科', '泌尿外科', '消化内科', '口腔科', '耳鼻喉科'];


const Home = () => {
  return (
    <>
      <CatBanner />
      <br/>
      {/* <Topic title="在线问诊" flex={1}/> */}
      <Topic title="在线问诊" flex={1} cats={doctorCats}><OnlineDoctors /></Topic>
      <br/>
      <Topic title="中医诊所" flex={1}><Clinics /></Topic>
      <br />
      <TwoColRow>
        <Topic title="中医咨询" flex={2}><OnlineDoctors /></Topic>
        <Topic title="大家都在问" flex={1}/>
      </TwoColRow>
    </>
  );
};

const TwoColRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 10px 0;
  gap: 20px;
`;
export default Home;
