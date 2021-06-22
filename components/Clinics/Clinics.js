import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { useRecoilState } from 'recoil';
import { openSideMenu as openSideMenuAtom } from '../../data/atoms.js';
import ClinicCard from '../ClinicCard'
;

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
        <CardWrapper>
          {clinics.map((item,i) => {
            return (
              <ClinicCard item={item} key={i}/>
            )
          })}
        </CardWrapper>
    </>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  gap: 10px;
`;

export default Clinics;
