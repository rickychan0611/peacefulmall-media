import { useRouter } from "next/router";
import styled from "styled-components";
import { Divider } from "semantic-ui-react";
import { useRecoilState, useRecoilValue } from "recoil";
import { herbsD as herbsDAtom, herbKeyword as herbKeywordAtom } from '../../data/atoms'
const HerbCards = () => {
  const router = useRouter();
  // const [filteredHerbs] = useRecoilState(filteredHerbsAtom);
  const [herbsD] = useRecoilState(herbsDAtom);

  return (
    <>
      <Wrapper>
        {herbsD.map((item, i) => {
          return (
            <>
              <Card key={i}
              onClick={() => {
                router.push('/herbal_wiki/'+ item.title)
              }}>
                <Img src={item.pic} />
                <div>
                  <Title>{item.title}</Title>
                </div>
              </Card>
            </>
          );
        })}
        {/* {filteredHerbs && filteredHerbs.length === 0  && <h2>没有"{herbKeyword}"的搜索结果</h2>} */}
      </Wrapper>
    </>
  );
};

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

export default HerbCards;
