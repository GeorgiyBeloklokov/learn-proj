import { Grid } from '@mui/material';
import { mockCardDB } from '../assets/MockData';
import CardPage from '../CardPage/CardPage';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = () => {
  return (
    <Grid container spacing={3}>
      {mockCardDB.map((item) => (
        <Grid
          data-testid="card-num"
          key={item.id}
          sx={{ display: 'flex', justifyContent: 'space-between' }}
          xs={12}
          sm={6}
          md={4}
          lg={2}
          item
        >
          <CardPage surName={item.surName} name={item.name} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
