import styled from "styled-components";
import Topic from "../../../components/Topic";
import QuestionCards from "../../../components/QuestionCards";
import SingleDoctorCard from "../../../components/SingleDoctorCard";
import DoctorAnswer from "../../../components/DoctorAnswer";
import DoctorFeedback from "../../../components/DoctorFeedback";
import Nav from "../../../components/Nav";
import { useRecoilState } from "recoil";
import {
  selectedDoctor as selectedDoctorAtom,
  doctors as doctorsAtom,
} from "../../../data/atoms";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const doctor_id = () => {
  const router = useRouter();

  const [selectedDoctor, setSelectedDoctor] = useRecoilState(
    selectedDoctorAtom
  );
  const [doctors] = useRecoilState(doctorsAtom);
  const [nav, setNav] = useState();

  useEffect(() => {
    console.log("doctors", doctors);
    if (router) {
      let index = doctors.findIndex(
        (item) => item.id === parseInt(router.query.doctor_id)
      );
      index !== -1 && setSelectedDoctor(doctors[index]);

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
          name: doctors[index].clinic.name,
          link:
            "/clinic/" +
            doctors[index].clinic.name +
            "/" +
            doctors[index].clinic.id,
        },
        {
          name: doctors[index].name,
          link: "",
        },
      ]);
    }
  }, [router]);

  return (
    <Wrapper>
      {selectedDoctor && (
        <>
          <Nav nav={nav} />
          <TwoCol>
            <MainColumn>
              <SingleDoctorCard item={selectedDoctor} />
              <br />
              <DoctorAnswer />
              <br />
              <DoctorFeedback />
            </MainColumn>

            <Topic title="大家都在问" flex={1} fixedHeight path="/questions">
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
export default doctor_id;
