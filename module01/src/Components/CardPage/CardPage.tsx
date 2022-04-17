import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CharacterResponseType } from '../../Types/Types';
import ModalFirst from '../ModalFirst/ModalFirst';

export interface ICardPageState {
  open: boolean;
}
export default class CardPage extends React.Component<CharacterResponseType, ICardPageState> {
  constructor(props: CharacterResponseType) {
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
        <CardMedia component="img" alt="green iguana" height="180" image={this.props.image} />
        <Button onClick={() => this.setState({ open: true })}>Show more...</Button>
        <CardContent>
          <Typography
            data-testid="card"
            color="primary"
            gutterBottom
            variant="body2"
            component="div"
          >
            Id: {this.props.id}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Name: {this.props.name}
          </Typography>
          <Typography color="primary" gutterBottom variant="body2" component="div">
            Status: {this.props.status}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Species: {this.props.species}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Type: {this.props.type}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Gender: {this.props.gender}
          </Typography>
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
            color="primary"
            gutterBottom
            variant="body2"
            component="div"
          >
            Origin Name: {this.props.origin.name}
          </Typography>
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
            color="primary"
            gutterBottom
            variant="body2"
            component="div"
          >
            Origin URL: {this.props.origin.url}
          </Typography>
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
            gutterBottom
            variant="body2"
            component="div"
          >
            Location Name: {this.props.location.name}
          </Typography>
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
            gutterBottom
            variant="body2"
            component="div"
          >
            Location URL: {this.props.location.url}
          </Typography>
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
            color="primary"
            gutterBottom
            variant="body2"
            component="div"
          >
            Url: {this.props.url}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Created: {this.props.created}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}
