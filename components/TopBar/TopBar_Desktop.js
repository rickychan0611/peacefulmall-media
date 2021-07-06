import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Button, Transition, Image, Icon, Dropdown, Menu } from 'semantic-ui-react';
import { useRecoilState } from 'recoil';
import { user as userAtom } from '../../data/userAtom';
import useTranslation from 'next-translate/useTranslation';
import Dimmer from '../Dimmer';
import { useCookies } from 'react-cookie';

const TopBar_Desktop = ({ locales, changeLocale }) => {
  const router = useRouter();
  const [user, setUser] = useRecoilState(userAtom);
  const [jiggle, setJiggle] = useState(false);
  const { t } = useTranslation('home');
  const [openDropdownMenu, setOpenDropdownMenu] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies();

  return (
    <>
      {openDropdownMenu && <Dimmer state={openDropdownMenu} close={setOpenDropdownMenu} />}
      <Row style={{ cursor: 'pointer' }} onClick={() => router.push('/')}>
        <Image size="mini" src="/logo-p.png" />
        <h3 style={{ color: '#e46964', margin: 0, marginLeft: 10 }}>
          {t('title')}
          <span style={{ margin: '0 10px 0 10px', color: '#1ec5af' }}> | </span>
          <span style={{ color: '#3e70ce' }}> {t('subTitle')}</span>
        </h3>
      </Row>
      <Row>
        <SearchInputWrapper>
          <Icon name="search" />
          <SearchInput placeholder="输入关键词进行搜索" />
        </SearchInputWrapper>
      </Row>
    </>
  );
};

const SearchInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  background-color: #f7f6f6;
  padding:  10px 20px;
  border-radius: 20px;
  input:focus {
    outline:none;
}
`;
const SearchInput = styled.input`
  background-color: transparent;
    border: 0px solid;
  min-width: 300px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  border-left: 1px solid #cacaca;
  height: 100%;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
`;
const H4 = styled.h4`
  margin: 0;
  display: flex;
  justify-content: space-between;
`;
const DropDownContainer = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 5px;
  cursor: pointer;
`;
const DropDownMenu = styled.div`
  background-color: white;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  border: 1px solid #adadad;
  border-radius: 0px 0px 15px 15px;
  text-align: left;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  .front:hover {
    background-color: #bebe51;
  }
  .last:hover {
    background-color: #bebe51;
    border-radius: 0px 0px 15px 15px;
  }
`;
const MenuItem = styled.h4`
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding: 15px 10px 15px 10px;
  border-bottom: ${(p) => !p.last && '1px solid #b3b3b3'};
  background-color: ${(p) => p.selected && '#bebe51'};
  border-radius: ${(p) => p.selected && p.last && '0px 0px 15px 15px'};
`;
export default TopBar_Desktop;
