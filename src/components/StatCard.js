import React from 'react';

import StatImg from '../images/stat-img.png';

import '../styles/components/statcard.scss';

const StatCard = ({ title, value, isCurrency }) => {
  return (
    <div className="statcard">
      <div className="statcard__content">
        <h2 className="statcard__content-title">{title}</h2>
        <p className="statcard__content-value">
          {isCurrency ? <span>&#8358;{value}</span> : value}
        </p>
      </div>
      <img src={StatImg} alt="" />
    </div>
  );
};

export default StatCard;
