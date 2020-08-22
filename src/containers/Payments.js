import React, { useState, useEffect } from 'react';
import Icon, { DownOutlined } from '@ant-design/icons';
import { Table, Select, Input } from 'antd';

import '../styles/containers/payments.scss';
import SearchIcon from '../images/search-icon.svg';

const { Option } = Select;

const Payments = ({ data }) => {
  const [pagination, setPagination] = useState({});
  const { paginationMeta = {}, payments = [] } = data;

  useEffect(() => {
    setPagination({
      total: paginationMeta.totalCount,
      showSizeChanger: false,
      showTotal: (total, range) =>
        `Showing ${range[0]} to ${range[1]} of ${total} entries`,
      itemRender: itemRender,
    });
  }, [paginationMeta]);

  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  };

  const columns = [
    {
      title: 'Item Type',
      dataIndex: 'item',
      render: (value) => {
        return (
          <>
            <span className="item-image">VW</span>
            <span className="item-name">{value}</span>
          </>
        );
      },
    },
    {
      title: 'Price',
      dataIndex: 'price',
      render: (value) => {
        return <span>&#36;{value}</span>;
      },
    },
    {
      title: 'Transaction No',
      dataIndex: 'transaction_no',
    },
    {
      title: 'Time',
      dataIndex: 'time',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (value) => {
        return (
          <span className={`status status-${value.toLowerCase()}`}>
            {value}
          </span>
        );
      },
    },
    {
      title: '',
      key: 'action',
      render: () => {
        return (
          <span>
            <DownOutlined />
          </span>
        );
      },
    },
  ];

  return (
    <section className="payments">
      <h2 className="payments__title">Payments</h2>
      <div className="payments__table-filters">
        <div className="data-filter">
          <span>Showing</span>
          <Select defaultValue={20} bordered={false}>
            <Option value={10}>10</Option>
            <Option value={20}>20</Option>
            <Option value={30}>30</Option>
          </Select>
          <span>out of 500 payments</span>
        </div>
        <div className="data-search">
          <Input
            placeholder="Search payments"
            prefix={<Icon component={SearchIcon} />}
            bordered={false}
          />
        </div>
        <div className="status-filter">
          <span>Show</span>
          <Select defaultValue="all">
            <Option value="all">All</Option>
            <Option value="reconciled">Reconciled</Option>
            <Option value="un-reconciled">Un-reconciled</Option>
            <Option value="settled">Settled</Option>
            <Option value="unsettled">Unsettled</Option>
          </Select>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={payments}
        pagination={pagination}
        rowKey={(record) => record.id}
        className="payments-table"
      />
    </section>
  );
};

export default Payments;
