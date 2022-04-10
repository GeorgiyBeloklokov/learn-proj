import React from 'react';
import { Grid, Typography } from '@mui/material';
import CardPage from '../CardPage/CardPage';
import { CharacterResponseType } from '../../Types/Types';
import { IAppState } from '../../App';
import { characterAPI } from '../ApiService/ApiService';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export interface IHomeProps {
  setState: React.Dispatch<React.SetStateAction<IAppState>>;
  searchInputData: boolean;
}
export interface IHomeState {
  newData: Array<CharacterResponseType>;
  error: boolean;
  loading: boolean;
}

export default class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);

    this.state = {
      newData: [],
      error: false,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const res = await characterAPI.getDefaultCharacter();
      this.setState((state) => {
        return {
          newData: [...state.newData, ...res],
          loading: false,
        };
      });
    } catch (error) {
      this.setState({ error: true, loading: true });
    }
  }

  data = async () => {
    try {
      if (this.props.searchInputData) {
        const res = await characterAPI.getCharacter();
        /* console.log(`test data`, res); */
        this.props.setState({ searchInputData: false });
        this.setState((state) => {
          return {
            newData: [...res, ...state.newData],
            loading: false,
          };
        });
      }
    } catch (error) {
      this.props.setState({ searchInputData: false });
      this.setState({ error: true, loading: true });
    }
  };

  public render() {
    this.data();
    return (
      <Grid container spacing={3}>
        <Typography
          sx={{ position: 'absolute', ml: 95, mt: 3 }}
          color="primary"
          gutterBottom
          variant="h6"
          component="div"
        >
          Enter word &quot;Character&quot; in Search and press &quot;Enter&quot;
        </Typography>
        {this.state.loading && (
          <>
            <Box sx={{ display: 'flex', position: 'absolute', ml: 45, mt: 5 }}>
              <CircularProgress />
            </Box>
            <Typography
              sx={{ position: 'absolute', ml: 55, mt: 4 }}
              color="error"
              gutterBottom
              variant="h4"
              component="div"
            >
              Some error ocurred
            </Typography>
          </>
        )}
        {this.state.newData.map((item) => (
          <Grid
            key={item.id}
            sx={{ ml: 4, mt: 10, display: 'flex', justifyContent: 'space-between' }}
            xs={12}
            sm={6}
            md={4}
            lg={2}
            item
          >
            <CardPage
              data-testid="card-num"
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              status={item.status}
              species={item.species}
              type={item.type}
              gender={item.gender}
              origin={item.origin}
              location={item.location}
              url={item.url}
              created={item.created}
              setState={function (): void {
                ('Function not implemented.');
              }}
              open={false}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}
