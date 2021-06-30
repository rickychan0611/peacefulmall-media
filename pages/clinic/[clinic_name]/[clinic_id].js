import styled from "styled-components";
import Topic from "../../../components/Topic";
import QuestionCards from "../../../components/QuestionCards";
import SingleClinicCard from "../../../components/SingleClinicCard";
import SingleClinicDetail from "../../../components/SingleClinicDetail";
import DoctorList from "../../../components/DoctorList";
import Nav from "../../../components/Nav";
import { useRecoilState } from "recoil";
import {
  selectedClinic as selectedClinicAtom,
  clinics as clinicsAtom,
} from "../../../data/atoms";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const clinic_id = () => {
  const [selectedClinic, setSelectedClinic] = useRecoilState(
    selectedClinicAtom
  );
  const [clinics, setClinics] = useRecoilState(clinicsAtom);
  const router = useRouter();
  const [nav, setNav] = useState();

  useEffect(() => {
    console.log("clinics", clinics);
    if (router) {
      let index = clinics.findIndex(
        (item) => item.id === parseInt(router.query.clinic_id)
      );
      index !== -1 && setSelectedClinic(clinics[index]);

      setNav([
        {
          name: "健康",
          link: "/",
        },
        {
          name: "在线问诊",
          link: "/doctor",
        },
        {
          name: clinics[index].name,
          link: ""
        }
      ]);
    }
  }, [router]);

  return (
    <Wrapper>
      {selectedClinic && (
        <>
          <Nav nav={nav} />
          <TwoCol>
            <MainColumn>
              <SingleClinicCard item={selectedClinic} />
              <br />
              <SingleClinicDetail item={selectedClinic} />
              <br />
              <Topic title="主治医生" flex={2} noAll>
                <DoctorList noNav />
              </Topic>
            </MainColumn>

            <Topic title="大家都在问" flex={1} fixedHeight>
              <QuestionCards />
            </Topic>
          </TwoCol>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 20px 0px 30px;
`;
const MainColumn = styled.div`
  flex: 2.5;
`;
const TwoCol = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;
export default clinic_id;
