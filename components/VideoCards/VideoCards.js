import { useRouter } from "next/router";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { useRecoilState } from "recoil";
import { openSideMenu as openSideMenuAtom } from "../../data/atoms.js";
import ClinicCard from "../ClinicCard";

const videos = [
  {
    id: 1,
    title: "从应急到管理：各类型哮喘诊治精讲",
    pic: "/v-doc-1.jpg",
    description: "高效应急+精准管理+掌握合并症+兼顾并发症",
  },
  {
    id: 2,
    title: "手把手教你读懂腹部CT（肝胆胰脾）",
    pic: "/v-doc-2.jpg",
    description: "胃肠篇与肝胆胰脾强强联合，公开课金牌讲师陆军军医大学第一附属",
  },
  {
    id: 3,
    title: "甲状腺疾病诊疗与临床实战",
    pic: "/v-doc-3.jpg",
    description: "从新手到高手：甲状腺疾病进阶之路",
  },
  {
    id: 4,
    title: "神经科基本功：颅脑解剖与影像异常",
    pic: "/v-doc-4.jpg",
    description: "以解剖为基础，从病例出发，着重讲解如何关联常见神经影像与临床",
  },
];

const VideoCards = () => {
  return (
    <>
      <CardWrapper>
        {videos.map((item, i) => {
          return (
            <CardContainer>
              <PicWrapper>
                <Pic src={item.pic} />
                <Time>6:50</Time>
              </PicWrapper>
              <Wrapper>
                <Name>{item.title}</Name>
                <Des>{item.description}</Des>
              </Wrapper>
            </CardContainer>
          );
        })}
      </CardWrapper>
    </>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  gap: 10px;
`;
const PicWrapper = styled.div`
  position: relative;
`;
const Time = styled.div`
  position: absolute;
  bottom: 25px;
  right: 15px;
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  padding: 1px 7px 0 7px;
  font-size: 12px;
`;
const CardContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  background-color: white;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddbdb;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
`;
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  padding: 0px 20px 20px 20px;
`;
const Pic = styled.img`
  font-weight: bold;
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 0px 0px;
  border-bottom: 10px;
  margin-bottom: 15px;
`;
const Name = styled.div`
  font-size: 18px;
  line-height: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Des = styled.div`
  font-size: 14px;
  color: grey;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export default VideoCards;
