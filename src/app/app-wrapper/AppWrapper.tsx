import React from 'react';

import { Box } from '@mui/material';

/**
 * app wrapper contains sidebar/header common for all pages etc
 * can have logic based on user login status
 */
function AppWrapper({ children }: React.PropsWithChildren<unknown>): JSX.Element {
  return <Box>{children}</Box>;
}

export default AppWrapper;
