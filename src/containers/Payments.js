import React, { useState, useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Table } from 'antd';

import '../styles/containers/payments.scss';

const Payments = ({ data }) => {
  const [pagination, setPagination] = useState({});
  const { paginationMeta = {}, payments = [] } = data;

  useEffect(() => {
    setPagination({
      total: paginationMeta.totalCount,
      showSizeChanger: false,
      showTotal: (total, range) =>
        `Showing ${range[0]}-${range[1]} of ${total} entries`,
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
      <Table
        columns={columns}
        dataSource={payments}
        pagination={pagination}
        // loading={loading}
        rowKey={(record) => record.id}
        className="payments-table"
      />
    </section>
  );
};

export default Payments;
