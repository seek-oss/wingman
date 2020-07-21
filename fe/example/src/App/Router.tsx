import 'braid-design-system/reset';

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { AdminPage } from '../pages/Admin/Admin';
import { CandidateDetailPage } from '../pages/Candidates/Detail';
import { CandidateListPage } from '../pages/Candidates/List';
import { OopsPage } from '../pages/Oops';

export const Router = () => (
  <Switch>
    <Route exact path="/admin">
      <AdminPage />
    </Route>
    <Route exact path="/candidates">
      <CandidateListPage />
    </Route>
    <Route exact path="/candidates/detail/:id">
      <CandidateDetailPage />
    </Route>

    <Route path="/storybook">
      <Redirect to="https://seek-oss.github.io/wingman/storybook/index.html" />
    </Route>
    <Route path="*">
      <OopsPage />
    </Route>
  </Switch>
);
