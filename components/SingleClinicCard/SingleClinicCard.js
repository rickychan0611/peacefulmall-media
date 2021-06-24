import styled from "styled-components";
import CardContainer from "../CardContainer";
import { Icon } from "semantic-ui-react";

const SingleClinicCard = ({ item }) => {

  return (
    <CardContainer>
      <Wrapper>
        <Card>
          <Col>
            <Img src={item.pic} />
            <CardWrapper>
              <Name>{item.name}</Name>
              <Lang>{item.lang}</Lang>
              <Text>
                <Icon name="store" />
                &nbsp;&nbsp;{item.address}
              </Text>
              <Text>
                <Icon name="mail outline" />
                &nbsp;&nbsp;{item.email}
              </Text>
              <Text>
                <Icon name="phone" />
                &nbsp;&nbsp;{item.tel}
              </Text>
            </CardWrapper>
          </Col>
        </Card>
      </Wrapper>
    </CardContainer>
  );
};

const CardWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  gap: 10px;
`;
const Name = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
const Lang = styled.div`
  font-size: 14px;
  color: grey;
`;
const Text = styled.div`
  font-size: 14px;
  color: black;
`;
const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;
const Card = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  gap: 15px;
`;
const Col = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  gap: 20px;
`;
const Img = styled.img`
  width: 240px;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
`;

export default SingleClinicCard;
