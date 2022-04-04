import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IArrayCard } from '../Form/Form';

export default class CardPage extends React.Component<IArrayCard> {
  constructor(props: IArrayCard) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }
  public render() {
    return (
      <Card sx={{ maxWidth: 345 }} data-testid="card">
        <CardMedia component="img" height="140" /* image={props.image} */ alt="img" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {this.props.newName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {this.props.newSurName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {this.props.newDatePicker}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {this.props.newCountry}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {this.props.newAgreeCheckBox}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {this.props.newGiftFirst}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {this.props.newGiftSecond}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {this.props.newGiftThird}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {this.props.newMaleFemale}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {this.props.newPromotionNotification}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
          {props.newImage}
        </Typography> */}
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}
