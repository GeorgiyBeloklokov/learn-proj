import React from 'react';
import Button from '@mui/material/Button';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IError404Props {}

const Error404: React.FunctionComponent<IError404Props> = (props) => {
  return (
    <div>
      <h1 style={{ color: 'red', fontSize: 100 }}>404</h1>
      <h3>Page Not Found</h3>
      <p>
        <Button>Go Home</Button>
      </p>
    </div>
  );
};

export default Error404;
