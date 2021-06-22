import { useRouter } from "next/router";
import styled from "styled-components";
import { Divider } from "semantic-ui-react";
import { useRecoilState } from "recoil";

const blogs = [
  {
    id: 1,
    pic: "/herb-1.jpg",
    title: "仙茅草的功效与作用",
    content:
      "仙茅（别名：Curculigo orchioides Gaertn.），别名地棕（四川、贵州省），独茅（四川），山党参（福建省），仙茅参（云南省），海南省参（海南",
  },
  {
    id: 2,
    pic: "/herb-3.jpg",
    title: "西洋参片的正确吃法",
    content:
      "仙茅（别名：Curculigo orchioides Gaertn.），别名地棕（四川、贵州省），独茅（四川），山党参（福建省），仙茅参（云南省），海南省参（海南",
  },
  {
    id: 3,
    pic: "/herb-4.jpg",
    title: "五叶绞股蓝和七叶绞股蓝的区别",
    content:
      "五叶绞股蓝，即五叶参，因其每一个叶茎生五个叶子，故称五叶绞股蓝。五叶绞股蓝嫩叶尖位置被做成五叶龙须茶。葫芦科属，多年生长 宿根蔓生植物，普",
  },
  {
    id: 4,
    pic: "/herb-2.jpg",
    title: "田七菜的功效与禁忌",
    content:
      "田七菜是日常生活非常火爆的一种瓜果蔬菜，它是五加科绿色植物的一种，关键生产在我国云南省和广西省等地归属于多年生长 木本植物，大家以应用它的",
  },
];

const HerbCards = () => {
  const router = useRouter();

  return (
    <Wrapper>
      {blogs.map((item, i) => {
        return (
          <>
            <Divider />
            <Card>
              <Img src={item.pic} />
              <div>
                <Title>{item.title}</Title>
                <Content className="clamp2">{item.content}</Content>
              </div>
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
  margin-bottom: 10px;
`;
const Content = styled.div`
  font-size: 15px;
  color: grey;
`;

export default HerbCards;
