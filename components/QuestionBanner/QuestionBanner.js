import { useState } from "react";
import styled from "styled-components";
import { Icon, Modal } from "semantic-ui-react";
import QuestionForm from "../QuestionForm";

const QuestionBanner = () => {
  const [subCats, setSubCats] = useState();
  const [open, setOpen] = useState(false);

  return (
    <TopBannerRow>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        closeIcon
      >
        <Modal.Header>
        请输入你的问题
        </Modal.Header>
        <Modal.Content>
          <QuestionForm />
        </Modal.Content>
      </Modal>

      <CatMenuContainer>
        <CatMenu>
          <Title>
            今日已经解决<span style={{ color: "#30aabc" }}> 719 </span>个问题
          </Title>
          <Title>已经收录问题</Title>
          <Count>830373</Count>
          <Button onClick={() => setOpen(!open)}>马上提问</Button>
        </CatMenu>
      </CatMenuContainer>

      {subCats ? (
        <SubCatContainer>
          {subCats.subCats.map((subCat) => {
            return (
              <Row>
                <SubTitle>{subCat.name}</SubTitle>
                <SubList>
                  {subCat.pages.map((item) => (
                    <SubListName>{item.name}</SubListName>
                  ))}
                </SubList>
              </Row>
            );
          })}
        </SubCatContainer>
      ) : (
        <BannerContainer>
          <BannerImg src="/banner-1.png" />
          <BannerText>运动可以帮助改善 湿气重情况吗？</BannerText>
        </BannerContainer>
      )}
    </TopBannerRow>
  );
};

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 8px;
`;
const SubTitle = styled.div`
  flex: 1;
  font-weight: 500;
  margin-right: 10px;
`;
const SubList = styled.div`
  flex: 6;
  display: flex;
  flex-flow: row wrap;
`;
const SubListName = styled.div`
  margin-right: 26px;
  color: grey;
  margin-bottom: 5px;
  cursor: pointer;
`;
const TopBannerRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  min-height: 220px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;
const CatMenuContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  box-shadow: 0 0 10px #dddbdb;
  background-color: white;
  max-height: 220px;
`;
const CatMenu = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  /* align-items: center; */
  justify-content: center;
  width: 240px;
  border-bottom: 1px solid #dad9d9;
  padding: 0 8px 0 24px;
  cursor: pointer;
  gap: 10px;
`;
const SubCatContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  box-shadow: 0 0 10px #dddbdb;
  width: 100%;
  background-color: white;
  border: 1px solid #dddbdb;
  /* justify-content: space-around; */
  padding: 20px 24px 10px 24px;
  height: 100%;
  min-height: 220px;
  gap: 5px;
`;
const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;
`;
const BannerText = styled.div`
  position: absolute;
  width: 224px;
  height: 72px;
  top: 60px;
  left: 104px;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  color: white;
`;

const BannerImg = styled.img`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 220px;
  object-fit: cover;
`;
const Title = styled.div`
  font-size: 16px;
`;
const Count = styled.div`
  color: #30aabc;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 24px;
  padding-top: 0px;
  padding-bottom: 10px;
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
export default QuestionBanner;
