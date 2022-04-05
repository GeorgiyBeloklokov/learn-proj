import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAboutUsProps {}

export default class AboutUs extends React.Component<IAboutUsProps> {
  constructor(props: IAboutUsProps) {
    super(props);

    this.state = {};
  }
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
