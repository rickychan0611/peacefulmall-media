import styled from 'styled-components';
import { useRecoilState } from "recoil";
import {
  clinics as clinicsAtom,
} from "../../data/atoms";
import ClinicCard from '../ClinicCard';

const Clinics = ( {column} ) => {
  const [clinics] = useRecoilState(clinicsAtom);

  return (
    <>
        <CardWrapper column={column}>
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
  flex-flow: ${p => p.column ? "column" : "row"} nowrap;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  gap: 10px;
`;

export default Clinics;
