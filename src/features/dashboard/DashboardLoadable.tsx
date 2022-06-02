import loadable from '@loadable/component';

import PageLoader from 'common/pages/PageLoader/PageLoader';

const DashboardLoadable = loadable(() => import('./Dashboard'), {
  fallback: <PageLoader />,
});

export default DashboardLoadable;
