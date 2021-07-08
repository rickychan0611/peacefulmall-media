import { useRouter } from "next/router";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { Icon } from 'semantic-ui-react';
import { selectedCat as selectedCatAtom } from "../../data/atoms";
import useTranslation from "next-translate/useTranslation";

const cats = [
  {
    name: "本地",
    link: "/articles/本地",
    icon: "",
    color: "#c26f03"
  },
  {
    name: "加国",
    link: "",
    icon: "",
    color: "#f52121"
  },
  {
    name: "國際",
    link: "",
    icon: "",
    color: "#165fd4"
  },
  {
    name: "社区",
    link: "",
    icon: "",
    color: "#4b8524"
  },
  {
    name: "體育",
    link: "",
    icon: "",
    color: "#bb52be"
  },
  {
    name: "影視",
    link: "",
    icon: "",
    color: "#2935df"
  },
  {
    name: "生活",
    link: "",
    icon: "",
    color: "#06a5b1"
  },
  {
    name: "潮流",
    link: "",
    icon: "",
    color: "#b3008c"
  },
  {
    name: "視像",
    link: "",
    icon: "youtube",
    color: "#ce5c5c"
  },
];

const NavBar = () => {
  const router = useRouter();
  const [selectedCat, setSelectedCat] = useRecoilState(selectedCatAtom);

  return (
    <>
      <Container>
        <Row>
          {cats.map((cat, i) => {
            return (
              <Cat
                selectedColor={selectedCat && selectedCat.name === cat.name && selectedCat.color}
                color={cat.color}
                onClick={() => {
                  setSelectedCat(cat)
                  router.push("/articles/" + cat.name);
                }}
              >
                {cat.icon && <Icon name={cat.icon} />}
                {cat.name}
              </Cat>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

const Container = styled.div`
  z-index: 10000;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 102px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .6);
  background: linear-gradient(169deg, #6a81ca 0%, #39416e 45%);
  `;

const Cat = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  cursor: pointer;
  color: white;
  padding: 9px 20px;
  background-color: ${p => p.selectedColor};
  :hover {
    background-color: ${p => p.color};
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  color: #6d7175;
  width: 100%;
  max-width: 1100px;
  gap: 5px;
`;

export default NavBar;
