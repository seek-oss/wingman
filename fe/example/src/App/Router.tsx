import 'braid-design-system/reset';

import React from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { AdminPage } from '../pages/Admin/Admin';
import { CandidateDetailPage } from '../pages/Candidates/Detail';
import { CandidateListPage } from '../pages/Candidates/List';
import { HomePage } from '../pages/Home';
import { OopsPage } from '../pages/Oops';
import { PositionDetailPage } from '../pages/Positions/Detail';
import { PositionListPage } from '../pages/Positions/List';
import { PositionNewPage } from '../pages/Positions/New';
import { PositionQuestionnairePage } from '../pages/Positions/Questionnaires';

export const Router = () => (
  <Routes>
    <Route element={<HomePage />} path="/" />
    <Route element={<AdminPage />} path="/admin" />
    <Route element={<CandidateListPage />} path="/candidates" />
    <Route element={<CandidateDetailPage />} path="/candidates/detail/:id" />
    <Route element={<PositionListPage />} path="/positions" />
    <Route element={<PositionDetailPage />} path="/positions/detail/:id" />
    <Route element={<PositionNewPage />} path="/positions/new" />
    <Route
      element={<PositionQuestionnairePage />}
      path="/positions/questionnaires"
    />

    <Route
      element={
        <Navigate
          replace
          to="https://seek-oss.github.io/wingman/storybook/index.html"
        />
      }
      path="/storybook"
    />

    <Route element={<OopsPage />} path="*" />
  </Routes>
);
