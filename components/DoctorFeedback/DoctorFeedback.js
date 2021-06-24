import { useState } from "react";
import styled from "styled-components";
import { Divider, Icon } from "semantic-ui-react";
import CardContainer from '../../components/CardContainer';

let feedbackData = [
  {
    id: 1,
    user_name: "Brooklyn Simmons",
    user_pic: "/user_blank.png",
    createAt: "Mar 20, 2019 23:14",
    feedback: "太棒了，实实在在的好医生，很耐心讲解问题。",
  },
  {
    id: 2,
    user_name: "Floyd Miles",
    user_pic: "/user_blank.png",
    createAt: "Mar 20, 2019 23:14",
    feedback: "医生的态度很好，回答问题也很有耐心，好评。",
  },
  {
    id: 3,
    user_name: "Jenny Wilsons",
    user_pic: "/user_blank.png",
    createAt: "Mar 20, 2019 23:14",
    feedback: "太谢谢医生的及时回答，很满意",
  },
];

const DoctorFeedback = () => { 
  const [feedback, ] = useState(feedbackData);

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
    <CardContainer>
      <Row style={{ justifyContent: "space-between" }}>
        <Header>患者评价</Header>
        <Button>
          <Icon name="plus" /> 写评论
        </Button>
      </Row>
      {feedback &&
        feedback.map((item, i) => {
          return (
            <>
              <Divider />
              <Row>
                <Img src={item.user_pic} />
                <Col>
                  <UserName>{item.user_name}</UserName>
                  <Date>{item.createAt}</Date>
                </Col>
              </Row>
              <Feedback>{item.feedback}</Feedback>
            </>
          );
        })}
      <Divider />
      <div style={{ color: "#30aabc" }}>
        <Icon name="chevron down" /> 查看更多
      </div>
    </CardContainer>
  );
};

const Feedback = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
`;
const Date = styled.div`
  color: grey;
  font-size: 10px;
`;
const UserName = styled.div`
  font-size: 12px;
`;
const Img = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 30px;
`;
const Col = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;
const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 10px 0 10px 0;
  gap: 10px;
`;
const Header = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
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
  cursor: pointer;
`;
export default DoctorFeedback;
