import React from 'react';
import { render } from 'react-dom';

import 'antd/dist/antd.css';
import './styles/base.scss';

import Dashboard from './containers/Dashboard';

const App = () => {
  return <Dashboard />;
};

render(<App />, document.getElementById('root'));
