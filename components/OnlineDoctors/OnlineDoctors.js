import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { useRecoilState } from 'recoil';
import { openSideMenu as openSideMenuAtom } from '../../data/atoms.js';
import DoctorCard from '../DoctorCard';

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

const OnlineDoctors = () => {
  return (
    <>
        <DoctorCardWrapper>
          {doctors.map((item,i) => {
            return (
              <DoctorCard item={item} key={i}/>
            )
          })}
        </DoctorCardWrapper>
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

export default OnlineDoctors;
