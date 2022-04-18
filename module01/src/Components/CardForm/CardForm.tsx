import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IFormProps } from '../../Types/Interfaces';
import Table from './Table';

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
          <Table
            id={this.props.id}
            firstName={this.props.firstName}
            surname={this.props.surname}
            muiDatePicker={this.props.muiDatePicker}
            country={this.props.country}
            agreeCheckBox={this.props.agreeCheckBox}
            giftFirst={this.props.giftFirst}
            giftSecond={this.props.giftSecond}
            giftThird={this.props.giftThird}
            maleFemale={this.props.maleFemale}
            promotionNotification={this.props.promotionNotification}
          />
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}
