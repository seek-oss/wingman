import 'braid-design-system/reset';

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { AdminPage } from '../pages/Admin/Admin';
import { CandidateDetailPage } from '../pages/Candidates/Detail';
import { CandidateListPage } from '../pages/Candidates/List';
import { OopsPage } from '../pages/Oops';
import { PositionDetailPage } from '../pages/Positions/Detail';
import { PositionListPage } from '../pages/Positions/List';
import { PositionNewPage } from '../pages/Positions/New';
import { PositionQuestionnairePage } from '../pages/Positions/Questionnaires';

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
    <Route exact path="/positions">
      <PositionListPage />
    </Route>
    <Route exact path="/positions/detail/:id">
      <PositionDetailPage />
    </Route>
    <Route exact path="/positions/new">
      <PositionNewPage />
    </Route>
    <Route exact path="/positions/questionnaires">
      <PositionQuestionnairePage />
    </Route>

    <Route path="/storybook">
      <Redirect to="https://seek-oss.github.io/wingman/storybook/index.html" />
    </Route>
    <Route path="*">
      <OopsPage />
    </Route>
  </Switch>
);
