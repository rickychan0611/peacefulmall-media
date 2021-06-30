import styled from "styled-components";
import Topic from "../../components/Topic";
import DoctorList from "../../components/DoctorList";
import FeaturedDoctor from "../../components/FeaturedDoctor";

const Doctor = () => {
  return (
    <TwoCol>
      <Topic title="在线问诊" flex={2} noAll>
        <DoctorList />
      </Topic>

      <Topic title="推荐专家" flex={1} fixedHeight>
        <FeaturedDoctor />
      </Topic>
    </TwoCol>
  );
};

const TwoCol = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding-top: 30px;
`;

export default Doctor;
