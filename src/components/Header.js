import React from 'react';
import Icon, { BellOutlined } from '@ant-design/icons';
import { Layout, Input } from 'antd';

import SearchIcon from '../images/search-icon.svg';
import ProfileImage from '../images/user-picture.png';

import '../styles/components/header.scss';

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header className="header">
      <h1 className="header__logo">TransMonitor</h1>
      <ul className="header__nav-items">
        <li className="header__nav-item">
          <Input
            placeholder="Search..."
            prefix={<Icon component={SearchIcon} />}
          />
        </li>
        <li className="header__nav-item">Support</li>
        <li className="header__nav-item">FAQ</li>
        <li className="header__nav-item header__notification">
          <span className="notification-num">8</span>
          <BellOutlined style={{ fontSize: '20px' }} />
        </li>
        <li className="header__nav-item">
          <span className="header__user">
            <span>Hello</span>
            <span>Oluwaleke Ojo</span>
          </span>
          <div className="header__user-img">
            <img src={ProfileImage} alt="" />
          </div>
        </li>
      </ul>
    </Header>
  );
};

export default HeaderComponent;
