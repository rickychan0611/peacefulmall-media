import { useRouter } from "next/router";
import styled from "styled-components";
import { Divider, Input, Icon, Header } from "semantic-ui-react";
import { useRecoilState } from "recoil";
import CardContainer from "../CardContainer";

const SearchCard = () => {
  const router = useRouter();

  return (
    <>
      <CardContainer>
      <SearchInputWrapper>
        <Icon name="search" />
        <SearchInput placeholder="输入名称" />
      </SearchInputWrapper>
      <SearchButton>
        <Icon name="search" />
        搜索
      </SearchButton>
      </CardContainer>
      <div style={{marginTop: 20}}></div>

      <CardContainer>
      <Header>热门中草药</Header>
      <TagWrapper>
        <Tag>八角莲</Tag>
        <Tag>八角枫根</Tag>
        <Tag>人参</Tag>
        <Tag>巴戟天</Tag>
        <Tag>附子</Tag>
        <Tag>白芨</Tag>
      </TagWrapper>
      </CardContainer>
    </>
  );
};

const TagWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 15px;
`;
const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 30px;
  background-color: #D6EEF1;
  color: #30AABC;
`;
const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  gap: 10px;
`;
const SearchInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  background-color: #f7f6f6;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 10px;
  input:focus {
    outline: none;
  }
`;
const SearchInput = styled.input`
  background-color: transparent;
  border: 0px solid;
  /* min-width: 300px; */
`;
const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 5px;
  background-color: ${(p) => p.theme.primary};
  color: white;
`;

export default SearchCard;
