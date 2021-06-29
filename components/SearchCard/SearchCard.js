import { useRouter } from "next/router";
import styled from "styled-components";
import { Divider, Input, Icon, Header } from "semantic-ui-react";
import { useRecoilState } from "recoil";
import { filteredHerbs as filteredHerbsAtom, herbKeyword as herbKeywordAtom } from '../../data/atoms'
import CardContainer from "../CardContainer";

const keywords = ["八角", "八角枫根", "人参", "巴戟天", "附子", "白芨"];

const SearchCard = () => {
  const router = useRouter();
  const [herbKeyword, setHerbKeyword] = useRecoilState(herbKeywordAtom);
  const [filteredHerbs] = useRecoilState(filteredHerbsAtom);

  const handleChange = (e) => {
    setHerbKeyword(e.target.value);
  };

  return (
    <>
      <SearchInputWrapper>
        <Icon name="search" />
        <SearchInput
          placeholder="输入名称"
          value={herbKeyword}
          onChange={handleChange}
        />
      </SearchInputWrapper>
      <Wrapper>
        {filteredHerbs && filteredHerbs.map((item, i) => {
          return (
            <>
              <Card key={i}
              onClick={() => {
                router.push('/herbal_wiki/'+ item.title)
                setHerbKeyword("")
              }}>
                <Img src={item.pic} />
                <div>
                  <Title>{item.title}</Title>
                </div>
              </Card>
            </>
          );
        })}
        {filteredHerbs && filteredHerbs.length === 0  && <h2>没有"{herbKeyword}"的搜索结果</h2>}
      </Wrapper>
      <div style={{ marginTop: 20 }}></div>

      <Header>热门中草药</Header>
      <TagWrapper>
        {keywords.map((item, i) => {
          return <Tag onClick={() => {setHerbKeyword(item)}}>{item}</Tag>;
        })}
      </TagWrapper>
    </>
  );
};

const TagWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 15px;
  padding-bottom: 20px;
`;
const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 30px;
  background-color: #d6eef1;
  color: #30aabc;
  cursor: pointer;
`;
const SearchInputWrapper = styled.div`
  margin-top: 20px;
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
const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 15px;
  padding-top: 20px;
`;
const Card = styled.div`
  flex: 1;
  min-width: 100px;
  max-width: 120px;
  height: 150px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 15px;
`;
const Title = styled.div`
  text-align: center;
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 10px;
`;

export default SearchCard;
