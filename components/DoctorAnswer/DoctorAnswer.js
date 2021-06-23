import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Divider, Pagination, Icon } from "semantic-ui-react";
import { useRecoilState } from "recoil";
import {
  doctors as doctorsAtom,
  selectedDoctor as selectedDoctorAtom,
} from "../../data/atoms";

let addressData = [
  {
    id: 1,
    title: "拔智齿前消炎药吃多久合适",
    content:
      "您好，根据您的提问，建议在拔牙前一个星期开始服用消炎药物。智齿拔除，如果造成的牙龈创面比较大，要进行一定的抗感染治疗。除口服消炎药外，平时还要注意口腔卫生，每次饭后用，温盐水漱口。饮食要清淡，避免辛辣刺激。",
    likes: 120,
    createAt: "2016-10-23",
  },
  {
    id: 2,
    title: "抽烟手指发黄然后变肿了，手指一直有烟味，怎么洗都有，怎么办?",
    content:
      "你好，如果是你说的这个情况是由于长时间有害物质侵袭而导致的，没有什么特别有效的措施。",
    likes: 9,
    createAt: "2016-10-21",
  },
  {
    id: 3,
    title: "左腿一直热，是神经热，怎么治疗?",
    content:
      "你好，如果是你说的这个情况，如果确定是神经问题的话，可以考虑服用一些营养神经的药物，配合针灸进行治疗。",
    likes: 0,
    createAt: "2016-10-20",
  },
];

const DoctorAnswer = () => {
  const router = useRouter();
  const [selectedDoctor, setSelectedDoctor] = useRecoilState(
    selectedDoctorAtom
  );
  const [answers, setAnswers] = useState(addressData);

  const handleEvent = (event, id) => {
    const index = answers.findIndex((item) => item.id === id);
    let temp = [...answers];
    temp[index] = { ...temp[index], [event]: !temp[index][event] };

    if (event === "liked") {
      if (temp[index].liked) {
        temp[index] = { ...temp[index], likes: temp[index].likes + 1 };
      } else {
        temp[index] = { ...temp[index], likes: temp[index].likes - 1 };
      }
    }
    setAnswers(temp);
  };

  return (
    <Container>
      <Row>
        <Title>医生回复</Title>
        <Button>
          <Icon name="plus" /> 咨询医生
        </Button>
      </Row>
      {answers &&
        answers.map((item, i) => {
          return (
            <>
              <Divider />
              <AnswerContainer>
                <Title>{item.title}</Title>
                <Answer>{item.content}</Answer>
                <Row>
                  <Row>
                    <div
                      style={{
                        marginRight: 30,
                        color: item.liked ? "#30aabc" : "grey",
                      }}
                      onClick={() => handleEvent("liked", item.id)}
                    >
                      <Icon
                        name={item.liked ? "thumbs up" : "thumbs up outline"}
                      />
                      赞同 ({item.likes})
                    </div>
                    <div
                      style={{
                        marginRight: 30,
                        color: item.fav ? "#30aabc" : "grey",
                      }}
                      onClick={() => handleEvent("fav", item.id)}
                    >
                      <Icon name={item.fav ? "heart" : "heart outline"} />
                      收藏
                    </div>
                    <div
                      style={{
                        marginRight: 30,
                        color: item.shared ? "#30aabc" : "grey",
                      }}
                      onClick={() => handleEvent("shared", item.id)}
                    >
                      <Icon name={"share"} />
                      分享
                    </div>
                  </Row>
                  <div style={{ color: "grey" }}>时间：{item.createAt}</div>
                </Row>
              </AnswerContainer>
            </>
          );
        })}
      <Divider />
      <div style={{ color: "#30aabc" }}>
        <Icon name="chevron down" /> 查看更多
      </div>
    </Container>
  );
};

const TwoCol = styled.div`
  display: flex;
  flex-flow: row nowrap;
  /* justify-content: space-between; */
  gap: 20px;
`;
const MainColumn = styled.div`
  flex: 2;
`;
const Nav = styled.div`
  margin-bottom: 20px;
`;
const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: white;
  box-shadow: 0 0 10px #dddbdb;
  width: 100%;
  padding: 20px 24px 20px 24px;
`;
const CatWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;
const CatName = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: grey;
  margin-left: 20px;
`;
const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 0;
  gap: 10px;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const All = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: #30aabc;
  margin-left: 20px;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 5px;
  color: white;
  /* border: 1px solid ${(p) => p.theme.primary}; */
  background-color: ${(p) => p.theme.primary};;
  min-width: 100px;
`;
const AnswerContainer = styled.div``;

const Answer = styled.div`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 15px;
`;
export default DoctorAnswer;
