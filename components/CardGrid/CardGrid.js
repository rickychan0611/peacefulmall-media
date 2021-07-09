import styled from "styled-components";
import { useIsMobile } from '../../util/useScreenSize';
import getColor from '../../util/getColor';
import { useRecoilState } from "recoil";
import { selectedCat as selectedCatAtom } from "../../data/atoms";
import { selectedArticle as selectedArticleAtom } from '../../data/atoms';
import { useRouter } from "next/router";

const CardGrid = ({ feeds }) => {
  const isMobile = useIsMobile();
  const [selectedCat, setSelectedCat] = useRecoilState(selectedCatAtom);
  const [ selectedArticle, setSelectedArticle ] = useRecoilState(selectedArticleAtom);

  const router = useRouter();

  return (
    <Container isMobile={isMobile}>
      {feeds && feeds.map((item, i) => {
        return (
          <Card key={i}
            onClick={() => {
              setSelectedCat({name: item.cat, color: getColor(item.cat)})
              setSelectedArticle(item)
              router.push("/articles/" + item.id + "/" + item.category.name + "/" + item.title.replace(/\s|%/g, '-'));
            }}>
            {item.category && <Label getColor={getColor(item.category.name)}>{item.category.name}</Label>}
            <Img src={process.env.NEXT_PUBLIC_HOST_URL + item.cover_photo.url} />
            <Bar getColor={getColor(item.cat)} />
            <TitleWrapper>
              <Title className="clamp2">{item.title}</Title>
            </TitleWrapper>
          </Card>
        )
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
  gap: 26px;
  margin-top: 20px;
  padding : ${p => p.isMobile ? "0px" : "0 10px"};
`;
const Bar = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${p => p.getColor};
`;
const Card = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  box-shadow: 0 0 20px rgba(0,0,0,.2);
  cursor: pointer;
`;
const Label = styled.div`
  position: absolute;
  top: 10px;
  left: 11px;
  color: white;
  padding: 2px 8px;
  font-size: 12px;
  background-color: ${p => p.getColor};
`;
const Img = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;
const TitleWrapper = styled.div`
  width: 100%;
  height: 62px;
  padding: 10px 18px 10px 18px;
  /* background-color: #1f2038;   */
  background-color: white;
`;
const Title = styled.div`
font-size: 16px;
color: black;
/* color: white; */
`;

export default CardGrid;
