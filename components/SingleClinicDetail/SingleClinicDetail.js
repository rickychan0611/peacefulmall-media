import styled from "styled-components";
import CardContainer from "../CardContainer";
import { Icon } from "semantic-ui-react";
import Topic from "../Topic";

const SingleClinicDetail = ({ item }) => {
  return (
    <Topic title="简介" noAll>
      <Text>{item.description}</Text>
    </Topic>
  );
};

const Text = styled.div`
  font-size: 14px;
  line-height: 24px;
  padding: 24px 0 24px 0;
  border-top: 1px solid #E1E3E5 ;
  margin-top: 20px;
`;

export default SingleClinicDetail;
