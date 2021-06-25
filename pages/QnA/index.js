import styled from "styled-components";
import Topic from "../../components/Topic";
import DoctorAnswer from "../../components/DoctorAnswer";
import FeaturedDoctor from "../../components/FeaturedDoctor";

const QnA = () => {
  return (
    <Container>
      <Wrapper>
        <Nav>{"健康 > 中医 > 中医咨询"}</Nav>
      </Wrapper>

      <TwoCol>
        <Topic title="中医咨询" flex={2} noAll>
          <DoctorAnswer />
        </Topic>

        <Topic title="推荐专家" flex={1} fixedHeight>
          <FeaturedDoctor />
        </Topic>
      </TwoCol>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 20px 0 20px;
`;
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
`;

export default QnA;
