import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ClockPage from './routes/ClockPage';
import MenuPage from './routes/MenuPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/Clock" exact component={ClockPage} />
        <Route path="/Menu" exact component={MenuPage}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
