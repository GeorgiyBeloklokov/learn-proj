import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export interface IFormProps {
  id: number;
  firstName: string;
  surname: string;
  muiDatePicker: string;
  country: string;
  agreeCheckBox: boolean;
  giftFirst: boolean;
  giftSecond: boolean;
  giftThird: boolean;
  maleFemale: boolean;
  promotionNotification: boolean;
  image: File | null;
}

export default class CardForm extends React.Component<IFormProps> {
  constructor(props: IFormProps) {
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
          image="https://moya-planeta.ru/upload/images/xl/95/fe/95fe44d0e5fe53e49d874f9c2e07381ca8ea823a.jpg"
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
            Country: {this.props.country}
          </Typography>
          <Typography color="primary" gutterBottom variant="body2" component="div">
            Agree :{this.props.agreeCheckBox ? 'yes' : 'no'}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            First Gift: {this.props.giftFirst ? 'yes' : 'no'}
          </Typography>
          <Typography color="primary" gutterBottom variant="body2" component="div">
            Second Gift: {this.props.giftSecond ? 'yes' : 'no'}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Third Gift: {this.props.giftThird ? 'yes' : 'no'}
          </Typography>
          <Typography color="primary" gutterBottom variant="body2" component="div">
            Gender: {this.props.maleFemale ? 'Male' : 'Female'}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Promotion: {this.props.promotionNotification ? 'yes' : 'no'}
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
