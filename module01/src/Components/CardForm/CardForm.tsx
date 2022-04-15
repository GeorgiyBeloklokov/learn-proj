import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IFormInput } from '../Form/FormTwo';

export default class CardForm extends React.Component<IFormInput> {
  constructor(props: IFormInput) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }
  public render() {
    return (
      <Card sx={{ mb: 7, maxWidth: 300 }}>
        <CardMedia
          data-testid="card"
          component="img"
          alt="green iguana"
          height="140"
          image="https://www.russiadiscovery.ru/upload/files/files/Kavkazskie_gory.jpg"
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
            Agree :{this.props.agreeCheckBox ? ' in order' : 'out of order'}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            First Gift: {this.props.giftFirst ? 'in order' : 'out of order'}
          </Typography>
          <Typography color="primary" gutterBottom variant="body2" component="div">
            Second Gift: {this.props.giftSecond ? 'in order' : 'out of order'}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Third Gift: {this.props.giftThird ? 'in order' : 'out of order'}
          </Typography>
          <Typography color="primary" gutterBottom variant="body2" component="div">
            Gender: {this.props.maleFemale ? 'in order' : 'out of order'}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Promotion: {this.props.promotionNotification ? 'in order' : 'out of order'}
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
