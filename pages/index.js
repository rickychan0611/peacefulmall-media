import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import TopCat from '../components/TopCat';
import cats from '../cats';
import { Icon } from 'semantic-ui-react';

const Home = () => {
  return (
    <Row>
      <CatMenuContainer>
        {cats.map((item, i) => {
          return (
            <CatMenu key={i} style={{ marginBottom : i === (cats.length-1) && 0}}>
              <Title>{item.title}</Title>
              <div>
                <Icon name="chevron right" />
              </div>
            </CatMenu>
          );
        })}
      </CatMenuContainer>
    </Row>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;
const CatMenuContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  /* border-radius: 5px; */
  box-shadow: 0 0 10px #dddbdb;
  background-color: white;
`;
const CatMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 240px;
  border-bottom: 1px solid #dad9d9;
  padding: 12px 8px 12px 24px;
`;
const Title = styled.div`
  /* padding: 12px 8px 12px 24px; */
`;

export default Home;
