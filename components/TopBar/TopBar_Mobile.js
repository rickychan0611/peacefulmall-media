import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button, Dropdown, Menu, Transition, Image, Icon } from 'semantic-ui-react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { openSideMenu as openSideMenuAtom } from '../../data/atoms.js';

const TopBar = () => {
  const router = useRouter();
  const [openSideMenu, setOpenSideMenu] = useRecoilState(openSideMenuAtom);

  return (
    <Container>
      <MenuButton onClick={() => setOpenSideMenu(!openSideMenu)}>
        <Icon name="bars" size="large" />
        <Icon name="user circle outline" size="large" />
      </MenuButton>
      <Logo onClick={() => router.push('/')}>
        <Image size="mini" src="/logo-p.png" />
        <Name>Peaceful Mall</Name>
      </Logo>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 42px;
`;

const MenuButton = styled.div`
  position: absolute;
  color: #707070;
  top: 0;
  height: 45px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-left: 15px;
`;

const Logo = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const Name = styled.h4`
  color: ${p => p.theme.primary};
  margin: 0;
`;

export default TopBar;
