import router, { useRouter } from 'next/router';
import styled from 'styled-components';
import { Icon, Divider } from 'semantic-ui-react';
import { useRecoilState } from 'recoil';
import { openSideMenu as openSideMenuAtom } from '../../data/atoms.js';

const Topic = ({title, flex, children, cats, fixedHeight, path}) => {
  return (
    <>
      <Container flex={flex} fixedHeight={fixedHeight}>
        <Row>
          <Title>{title}</Title>
          <CatWrapper>
            {cats && cats.map((cat) => (
              <CatName>{cat}</CatName>
            ))}
            <All onClick={() => router.push(path)}>
               查看更多 &nbsp;&nbsp;
              <Icon name="chevron right" size="small" />
            </All>
          </CatWrapper>
        </Row>
        {children}

      </Container>
    </>
  );
};

const Container = styled.div`
  flex : ${p => p.flex === 1 ? "1 3" : "2 0"};
  display: flex;
  flex-flow: column nowrap;
  background-color: white;
  width: 100%;
  padding: ${p => p.flex === 1 ? "20px 24px 30px 24px" : "20px 44px 30px 44px"};
  height: ${p => p.fixedHeight && "100%"};
  border-radius: 10px;
`;
const CatWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;
const CatName = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: grey;
  margin-left: 20px;
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
  font-size: 22px;
  font-weight: bold;
  margin-right: 10px;
`;
const All = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: #30aabc;
  margin-left: 20px;
`;

export default Topic;
