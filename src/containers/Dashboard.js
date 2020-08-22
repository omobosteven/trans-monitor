import React from 'react';
import { Layout } from 'antd';

import HeaderComponent from '../components/Header';
import SideBar from '../components/SideBar';

import '../styles/containers/dashboard.scss';

const { Content } = Layout;

const Dashboard = () => {
  return (
    <>
      <Layout className="dashboard-layout">
        <HeaderComponent />
        <Layout>
          <SideBar />
          <Layout>
            <Content>Content</Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
