import { useRouter } from 'next/router';
import styled from 'styled-components';
import { } from 'semantic-ui-react';
import { useRecoilState } from 'recoil';
import { openSideMenu as openSideMenuAtom } from '../../data/atoms.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import feeds from '../../data/feeds';

const SlideShow = () => {
  const router = useRouter();
  const [openSideMenu, setOpenSideMenu] = useRecoilState(openSideMenuAtom);

  return (
    <Container>
      <Column style={{ flex: 1 }} >
        {feeds.map((item, i) => {
          if (i < 3) {
            return (
              <Card key={i}>
                <TitleWrapper>
                  <Title className="clamp2">{item.title}</Title>
                </TitleWrapper>
                <Img src={item.photo} />
              </Card>
            )
          }
        })}
      </Column>
      <CarouselWrapper>
        <Carousel showThumbs={false}>
          {feeds.map((item, i) => {
            return (
              <Card key={i}>
                <CenterImg src={item.photo} />
                <CenterTitleWrapper>
                  <CenterTitle className="clamp2">{item.title}</CenterTitle>
                </CenterTitleWrapper>
              </Card>
            )
          }
          )}
        </Carousel>
      </CarouselWrapper>
      <Column style={{ flex: 1 }} >
        {feeds.map((item, i) => {
          if (i > 2) {
            return (
              <Card key={i}>
                <TitleWrapper>
                  <Title className="clamp2">{item.title}</Title>
                </TitleWrapper>
                <Img src={item.photo} />
              </Card>
            )
          }
        })}
      </Column>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 10px;
`;
const Column = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  gap: 15px;
`;
const CarouselWrapper = styled.div`
  flex: 3;
  .carousel .control-dots {
    bottom: 100px ;
  }
  .carousel .control-dots .dot {
    width: 10px;
    height: 10px;
  }
  .carousel.carousel-slider .control-arrow {
    top: 40%;
    opacity: .5;
    background-color: #0c0c0c;
    height: 50px;
    padding: 5px 10px 10px 10px;
  }
`;
const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;
const Img = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;
const TitleWrapper = styled.div`
  width: 100%;
  padding: 10px;
  background-color: rgba(0,0,0,0.6);  
`;
const Title = styled.div`
  color: white;
`;
const CenterImg = styled.img`
  width: 100%;
  height: 480px;
  object-fit: cover;
  `;
const CenterTitleWrapper = styled.div`
  width: 100%;
  padding: 15px 20px 15px 20px;
  background-color: rgba(0,0,0,0.6); 
  min-height: 90px;
  `;
const CenterTitle = styled.div`
    color: white;
    font-size: 20px;
    text-align: left;
    line-height: 150%;
  `;
export default SlideShow;
