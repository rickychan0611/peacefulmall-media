import styled from "styled-components";
import CardContainer from "../../components/CardContainer";

const SingleDoctorCard = ({ item }) => {

  return (
    <CardContainer>
      <Wrapper>
        <Card>
          <Col3>
            <Img src={item.pic} />
            <div>
              <Row>
                <Title>{item.name}</Title>
                <Des>{item.title}</Des>
              </Row>

              <Content>{item.goodAt}</Content>
              <br />
              <Bio>{item.bio}</Bio>
            </div>
          </Col3>
        </Card>
      </Wrapper>
    </CardContainer>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100%;
  gap: 10px;
  margin-top: 20px;
  padding: 0 10px 30px 10px;
`;
const Card = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  gap: 15px;
`;
const Col3 = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  gap: 20px;
`;
const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  gap: 10px;
`;
const Des = styled.div`
  font-size: 12px;
  color: grey;
`;
const Img = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 55px;
  object-fit: cover;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
`;
const Content = styled.div`
  font-size: 15px;
  line-height: 28px;
  color: grey;
  font-size: 12px;
  line-height: 16px;
  margin-top: 10px;
`;
const Bio = styled.div`
  font-size: 14px;
  line-height: 24px;
`;

export default SingleDoctorCard;
