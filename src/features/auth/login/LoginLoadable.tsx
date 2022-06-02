import loadable from '@loadable/component';

import PageLoader from 'common/pages/PageLoader/PageLoader';

const LoginLoadable = loadable(() => import('./Login'), {
  fallback: <PageLoader />,
});

export default LoginLoadable;
