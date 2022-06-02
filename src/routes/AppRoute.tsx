import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import NotFound from 'common/pages/404/NotFound';
import ROUTES from 'constants/routes';
import LoginLoadable from 'features/auth/login/LoginLoadable';
import DashboardLoadable from 'features/dashboard/DashboardLoadable';
import withAuthHoc from 'hoc/auth/AppAuthHoc';
import withNoAuthHoc from 'hoc/auth/AppNoAuthHoc';

function AppRoute(): JSX.Element {
  return (
    <Routes>
      {/* without auth (open) routes */}
      <Route path={ROUTES.HOME} element={<Navigate replace to={ROUTES.AUTH.LOGIN} />} />
      <Route path={ROUTES.AUTH.LOGIN} element={withNoAuthHoc(LoginLoadable)} />
      {/* user routes */}
      <Route path={ROUTES.USER.DASHBOARD} element={withAuthHoc(DashboardLoadable)} />
      {/* not found route */}
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}

export default AppRoute;
