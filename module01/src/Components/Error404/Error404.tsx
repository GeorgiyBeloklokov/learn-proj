import Button from '@mui/material/Button';
import * as React from 'react';

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
      <div style={{ marginLeft: 550 }}>
        <h1 style={{ color: 'red', fontSize: 100 }}>Error404</h1>
        <h3>Page Not Found</h3>
        <p>
          <Button>Go Home</Button>
        </p>
      </div>
    );
  }
}
