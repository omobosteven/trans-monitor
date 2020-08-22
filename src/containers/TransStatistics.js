import React from 'react';

import StatCard from '../components/StatCard';

import '../styles/containers/transstatistics.scss';

const TransStatistics = ({ statistics }) => {
  return (
    <div className="trans-statistics">
      <StatCard
        title="Daily Transaction Volume"
        value={statistics.dailyVolume}
        isCurrency={false}
      />
      <StatCard
        title="Daily Transaction Value"
        value={statistics.dailyValue}
        isCurrency={true}
      />
      <StatCard
        title="Total Transaction Volume"
        value={statistics.totalVolume}
        isCurrency={false}
      />
      <StatCard
        title="Total Transaction Value"
        value={statistics.totalValue}
        isCurrency={true}
      />
    </div>
  );
};

export default TransStatistics;
