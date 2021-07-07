import { useRouter } from "next/router";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { Icon } from 'semantic-ui-react';
import { user as userAtom } from "../../data/userAtom";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";

const cats = [
  {
    name: "本地",
    link: "",
    icon: "",
  },
  {
    name: "加国",
    link: "",
    icon: "",
  },
  {
    name: "國際",
    link: "",
    icon: "",
  },
  {
    name: "社区",
    link: "",
    icon: "",
  },
  {
    name: "體育",
    link: "",
    icon: "",
  },
  {
    name: "影視",
    link: "",
    icon: "",
  },
  {
    name: "生活",
    link: "",
    icon: "",
  },
  {
    name: "潮流",
    link: "",
    icon: "",
  },
  {
    name: "視像",
    link: "",
    icon: "youtube",
  },
];

export const locales = [
  {
    key: "en",
    text: "ENG",
    value: "en",
  },
  {
    key: "zh-CN",
    text: "简体",
    value: "zh-CN",
  },
];

export const changeLocale = async (e, { value }) => {
  console.log(value);
  await setLanguage(value);
  const date = new Date();
  const expireMs = 100 * 365 * 24 * 60 * 60 * 1000; // 100 days
  date.setTime(date.getTime() + expireMs);
  document.cookie = `NEXT_LOCALE=${value};expires=${date.toUTCString()};path=/`;
};

const NavBar = () => {
  const router = useRouter();
  const [user, setUser] = useRecoilState(userAtom);
  const { t } = useTranslation("home");

  return (
    <>
      <Container>
        <Row>
          {cats.map((cat, i) => {
            return (
              <Cat
                color={cat.color}
                onClick={() => {
                  router.push(cat.link);
                }}
              >
                {cat.icon && <Icon name={cat.icon} />}
                {cat.name}
              </Cat>
            );
          })}
        </Row>
        {/* <Divider style={{ top: 100 }} /> */}
        {/* <Divider style={{ top: 138 }} /> */}
      </Container>
    </>
  );
};

const Divider = styled.div`
  z-index: 10001;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 100px;
  background: linear-gradient(139deg, rgba(87,106,142,1) 0%, rgba(27,24,42,1) 54%);
  height: 3px;
`;
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
  /* background: #4a5a75 */
  `;

const Cat = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  cursor: pointer;
  color: white;
  padding: 9px 20px;
  :hover {
    background-color: #7277c4;;
    /* color: #7277c4; */
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
