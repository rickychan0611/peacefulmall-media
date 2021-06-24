import styled from "styled-components";
import Topic from "../../components/Topic";
import ClinicList from "../../components/ClinicList";
import Clinics from "../../components/Clinics";

const Clinic = () => {
  return (
    <>
      <Wrapper>
        <Nav>{"健康 > 在线问诊 > 保德仁中医诊所 > 石志坚"}</Nav>
      </Wrapper>

      <TwoCol>
        <Topic title="中医机构列表与介绍" flex={2} noAll>
          <ClinicList />
        </Topic>

        <Topic title="推荐中医诊所" flex={1} fixedHeight noAll>
          <Clinics column />
        </Topic>
      </TwoCol>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 20px 0px 30px;
`;
const Nav = styled.div`
  margin-bottom: 20px;
`;
const TwoCol = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0px 20px 20px 20px;
`;

export default Clinic;
