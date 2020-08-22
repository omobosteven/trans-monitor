import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import './styles/base.scss';

import Dashboard from './containers/Dashboard';
import Overview from './containers/Overview';

const root = (
  <Router>
    <Switch>
      <Dashboard>
        <Route exact path="/" component={Overview} />
      </Dashboard>
    </Switch>
  </Router>
);

render(root, document.getElementById('root'));
