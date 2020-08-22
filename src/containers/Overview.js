import React, { useState, useEffect } from 'react';

import statisticsData from '../dummy-data/statistics.json';
import paymentsData from '../dummy-data/payments.json';

import TransStatistics from './TransStatistics';
import Payments from './Payments';

import '../styles/containers/overview.scss';

const Overview = () => {
  const [statistics, setStatistics] = useState({});
  const [payments, setPayments] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setStatistics(statisticsData.data.transactions);
    setPayments(paymentsData.data);
  };

  return (
    <section className="overview">
      <TransStatistics statistics={statistics} />
      <div style={{ width: '100%', height: '329px', border: '1px solid peru' }}>
        graph
      </div>
      <Payments data={payments} />
    </section>
  );
};

export default Overview;
