import React from 'react';

import { Box, CircularProgress } from '@mui/material';

function PageLoader(): JSX.Element {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress color='primary' size='2rem' />
    </Box>
  );
}

export default PageLoader;
