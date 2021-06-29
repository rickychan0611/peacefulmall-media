import styled from "styled-components";
import Topic from "../../../components/Topic";
import QuestionCards from "../../../components/QuestionCards";
import SingleDoctorCard from "../../../components/SingleDoctorCard";
import DoctorAnswer from "../../../components/DoctorAnswer";
import DoctorFeedback from "../../../components/DoctorFeedback";
import TwoColPage from "../../../components/TwoColPage";
import { useRecoilState } from "recoil";
import {
  selectedDoctor as selectedDoctorAtom,
  doctors as doctorsAtom,
} from "../../../data/atoms";
import router from "next/router";
import { useEffect } from "react";

const doctor_id = () => {
  const [selectedDoctor, setSelectedDoctor] = useRecoilState(
    selectedDoctorAtom
  );
  const [doctors] = useRecoilState(doctorsAtom);

  useEffect(() => {
    if (router) {
      let index = doctors.findIndex((item) => item.id === +router.query.doctor_id);
      index !== -1 && setSelectedDoctor(doctors[index]);
    }
  }, [router]);

  return (
    <Wrapper>
      {selectedDoctor && (
        <TwoColPage nav={"健康 > 在线问诊 > 保德仁中医诊所 > 石志坚"}>
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
        </TwoColPage>
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
const Nav = styled.div`
  margin-bottom: 20px;
`;
export default doctor_id;
