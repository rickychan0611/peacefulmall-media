import styled from "styled-components";
import Topic from "../../components/Topic";
import DoctorAnswer from "../../components/DoctorAnswer";
import FeaturedDoctor from "../../components/FeaturedDoctor";
import QuestionBanner from "../../components/QuestionBanner";

const questions = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Nav>{"健康 > 中医 > 大家都在问"}</Nav>
        </Wrapper>

        <QuestionBanner />
        <br />

        <TwoCol>
          <Topic title="中医咨询" flex={2} noAll>
            <DoctorAnswer />
          </Topic>

          <Topic title="推荐专家" flex={1} fixedHeight noAll>
            <FeaturedDoctor />
          </Topic>
        </TwoCol>
      </Container>
    </>
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
  padding: 30px 20px 0px 0px;
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

export default questions;
