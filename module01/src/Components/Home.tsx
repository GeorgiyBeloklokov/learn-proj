import { Grid } from '@mui/material';
import * as React from 'react';
import { mockCardDB } from './assets/MockData';
import MediaCard from './Card';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IHomeProps {}

const HomePage: React.FunctionComponent<IHomeProps> = () => {
  return (
    <div>
      <Grid container spacing={3}>
        {mockCardDB.cards.map((card, index) => (
          <Grid
            key={card.id}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
            xs={12}
            sm={6}
            md={4}
            lg={2}
            item
          >
            <MediaCard /* card={card} index={index} loading={loading} */ />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
