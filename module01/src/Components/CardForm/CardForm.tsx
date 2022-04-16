import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IFormInput } from '../Form/Formtwo';

export default class CardForm extends React.Component<IFormInput> {
  constructor(props: IFormInput) {
    super(props);
    this.state = {};
  }
  public render() {
    return (
      <Card sx={{ mb: 7, maxWidth: 300 }}>
        <CardMedia
          data-testid="card"
          component="img"
          alt="green iguana"
          height="140"
          image={this.props.image}
        />
        <CardContent>
          <Typography color="primary" gutterBottom variant="body2" component="div">
            Name: {this.props.firstName}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Surname: {this.props.surname}
          </Typography>
          <Typography color="primary" gutterBottom variant="body2" component="div">
            Date: {this.props.muiDatePicker}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Country: {this.props.agreeCheckBox}
          </Typography>
          <Typography color="primary" gutterBottom variant="body2" component="div">
            Agree :{this.props.agreeCheckBox}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            First Gift: {this.props.giftFirst}
          </Typography>
          <Typography color="primary" gutterBottom variant="body2" component="div">
            Second Gift: {this.props.giftSecond}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Third Gift: {this.props.giftThird}
          </Typography>
          <Typography color="primary" gutterBottom variant="body2" component="div">
            Gender: {this.props.maleFemale}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Promotion: {this.props.promotionNotification}
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
