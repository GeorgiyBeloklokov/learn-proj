import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default class AboutUs extends React.Component {
  public render() {
    return (
      <Box
        data-testid="about-us-test"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper elevation={0} />
        <Paper />
        <Paper elevation={3} />
      </Box>
    );
  }
}
