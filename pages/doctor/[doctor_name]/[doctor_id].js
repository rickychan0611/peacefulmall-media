import styled from "styled-components";
import Topic from "../../../components/Topic";
import QuestionCards from "../../../components/QuestionCards";
import SingleDoctorCard from "../../../components/SingleDoctorCard";
import DoctorAnswer from "../../../components/DoctorAnswer";
import DoctorFeedback from "../../../components/DoctorFeedback";
import { useRecoilState } from "recoil";
import { selectedDoctor as selectedDoctorAtom } from "../../../data/atoms";

const doctor_id = () => {
  const [selectedDoctor] = useRecoilState(
    selectedDoctorAtom
  );

  return (
    <>
      {selectedDoctor && (
        <>
          <Nav>{"健康 > 在线问诊 > 保德仁中医诊所 > 石志坚"}</Nav>
          <TwoCol>
            
            <MainColumn>
              <SingleDoctorCard item={selectedDoctor} />
              <br />
              <DoctorAnswer />
              <br />
              <DoctorFeedback />
            </MainColumn>

            <Topic title="大家都在问" flex={1} fixedHeight>
              <QuestionCards />
            </Topic>
          </TwoCol>
        </>
      )}
    </>
  );
};

const TwoCol = styled.div`
  display: flex;
  flex-flow: row nowrap;
  /* justify-content: space-between; */
  gap: 20px;
  padding-bottom: 50px;
`;
const MainColumn = styled.div`
  flex: 2.5;
`;
const Nav = styled.div`
  margin-bottom: 20px;
`;
export default doctor_id;
