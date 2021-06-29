import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Divider } from "semantic-ui-react";
import { useRecoilState } from "recoil";
import { openSideMenu as openSideMenuAtom } from "../../data/atoms.js";

const BlogSideNav = ({ data, setTitle}) => {
  const router = useRouter();
  const [openSideMenu, setOpenSideMenu] = useRecoilState(openSideMenuAtom);
  const [selected, setSelected] = useState(data.pages[0]);

  return (
    <Container>
      {data.pages.map((item, i) => {
        return (
          <NameWrapper
            key={i}
            onClick={() => {
              setTitle(item.name)
              setSelected(item)}}
            item={item}
            selected={selected}
            firstItem={i === 0}
            lastItem={data.pages.length === i + 1}
          >
            <Name>{item.name}</Name>
          </NameWrapper>
        );
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
const NameWrapper = styled.div`
  width: 100%;
  padding: 15px 24px 15px 24px;
  border-bottom: ${(p) => (p.lastItem ? "none" : "1px solid #e1dfdf")};
  border-radius: ${(p) =>
    p.lastItem
      ? "0px 0px 10px 10px"
      : p.firstItem
      ? "10px 10px 0px 0px"
      : "none"};
  background-color: ${(p) =>
    p.item.name === p.selected.name ? "#D6EEF1" : "white"};
  font-weight: ${(p) => (p.item.name === p.selected.name ? "bold" : "normal")};
`;
const Name = styled.div`
  /* text-align: center; */
`;
export default BlogSideNav;
