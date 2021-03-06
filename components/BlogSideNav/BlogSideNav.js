import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Divider } from "semantic-ui-react";
import { useRecoilState } from "recoil";
import { openSideMenu as openSideMenuAtom } from "../../data/atoms.js";
import getColor from '../../util/getColor';
import feeds from '../../data/feeds';

const BlogSideNav = ({ data, setTitle }) => {
  const router = useRouter();
  const [openSideMenu, setOpenSideMenu] = useRecoilState(openSideMenuAtom);
  const [selected, setSelected] = useState(data.pages[0]);

  return (
    <Container>
      {feeds.map((item, i) => {
        return (
          <Card key={i}>
            <Label getColor={getColor(item.cat)}>{item.cat}</Label>
            <Img src={item.photo} />
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
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: white;
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
export default BlogSideNav;
