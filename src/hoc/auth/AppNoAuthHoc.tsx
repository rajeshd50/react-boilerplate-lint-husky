import React from 'react';

import { Navigate } from 'react-router-dom';

import AppWrapper from 'app/app-wrapper/AppWrapper';
import ROUTES from 'constants/routes';
import { useAppSelector } from 'store/hooks';
import { selectIsUserLoggedIn } from 'store/reducers/userSlice';

const withNoAuthHocFun = <P extends object>(Component: React.ComponentType<P>) =>
  function WithAuthHoc(props: unknown): JSX.Element {
    const isLoggedIn = useAppSelector(selectIsUserLoggedIn);
    if (isLoggedIn) {
      return <Navigate to={ROUTES.USER.DASHBOARD} />;
    }
    return (
      <AppWrapper>
        <Component {...(props as P)} />
      </AppWrapper>
    );
  };

const withNoAuthHoc = (Component: React.ComponentType): JSX.Element => {
  const HocComponent = withNoAuthHocFun(Component);
  return <HocComponent />;
};

export default withNoAuthHoc;
