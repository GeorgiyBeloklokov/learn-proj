import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAppProps {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAppState {}

export default class Error404 extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <Box
        data-testid="error404-test"
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
        <div style={{ marginLeft: 550 }}>
          <h1 style={{ color: 'red', fontSize: 100 }}>Error404</h1>
          <h3>Page Not Found</h3>
          <p>{/* <Link to="/">Go Home</Link> */}</p>
        </div>
      </Box>
    );
  }
}
