import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Divider, Form, Icon, Image, Modal } from "semantic-ui-react";
import { useRecoilState } from "recoil";
import { selectedDoctor as selectedDoctorAtom } from "../../data/atoms";
import CardContainer from "../../components/CardContainer";
import QuestionForm from "../../components/QuestionForm";

let answerData = [
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
  const [answers, setAnswers] = useState(answerData);
  const [openQuestion, setOpenQuestion] = useState(false);

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
    <>
      <CardContainer>
        <Row>
          <Header>医生回复</Header>
          <Button onClick={() => setOpenQuestion(!openQuestion)}>
            <Icon name={!openQuestion ? "plus" : "minus"} /> 咨询医生
          </Button>
        </Row>

        {openQuestion && (
          <>
            <Divider />
            <QuestionForm setOpenQuestion={setOpenQuestion} answers={answers} />
          </>
        )}

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
                          cursor: "pointer",
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
                          cursor: "pointer",
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
                          cursor: "pointer",
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
      </CardContainer>
    </>
  );
};

const ReviewImage = styled(Image)`
  height: 100px;
  width: 100px;
  object-fit: cover;
`;
const CloseIcon = styled.div`
  position: absolute;
  right: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 2px 2px 4px 4px;
`;
const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: white;
  width: 100%;
  padding: 20px 44px 30px 44px;
  border-radius: 10px;
`;
const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 0;
  gap: 10px;
`;
const PicRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 30px;
`;
const Header = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 5px;
  color: white;
  /* border: 1px solid ${(p) => p.theme.primary}; */
  background-color: ${(p) => p.theme.primary};;
  width: 100px;
  cursor: pointer;
  border: none;
`;
const AnswerContainer = styled.div``;

const Answer = styled.div`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 15px;
`;
export default DoctorAnswer;
