import { useRouter } from "next/router";
import styled from "styled-components";
import { Divider } from "semantic-ui-react";
import { useRecoilState } from "recoil";

const QuestionCards = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <Divider />
      <Card>
        <Img src="/pic-1.jpg" />
        <Title>中药停一周还有效果吗？</Title>
      </Card>
      <Divider />
      <Card>
        <Img src="/pic-2.jpg" />
        <Title>[中医科] 脾虚会出现什么问题？</Title>
      </Card>
      <Divider />
      <Card>
        <Img src="/pic-3.jpg" />
        <Title>[中医科] 脾虚会出现什么问题？</Title>
      </Card>
      <Divider />
      <Header>喝中药中途喝酒了要注意什么？</Header>
      <Header>艾灸能降血糖吗？</Header>
      <Header>湿热是怎么回事？</Header>
      <Header>[中医科] 经常艾灸对身体好吗？</Header>
      <Header>[中医科] 中药停一周还有效果吗？</Header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  gap: 10px;
`;
const Card = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  gap: 15px;
`;
const Img = styled.img`
  width: 120px;
  height: 90px;
  border-radius: 5px;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
`;
const Header = styled.div`
  font-weight: bold;
  font-size: 15px;
  line-height: 28px;
`;

export default QuestionCards;
