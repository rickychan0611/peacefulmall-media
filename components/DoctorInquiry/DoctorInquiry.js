import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Icon, Divider } from 'semantic-ui-react';
import { useRecoilState } from 'recoil';
import { openSideMenu as openSideMenuAtom } from '../../data/atoms.js';
import QuestionCards from '../QuestionCards'
;
const doctors = [
  {
    id: 1,
    name: "石志坚",
    pic: "/doctor-1.png",
    title: "小儿内科副主任医师"
  },
  {
    id: 2,
    name: "王光强",
    pic: "/doctor-2.jpg",
    title: "小儿内科副主任医师"
  },  
  {
    id: 3,
    name: "周俊",
    pic: "/doctor-3.jpg",
    title: "小儿内科副主任医师"
  },
  {
    id: 4,
    name: "吕莎莎",
    pic: "/doctor-4.jpg",
    title: "小儿内科副主任医师"
  }
] 

const DoctorInquiry = () => {
  return (
    <>
      <Container>
        <Row>
          <Title>中医咨询</Title>
            <All>
               查看更多 &nbsp;&nbsp;
              <Icon name="chevron right" size="small" />
            </All>
        </Row>
        <Divider />
        <Wrapper>
          {doctors.map((item,i) => {
            return (
              <QuestionCards item={item} key={i}/>
            )
          })}
        </Wrapper>
      </Container>
    </>
  );
};

const Wrapper = styled.div`
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
  padding: 10px 0 0 0;
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

export default DoctorInquiry;
