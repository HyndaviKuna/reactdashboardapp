// src/components/MainLayout.js
import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from './Dashboard';

const Layout = styled.div`
  display: flex;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
`;

const MainLayout = () => {
  return (
    <Layout>
      <Sidebar />
      <Main>
        <Header />
        <Dashboard />
      </Main>
    </Layout>
  );
};

export default MainLayout;