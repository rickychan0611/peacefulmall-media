import styled from "styled-components";
import Topic from "../../components/Topic";
import SearchCard from "../../components/SearchCard";
import HerbCards from "../../components/HerbCards";
import CardContainer from "../../components/CardContainer";

const herbal_wiki = () => {
  return (
    <>
      <Img>
        <img src="/herb-bg.png" style={{width: "100%"}}/>
      </Img>
      <Container>
        <Wrapper>
          <Title>中草药百科</Title>
          <TwoColRow>
            <CardContainer title="中草药百科" flex={2} path="/herbal_wiki">
              <HerbCards />
            </CardContainer>
            <Topic title="中药房" flex={1} path="/herbal_wiki" noAll fixedHeight>
              <SearchCard />
            </Topic>
          </TwoColRow>
        </Wrapper>
      </Container>
    </>
  );
};
const Container = styled.div`
  position: relative;
  width: 100vw;
  margin-top: -200px;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 300px;
  max-width: 1100px;
  padding: 20px;
`;
const Title = styled.div`
  font-size: 40px;
  color: white;
  font-weight: bold;
  z-index: 100;
  margin-bottom: 60px;
  text-shadow: 0 0 10px black;
`;
const Img = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 0;
  top: -100px;
`;
const TwoColRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;
export default herbal_wiki;
