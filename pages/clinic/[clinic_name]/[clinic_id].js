import styled from "styled-components";
import Topic from "../../../components/Topic";
import QuestionCards from "../../../components/QuestionCards";
import SingleClinicCard from "../../../components/SingleClinicCard";
import SingleClinicDetail from "../../../components/SingleClinicDetail";
import DoctorList from "../../../components/DoctorList";
import TwoColPage from "../../../components/TwoColPage";
import { useRecoilState } from "recoil";
import { selectedClinic as selectedClinicAtom } from "../../../data/atoms";

const clinic_id = () => {
  const [selectedClinic] = useRecoilState(selectedClinicAtom);

  return (
    <Wrapper>
      {selectedClinic && (
        <TwoColPage nav={"健康 > 在线问诊 > 保德仁中医诊所"}>
          <MainColumn>
            <SingleClinicCard item={selectedClinic} />
            <br />
            <SingleClinicDetail item={selectedClinic} />
            <br />
            <Topic title="主治医生" flex={2} noAll>
              <DoctorList noNav/>
            </Topic>
          </MainColumn>

          <Topic title="大家都在问" flex={1} fixedHeight>
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

export default clinic_id;
