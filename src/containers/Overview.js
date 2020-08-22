import React, { useState, useEffect } from 'react';

import statisticsData from '../dummy-data/statistics.json';
import TransStatistics from './TransStatistics';

import '../styles/containers/overview.scss';

const Overview = () => {
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    getStatistics();
  }, []);

  const getStatistics = () => {
    setStatistics(statisticsData.data.transactions);
  };

  return (
    <section className="overview">
      <TransStatistics statistics={statistics} />
    </section>
  );
};

export default Overview;
