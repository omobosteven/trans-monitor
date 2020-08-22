import React from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from 'recharts';

import '../styles/containers/analytics.scss';

const Analytics = ({ data }) => {
  const { progress = {}, analytics = [] } = data;
  const { orders = {}, payments = {} } = progress || null;

  return (
    <section className="analytics">
      <div className="analytics-graph">
        <div className="analytics-graph-nav">
          <p>
            Today: <span>{moment().format('D, MMM YYYY')}</span>
          </p>

          <RangePicker />

          <div>
            <button className="nav-btn">
              <LeftOutlined />
            </button>
            <button className="nav-btn">
              <RightOutlined />
            </button>
          </div>
        </div>

        <AreaChart
          width={730}
          height={250}
          data={analytics}
          margin={{ top: 30, right: 30, left: 30, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0296ff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0296ff" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            mirror
            tick={<CustomXAxis />}
            orientation="top"
            axisLine={false}
            interval={4}
          />
          <YAxis hide />
          <CartesianGrid stroke="#CFE8FB" horizontal={false} />
          <Tooltip />
          <Area
            type="natural"
            dataKey="amt"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
            connectNulls={true}
          />
        </AreaChart>
      </div>
      <div className="analytics-progress">
        <div className="analytics-progress-orders">
          <h3 className="analytics-progress-title">Orders</h3>
          <div className="analytics-progress-bar">
            <span
              style={{
                width: `${orders.reconciledOrders}%`,
                backgroundColor: '#27AE60',
                borderRadius: '30px 0 0 30px',
              }}
            />
            <span
              style={{
                width: `${orders.pendingOrders}%`,
                backgroundColor: '#FDC203',
                borderRadius: '0 30px 30px 0',
              }}
            />
          </div>
          <p>
            Pending Orders:{' '}
            <span className="pending-value">{orders.pendingOrders}</span>
          </p>
          <p>
            Reconciled Orders:{' '}
            <span className="reconciled-value">{orders.reconciledOrders}</span>
          </p>
          <p>
            Total Orders:{' '}
            <span className="total-value">{orders.totalOrders}</span>
          </p>
        </div>
        <div className="analytics-progress-payments">
          <h3 className="analytics-progress-title">Payments</h3>
          <div className="analytics-progress-bar">
            <span
              style={{
                width: `${payments.reconciledPayments}%`,
                backgroundColor: '#27AE60',
                borderRadius: '30px 0 0 30px',
              }}
            />
            <span
              style={{
                width: `${payments.unReconciledPayments}%`,
                backgroundColor: '#FDC203',
                borderRadius: '0 30px 30px 0',
              }}
            />
          </div>
          <p>
            Un-reconciled Payments:{' '}
            <span className="pending-value">
              {payments.unReconciledPayments}
            </span>
          </p>
          <p>
            Reconciled Payments:{' '}
            <span className="reconciled-value">
              {payments.reconciledPayments}
            </span>
          </p>
          <p>
            Total Payments:{' '}
            <span className="total-value">{payments.totalPayments}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

function CustomXAxis({ x, y, stroke, payload }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        fontSize="14"
        x="0"
        y={0}
        width={100}
        textAnchor="start"
        stroke="#000000"
        fill="#666"
      >
        {moment(payload.value).format('MMM')}
      </text>
    </g>
  );
}

export default Analytics;
