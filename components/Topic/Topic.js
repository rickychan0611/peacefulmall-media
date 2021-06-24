import router, { useRouter } from "next/router";
import styled from "styled-components";
import { Icon, Divider } from "semantic-ui-react";
import CardContainer from "../../components/CardContainer";

const Topic = ({
  title,
  flex,
  children,
  cats,
  fixedHeight,
  path,
  darkMode,
  noAll
}) => {
  return (
    <>
      <CardContainer flex={flex} fixedHeight={fixedHeight}>
        <Row>
          <Title darkMode={darkMode}>{title}</Title>
          <CatWrapper>
            {cats &&
              cats.map((cat) => <CatName darkMode={darkMode}>{cat}</CatName>)}
            {!noAll && (
              <All darkMode={darkMode} onClick={() => router.push(path)}>
                查看更多 &nbsp;&nbsp;
                <Icon name="chevron right" size="small" />
              </All>
            )}
          </CatWrapper>
        </Row>
        {children}
      </CardContainer>
    </>
  );
};

const CatWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;
const CatName = styled.div`
  font-size: 15px;
  color: grey;
  margin-left: 20px;
  color: ${(p) => p.darkMode && "white"};
`;
const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 0;
  gap: 10px;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-right: 10px;
  color: ${(p) => p.darkMode && "white"};
`;
const All = styled.div`
  font-weight: 500;
  font-size: 15px;
  color: #30aabc;
  margin-left: 20px;
  color: ${(p) => p.darkMode && "white"};
`;

export default Topic;
