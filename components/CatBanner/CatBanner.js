import { useState } from 'react';
import styled from 'styled-components';
import cats from '../../cats';
import { Icon } from 'semantic-ui-react';

const CatBanner = () => {
  const [subCats, setSubCats] = useState();
  
  return (
    <TopBannerRow>
      <CatMenuContainer>
        {cats.map((item, i) => {
          console.log("subCats" , item)
          return (
            <CatMenu
              key={i}
              style={{ marginBottom: i === cats.length - 1 && 0 }}
              onClick={() => {
                subCats === item ? setSubCats() : setSubCats(item);
              }}>
              <Title>{item.title}</Title>
              <div>
                {subCats && subCats.id === item.id ? (
                  <Icon name="minus" />
                ) : ( 
                  <Icon name="chevron right" />
                )}
              </div>
            </CatMenu>
          );
        })}
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
  font-weight: bold;
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
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 240px;
  border-bottom: 1px solid #dad9d9;
  padding: 0 8px 0 24px;
  cursor: pointer;

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
  font-weight: bold;
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
  /* padding: 12px 8px 12px 24px; */
`;

export default CatBanner;
