import React from 'react';
import { Grid } from '@mui/material';
/* import { mockCardDB } from '../assets/MockData'; */
import CardPage from '../CardPage/CardPage';
import { CharacterResponseType } from '../../Types/Types';
import { IAppState } from '../../App';
import { characterAPI } from '../ApiService/ApiService';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
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

  componentDidMount() {
    characterAPI.getDefaultCharacter().then((res) => {
      console.log(`test data default`, res);
      this.setState((state) => {
        return {
          newData: [...state.newData, ...res],
        };
      });
    });
  }

  data = async () => {
    if (this.props.searchInputData) {
      characterAPI.getCharacter().then((res) => {
        console.log(`test data`, res);
        this.props.setState({ searchInputData: false });
        this.setState((state) => {
          return {
            newData: [...res, ...state.newData],
          };
        });
      });
    }
  };

  public render() {
    this.data();
    return (
      <Grid container spacing={3}>
        {this.state.newData.map((item) => (
          <Grid
            data-testid="card-num"
            key={item.id}
            sx={{ ml: 4, mt: 3, display: 'flex', justifyContent: 'space-between' }}
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
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}
