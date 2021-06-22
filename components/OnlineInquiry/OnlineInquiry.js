import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { useRecoilState } from 'recoil';
import { openSideMenu as openSideMenuAtom } from '../../data/atoms.js';
import DoctorCard from '../DoctorCard/'
;
const types = ['儿科', '妇科', '产科', '泌尿外科', '消化内科', '口腔科', '耳鼻喉科'];

const OnlineInquiry = () => {
  const router = useRouter();
  const [openSideMenu, setOpenSideMenu] = useRecoilState(openSideMenuAtom);

  return (
    <>
      <Container>
        <Row>
          <Title>在线问诊</Title>
          <TypeWrapper>
            {types.map((item) => (
              <TypeName>{item}</TypeName>
            ))}
            <All>
              全部科室 &nbsp;&nbsp;
              <Icon name="chevron right" size="small" />
            </All>
          </TypeWrapper>
        </Row>
        <Row>
          <DoctorCard/>
          <DoctorCard/>
          <DoctorCard/>
          <DoctorCard/>
        </Row>
      </Container>
    </>
  );
};

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

export default OnlineInquiry;
