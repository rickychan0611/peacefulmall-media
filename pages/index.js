import { useState } from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import CatBanner from '../components/CatBanner';
import OnlineDoctors from '../components/OnlineDoctors';
import Clinics from '../components/Clinics';
import { Icon } from 'semantic-ui-react';

const Home = () => {
  return (
    <>
      <CatBanner />
      <br/>
      <OnlineDoctors />
      <br/>
      <Clinics />
    </>
  );
};

export default Home;
