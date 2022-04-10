import React from 'react';
import { Grid, Typography } from '@mui/material';
import CardPage from '../CardPage/CardPage';
import { CharacterResponseType } from '../../Types/Types';
import { IAppState } from '../../App';
import { characterAPI } from '../ApiService/ApiService';

export interface IHomeProps {
  setState: React.Dispatch<React.SetStateAction<IAppState>>;
  searchInputData: boolean;
}
export interface IHomeState {
  newData: Array<CharacterResponseType>;
}

export default class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);

    this.state = {
      newData: [],
    };
  }

  async componentDidMount() {
    const res = await characterAPI.getDefaultCharacter();
    /* console.log(`test data default`, res); */
    this.setState((state) => {
      return {
        newData: [...state.newData, ...res],
      };
    });
  }

  data = async () => {
    if (this.props.searchInputData) {
      const res = await characterAPI.getCharacter();
      /* console.log(`test data`, res); */
      this.props.setState({ searchInputData: false });
      this.setState((state) => {
        return {
          newData: [...res, ...state.newData],
        };
      });
    }
  };

  public render() {
    this.data();
    return (
      <Grid container spacing={3}>
        <Typography
          sx={{ position: 'absolute', ml: 95, mt: 3 }}
          color="error"
          gutterBottom
          variant="h6"
          component="div"
        >
          Enter word &quot;Character&quot; in Search and press &quot;Enter&quot;
        </Typography>
        {this.state.newData.map((item) => (
          <Grid
            data-testid="card-num"
            key={item.id}
            sx={{ ml: 4, mt: 5, display: 'flex', justifyContent: 'space-between' }}
            xs={12}
            sm={6}
            md={4}
            lg={2}
            item
          >
            <CardPage
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
