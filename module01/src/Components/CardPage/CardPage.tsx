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
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          data-testid="card"
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {this.props.newName}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {this.props.newSurName}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {this.props.newDatePicker}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {this.props.newCountry}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {this.props.newAgreeCheckBox
              ? 'newAgreeCheckBox: order'
              : 'newAgreeCheckBox: out of order'}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {this.props.newGiftFirst ? 'newGiftFirst: in order' : 'newGiftFirst: out of order'}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {this.props.newGiftSecond ? 'newGiftSecond: in order' : 'newGiftSecond: out of order'}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {this.props.newGiftThird ? 'newGiftThird: in order' : 'newGiftThird: out of order'}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {this.props.newMaleFemale ? 'newMaleFemale: in order' : 'newMaleFemale: out of order'}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {this.props.newPromotionNotification
              ? 'newPromotionNotification: in order'
              : 'newPromotionNotification: out of order'}
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
