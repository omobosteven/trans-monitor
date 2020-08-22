import React from 'react';
import Icon from '@ant-design/icons';

import { Layout, Menu, Button } from 'antd';

import OverviewIcon from '../images/overview-icon.svg';
import AllPaymentsIcon from '../images/all-payments-icon.svg';
import ReconciledPaymentsIcon from '../images/reconciled-payments-icon.svg';
import UnReconciledPaymentsIcon from '../images/un-reconciled-payments-icon.svg';
import ManualSettlementIcon from '../images/manual-payments-icon.svg';
import AllOrdersIcon from '../images/all-orders-icon.svg';
import PendingOrdersIcon from '../images/pending-orders.svg';
import ReconciledOrdersIcon from '../images/reconciled-orders-icon.svg';
import MerchantIcon from '../images/profile-icon.svg';

import '../styles/components/sidebar.scss';

const { Sider } = Layout;

const SideBar = () => {
  return (
    <Sider className="sidebar" width={260} theme="light">
      <Button shape="round" className="sidebar__generate-btn">
        Generate Invoice
      </Button>
      <Menu className="sidebar__menu" defaultSelectedKeys={['1']}>
        <Menu.ItemGroup key="g1" title="Main">
          <Menu.Item key="1" className="sidebar__menu__item">
            <Icon component={OverviewIcon} className="sidebar__menu__icon" />
            Overview
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g2" title="Payments">
          <Menu.Item key="2" className="sidebar__menu__item">
            <Icon component={AllPaymentsIcon} className="sidebar__menu__icon" />
            All Payments
          </Menu.Item>
          <Menu.Item key="3" className="sidebar__menu__item">
            <Icon
              component={ReconciledPaymentsIcon}
              className="sidebar__menu__icon"
            />
            Reconcilled Payments
          </Menu.Item>
          <Menu.Item key="4" className="sidebar__menu__item">
            <Icon
              component={UnReconciledPaymentsIcon}
              className="sidebar__menu__icon"
            />
            Un - Reconcilled Payments
          </Menu.Item>
          <Menu.Item key="5" className="sidebar__menu__item">
            <Icon
              component={ManualSettlementIcon}
              className="sidebar__menu__icon"
            />
            Manual Settlement
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g3" title="Orders">
          <Menu.Item key="6" className="sidebar__menu__item">
            <Icon component={AllOrdersIcon} className="sidebar__menu__icon" />
            All Orders
          </Menu.Item>
          <Menu.Item key="7" className="sidebar__menu__item">
            <Icon
              component={PendingOrdersIcon}
              className="sidebar__menu__icon"
            />
            Pending Orders
          </Menu.Item>
          <Menu.Item key="8" className="sidebar__menu__item">
            <Icon
              component={ReconciledOrdersIcon}
              className="sidebar__menu__icon"
            />
            Reconcilled Orders
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g4" title="">
          <Menu.Item key="9" className="sidebar__menu__item">
            <Icon component={MerchantIcon} className="sidebar__menu__icon" />
            Merchant Profile
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </Sider>
  );
};

export default SideBar;
