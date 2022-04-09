import React from 'react';
import { Grid } from '@mui/material';
import { mockCardDB } from '../assets/MockData';
import CardPage from '../CardPage/CardPage';
import { IArrayCard } from '../Form/Form';
import { characterAPI } from '../ApiService/ApiService';

export interface IHomeProps {
  searchInputData: boolean;
}

export default class Home extends React.Component<IHomeProps, IArrayCard> {
  constructor(props: IHomeProps) {
    super(props);

    this.state = {};
  }
  if(this.props.searchInputData) {
    const data = await characterAPI.getCharacter();
    console.log(`test data`, data);
  }

  public render() {
    return (
      <Grid container spacing={3}>
        {mockCardDB.map((item) => (
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
            <CardPage newSurName={item.newSurName} newName={item.newName} />
          </Grid>
        ))}
      </Grid>
    );
  }
}
