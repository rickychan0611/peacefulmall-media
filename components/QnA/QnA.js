import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Divider } from 'semantic-ui-react';
import { useRecoilState } from 'recoil';

const contents = [
  {
    id: 1,
    question: "拔智齿前消炎药吃多久合适?",
    doctor: {pic: "/doctor-1.png", name: "孟银花", title: "神经内科", cat: "癫痫病诊治" },
    content: "您好，根据您的提问，建议在拔牙前一个星期开始服用消炎药物。智齿拔除，如果造成的牙龈创面比较大，要进行一定的抗感染治疗。除口服消炎药外，平时还要注意口腔卫生，每次饭后用，温盐水漱口。饮食要清淡，避免辛辣刺激。"
  },
  {
    id: 2,
    question: "抽烟手指发黄然后变肿了，手指一直有烟味，怎么洗都有，怎么办?",
    doctor: {pic: "/doctor-2.jpg", name: "崔慧", title: "中医科", cat: "中医针灸" },
    content: "你好，如果是你说的这个情况是由于长时间有害物质侵袭而导致的，没有什么特别有效的措施。"
  },
  {
    id: 3,
    question: "左腿一直热，是神经热，怎么治疗?",
    doctor: {pic: "/doctor-3.jpg", name: "李迪", title: "神经内科", cat: "擅长: 癫痫病诊治" },
    content: "你好，如果是你说的这个情况，如果确定是神经问题的话，可以考虑服用一些营养神经的药物，配合针灸进行治疗。"
  },
  {
    id: 4,
    question: "拔智齿前消炎药吃多久合适?",
    doctor: {pic: "/doctor-4.jpg", name: "孟银花", title: "中医科", cat: "擅长: 癫痫病诊治" },
    content: "您好，根据您的提问，建议在拔牙前一个星期开始服用消炎药物。智齿拔除，如果造成的牙龈创面比较大，要进行一定的抗感染治疗。除口服消炎药外，平时还要注意口腔卫生，每次饭后用，温盐水漱口。饮食要清淡，避免辛辣刺激。"
  },
] 

const QnA = ( ) => {
  const router = useRouter();

  return (
    <Wrapper>
      {contents.map((item,i) => {
        return (
          <>
            <Divider />
            <Question>{item.question}</Question>
            <DoctorRow>
            <Pic src={item.doctor.pic} />
            <DoctorName> {item.doctor.name} </DoctorName>
            <DoctorInfo> {item.doctor.title} </DoctorInfo>
            <DoctorInfo> {item.doctor.cat} </DoctorInfo>
            </DoctorRow>
            <Name>{item.name}</Name>
            <Content>{item.content}</Content>
        </>)
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  gap: 5px;
`
const DoctorRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  gap: 10px;
`
const Pic = styled.img`
  font-weight: 500;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  border-bottom: 10px;
`;
const DoctorName = styled.div`
  font-size: 14px;
  font-weight: 500;
`;
const DoctorInfo = styled.div`
  font-size: 12px;
  color: grey;
`;
const Question = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
`;
const Name = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
`;
const Content = styled.div`
  font-size: 14px;
  color: grey;
`;

export default QnA;
