import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { useRecoilState } from 'recoil';
import { doctors as doctorsAtom } from '../../data/atoms.js';
import DoctorCard from '../DoctorCard';

const OnlineDoctors = () => {
  const [doctors] = useRecoilState(doctorsAtom);
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
