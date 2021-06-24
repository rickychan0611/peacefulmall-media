import { useRouter } from "next/router";
import styled from "styled-components";
import { Divider, Pagination, Icon } from "semantic-ui-react";
import { useRecoilState } from "recoil";
import { doctors as doctorsAtom } from "../../data/atoms";

const FeaturedDoctor = () => {
  const router = useRouter();
  const [doctors] = useRecoilState(doctorsAtom);

  return (
    <Wrapper>
      {doctors.map((item, i) => {
        return (
          <>
            <Divider />
            <Card>
              <Col3>
                <Img src={item.pic} />
                <div>
                  <Row>
                    <Title>{item.name}</Title>
                    <Des>{item.title}</Des>
                  </Row>

                  <Content className="clamp2">{item.goodAt}</Content>
                  <br />
                  <Button><Icon name="chat"/> 免费咨询</Button>
                </div>
              </Col3>
            </Card>
          </>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  padding-bottom: 20px;
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
  border-radius: 10px;
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
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 5px;
  color: ${(p) => p.theme.primary};
  border: 1px solid ${(p) => p.theme.primary};
  min-width: 100px;
`;
export default FeaturedDoctor;
