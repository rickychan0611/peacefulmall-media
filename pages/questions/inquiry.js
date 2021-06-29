import styled from "styled-components";
import Topic from "../../components/Topic";
import FeaturedDoctor from "../../components/FeaturedDoctor";
import QuestionForm from "../../components/QuestionForm";
import TwoColPage from "../../components/TwoColPage";
import { Divider, Form, Icon, Image, Modal } from "semantic-ui-react";

const questions = () => {
  return (
    <>
      <TwoColPage nav={"健康 > 大家都在问 > 在线问诊"}>
        <>
          <Divider />
          <Topic title="和平驻场特约中医咨询" flex={2} fixedHeight noAll>
            <QuestionForm />
          </Topic>
        </>

        <Topic title="推荐专家" flex={1} fixedHeight noAll>
          <FeaturedDoctor />
        </Topic>
      </TwoColPage>
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
  /* gap: 20px; */
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
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding-left: 0;
`;

export default questions;
