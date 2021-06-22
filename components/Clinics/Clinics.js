import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { useRecoilState } from 'recoil';
import { openSideMenu as openSideMenuAtom } from '../../data/atoms.js';
import ClinicCard from '../ClinicCard'
;
const types = ['儿科', '妇科', '产科', '泌尿外科', '消化内科', '口腔科', '耳鼻喉科'];
const clinics = [
  {
    id: 1,
    name: "保德仁中医诊所",
    pic: "/clinic-1.jpg",
    lang: "国语 / 粤语 / 英语",
    tel: "604-430-8185"
  },
  {
    id: 2,
    name: "东华中医",
    pic: "/clinic-2.jpg",
    lang: "国语 / 粤语 / 英语",
    tel: "604-831-2698"
  },
  {
    id: 3,
    name: "保德仁中医诊所",
    pic: "/clinic-1.jpg",
    lang: "国语 / 粤语 / 英语",
    tel: "604-430-8185"
  },
  {
    id: 4,
    name: "东华中医",
    pic: "/clinic-2.jpg",
    lang: "国语 / 粤语 / 英语",
    tel: "604-831-2698"
  }
] 

const Clinics = () => {
  return (
    <>
      <Container>
        <Row>
          <Title>中医诊所</Title>
          <TypeWrapper>
            <All>
            全部机构 &nbsp;&nbsp;
              <Icon name="chevron right" size="small" />
            </All>
          </TypeWrapper>
        </Row>
        <DoctorCardWrapper>
          {clinics.map((item,i) => {
            return (
              <ClinicCard item={item} key={i}/>
            )
          })}
        </DoctorCardWrapper>
      </Container>
    </>
  );
};

const DoctorCardWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  gap: 10px;
`;
const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-right: 10px;
`;

const TypeWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;
const TypeName = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: grey;
  margin-left: 20px;
`;
const All = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: #30aabc;
  margin-left: 20px;
`;
const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  background-color: white;
  box-shadow: 0 0 10px #dddbdb;
  width: 100%;
  padding: 20px 24px 10px 24px;
`;

export default Clinics;
