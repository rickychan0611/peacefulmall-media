import { useState } from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import CatBanner from '../components/CatBanner';
import OnlineInquiry from '../components/OnlineInquiry';
import { Icon } from 'semantic-ui-react';

const Home = () => {
  return (
    <>
      <CatBanner />
      <br/>
      <OnlineInquiry />
    </>
  );
};

export default Home;
