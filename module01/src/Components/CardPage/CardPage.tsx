import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalFirst from '../ModalFirst/ModalFirst';
import { ICardPageProps } from '../../Types/Interfaces';

export interface ICardPageState {
  open: boolean;
}
export default class CardPage extends React.Component<ICardPageProps, ICardPageState> {
  constructor(props: ICardPageProps) {
    super(props);
    this.state = {
      open: false,
    };
    this.setState = this.setState.bind(this);
  }

  public render() {
    return (
      <Card sx={{ mb: 7, maxWidth: 300, maxHeight: 230 }}>
        <ModalFirst
          image={this.props.image}
          setState={this.setState}
          open={this.state.open}
          id={this.props.id}
          name={this.props.name}
          status={this.props.status}
          type={this.props.type}
          gender={this.props.gender}
          species={this.props.species}
          origin={this.props.origin}
          location={this.props.location}
          url={this.props.url}
          created={this.props.created}
        />
        <CardMedia
          data-testid="card-home"
          component="img"
          alt="green iguana"
          height="180"
          image={this.props.image}
        />
        <Button onClick={() => this.setState({ open: true })}>Show more...</Button>
      </Card>
    );
  }
}
