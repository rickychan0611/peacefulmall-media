import styled from "styled-components";
import CardContainer from "../../components/CardContainer";
import SearchCard from "../../components/SearchCard";

const herbal_wiki = () => {
  return (
    <Container>
      <Img><img src="herb-bg.png" /></Img>
      <Wrapper>
      <Title>中药房</Title>
        <SearchCard/>
      </Wrapper>
    </Container>
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
`;
const Img = styled.div`
  position: absolute;
  width: 100vw;
  z-index: 0;
`;
export default herbal_wiki;
