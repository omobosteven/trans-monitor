import React from 'react';

import '../styles/containers/analytics.scss';

const Analytics = ({ data }) => {
  const { progress = {}, analytics = {} } = data;
  const { orders = {}, payments = {} } = progress || null;

  return (
    <section className="analytics">
      <div className="analytics-graph">Graph!!!</div>
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

export default Analytics;
