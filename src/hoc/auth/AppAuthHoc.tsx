import React from 'react';

import { Navigate } from 'react-router-dom';

import AppWrapper from 'app/app-wrapper/AppWrapper';
import ROUTES from 'constants/routes';
import { useAppSelector } from 'store/hooks';
import { selectIsUserLoggedIn } from 'store/reducers/userSlice';

const withAuthHocFun = <P extends object>(Component: React.ComponentType<P>) =>
  function WithAuthHoc(props: unknown): JSX.Element {
    const isLoggedIn = useAppSelector<boolean>(selectIsUserLoggedIn);
    if (!isLoggedIn) {
      return <Navigate to={ROUTES.AUTH.LOGIN} />;
    }
    return (
      <AppWrapper>
        <Component {...(props as P)} />
      </AppWrapper>
    );
  };

const withAuthHoc = (Component: React.ComponentType): JSX.Element => {
  const HocComponent = withAuthHocFun(Component);
  return <HocComponent />;
};

export default withAuthHoc;
