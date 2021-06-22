import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { useRecoilState } from 'recoil';
import { openSideMenu as openSideMenuAtom } from '../../data/atoms.js';

const types = ['儿科', '妇科', '产科', '泌尿外科', '消化内科', '口腔科', '耳鼻喉科'];

const OnlineInquiry = () => {
  const router = useRouter();
  const [openSideMenu, setOpenSideMenu] = useRecoilState(openSideMenuAtom);

  return (
    <DoctorCard>
      <DoctorPic src="/doctor-1.png" />
      <DoctorName>石志坚</DoctorName>
      <DoctorTitle>小儿内科副主任医师</DoctorTitle>
      <DoctorAnswer>78人回答</DoctorAnswer>
      <Button>咨询医生</Button>
    </DoctorCard>
  );
};

const DoctorCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: white;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddbdb;
  width: 100%;
  padding: 20px 24px 10px 24px;
  border-radius: 5px;
  max-width: 300px;
  cursor: pointer;
`;

const DoctorPic = styled.img`
  font-weight: bold;
  width: 72px;
  height: 72px;
  border-radius: 25px;
  border-bottom: 10px;
  margin-bottom: 10px;
`;
const DoctorName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;
const DoctorTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 8px;
  color: grey;
`;
const DoctorAnswer = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  color: grey;
`;
const Button = styled.div`
  font-size: 14px;
  font-weight: bold;
  background-color: #30aabc;
  color: white;
  padding: 8px 20px;
  border-radius: 8px;
`;

export default OnlineInquiry;
