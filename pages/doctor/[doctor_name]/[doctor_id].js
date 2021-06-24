import { useRouter } from "next/router";
import styled from "styled-components";
import Topic from "../../../components/Topic";
import QuestionCards from "../../../components/QuestionCards";
import SingleDoctorCard from "../../../components/SingleDoctorCard";
import DoctorAnswer from "../../../components/DoctorAnswer";
import DoctorFeedback from "../../../components/DoctorFeedback";
import { useRecoilState } from "recoil";
import {
  doctors as doctorsAtom,
  selectedDoctor as selectedDoctorAtom,
} from "../../../data/atoms";

const doctor_id = () => {
  const router = useRouter();
  const [selectedDoctor, setSelectedDoctor] = useRecoilState(
    selectedDoctorAtom
  );

  return (
    <>
      {selectedDoctor && (
        <>
          <Nav>{"健康 > 在线问诊 > 保德仁中医诊所 > 石志坚"}</Nav>
          <TwoCol>

            <MainColumn>
              <Container>
                <SingleDoctorCard item={selectedDoctor} />
              </Container>
              <br />
              <DoctorAnswer />
              <br />
              <DoctorFeedback />
            </MainColumn>

            <Topic title="大家都在问" flex={1} fixedHeight><QuestionCards /></Topic>
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
const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: white;
  width: 100%;
  padding: 20px 24px 20px 24px;
  border-radius: 10px;
`;
const CatWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;
const CatName = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: grey;
  margin-left: 20px;
`;
const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 0;
  gap: 10px;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const All = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: #30aabc;
  margin-left: 20px;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 5px;
  color: white;
  /* border: 1px solid ${(p) => p.theme.primary}; */
  background-color: ${(p) => p.theme.primary};;
  min-width: 100px;
`;
const AnswerContainer = styled.div``;

const Answer = styled.div`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 15px;
`;
export default doctor_id;
