import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Button, Icon } from 'semantic-ui-react';
import { useRecoilState } from 'recoil';
import { openSideMenu as openSideMenuAtom } from '../../data/atoms.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import feeds from '../../data/feeds';
import getColor from '../../util/getColor';

const SlideShow = () => {
  const router = useRouter();
  const [openSideMenu, setOpenSideMenu] = useRecoilState(openSideMenuAtom);
  const [slidefeeds, setSlideFeeds] = useState();

  useEffect(() => {
    let temp = feeds.filter((item, i) => {
      if (i < 10) {
        return true
      }
      else false
    })
    setSlideFeeds(temp)
    console.log(temp)
  }, [])

  return (
    <Container>
      <Column style={{ flex: 1 }} >
        {feeds.map((item, i) => {
          if (i < 3 && i >= 0) {
            return (
              <Card key={i}>
                <Label getColor={getColor(item.cat)}>{item.cat}</Label>
                <Img src={item.photo} />
                <TitleWrapper>
                  <Title className="clamp2">{item.title}</Title>
                </TitleWrapper>
              </Card>
            )
          }
        })}
      </Column>

      {slidefeeds && slidefeeds[0] && <CarouselWrapper>
        <Carousel showThumbs={false} showIndicators={false} infiniteLoop autoPlay interval={3000}
          renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
            hasPrev && (
              <ArrowButton className="leftArrow" onClick={clickHandler} ><Icon name='chevron left' /></ArrowButton>
            )
          }
          renderArrowNext={(clickHandler, hasNext, labelPrev) =>
            hasNext && (
              <ArrowButton className="rightArrow" onClick={clickHandler} ><Icon name='chevron right' /></ArrowButton>
            )
          }
          renderThumbs={() => null}
        >
          {slidefeeds.map((item, i) => {

            return (
              <Card key={i}>
                <CenterLabel getColor={getColor(item.cat)}>{item.cat}</CenterLabel>
                <CenterImg src={item.photo} />
                <CenterTitleWrapper>
                  <CenterTitle className="clamp2">{item.title}</CenterTitle>
                </CenterTitleWrapper>
              </Card>
            )

          }
          )}
        </Carousel>
      </CarouselWrapper>}

      <Column style={{ flex: 1 }} >
        {feeds.map((item, i) => {
          if (i > 2 && i < 6) {
            return (
              <Card key={i}>
                <Label getColor={getColor(item.cat)}>{item.cat}</Label>
                <Img src={item.photo} />
                <TitleWrapper>
                  <Title className="clamp2">{item.title}</Title>
                </TitleWrapper>
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
  padding: 30px 0px;
`;
const Column = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  gap: 15px;
`;
const Label = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  color: white;
  padding: 2px 8px;
  font-size: 12px;
  background-color: red; 
  background-color: ${p => p.getColor}  
`;
const CarouselWrapper = styled.div`
  flex: 3; 
  max-width: 640px;
  .leftArrow{
    left: 10px;
    padding: 5px 3px 5px 5px;
  }
  .rightArrow{
    right: 10px;
    padding: 5px 2px 5px 7px;
  }
  .carousel .control-dots {
    bottom: 100px ;
  } 
  .carousel .control-dots .dot {
    width: 10px;
    height: 10px;
  }
`;
const ArrowButton = styled.div`
  position: absolute;
  top: 40%;
  z-index: 10;
  background-color: rgba(255,255,255,.8);
  font-size: 20;
  border-radius: 25px;
`;
const Card = styled.div`
  position: relative;
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
const CenterLabel = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  padding: 5px 15px;
  font-size: 16px;
  background-color: ${p => p.getColor} 
  `;
export default SlideShow;
