import React, { useState, useEffect } from 'react';

import statisticsData from '../dummy-data/statistics.json';
import paymentsData from '../dummy-data/payments.json';
import analyticData from '../dummy-data/analytics.json';

import TransStatistics from './TransStatistics';
import Payments from './Payments';
import Analytics from './Analytics';

import '../styles/containers/overview.scss';

const Overview = () => {
  const [statistics, setStatistics] = useState({});
  const [payments, setPayments] = useState({});
  const [analytics, setAnalytics] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setStatistics(statisticsData.data.transactions);
    setPayments(paymentsData.data);
    setAnalytics(analyticData.data);
  };

  return (
    <section className="overview">
      <TransStatistics statistics={statistics} />
      <Analytics data={analytics} />
      <Payments data={payments} />
    </section>
  );
};

export default Overview;
