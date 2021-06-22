import { useIsDesktop } from '../../util/useScreenSize';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';

import TopBar_Mobile from './TopBar_Mobile.js';
import TopBar_Desktop from './TopBar_Desktop.js';

export const locales = [
  {
    key: 'en',
    text: 'ENG',
    value: 'en'
  },
  {
    key: 'zh-CN',
    text: '简体',
    value: 'zh-CN'
  }
];

export const changeLocale = async (e, { value }) => {
  console.log(value);
  await setLanguage(value);
  const date = new Date();
  const expireMs = 100 * 365 * 24 * 60 * 60 * 1000; // 100 days
  date.setTime(date.getTime() + expireMs);
  document.cookie = `NEXT_LOCALE=${value};expires=${date.toUTCString()};path=/`;
};

const TopBar = () => {
  const isDesktop = useIsDesktop();
  const { t } = useTranslation('home');

  return (
    <>
      <Container isDesktop={isDesktop}>
        {!isDesktop ? (
          <TopBar_Mobile t={t} changeLocale={changeLocale} locales={locales} />
        ) : (
          <TopBar_Desktop t={t} changeLocale={changeLocale} locales={locales} />
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${p =>  p.isDesktop ? "10px 40px 10px 40px" : "10px 0 10px 0"};
  position: fixed;
  top: ${p => p.isDesktop ? "42px" : "0px"};
  background-color: white;
  z-index: 10000;
  /* box-shadow: 0 0 10px #d2e6de; */
`;

export default TopBar;
