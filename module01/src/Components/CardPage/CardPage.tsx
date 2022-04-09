import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IArrayCard } from '../Form/Form';
import { characterAPI } from '../ApiService/ApiService';

export default class CardPage extends React.Component<IArrayCard> {
  constructor(props: IArrayCard) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  /*  async componentDidMount() {
    const data = await characterAPI.getCharacter();
    console.log(`test data`, data);
  } */
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
            Name: {this.props.newName}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Surname: {this.props.newSurName}
          </Typography>
          <Typography color="primary" gutterBottom variant="body2" component="div">
            Date: {this.props.newDatePicker}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Country: {this.props.newCountry}
          </Typography>
          <Typography color="primary" gutterBottom variant="body2" component="div">
            Agree :{this.props.newAgreeCheckBox ? ' in order' : 'out of order'}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            First Gift: {this.props.newGiftFirst ? 'in order' : 'out of order'}
          </Typography>
          <Typography color="primary" gutterBottom variant="body2" component="div">
            Second Gift: {this.props.newGiftSecond ? 'in order' : 'out of order'}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Third Gift: {this.props.newGiftThird ? 'in order' : 'out of order'}
          </Typography>
          <Typography color="primary" gutterBottom variant="body2" component="div">
            Gender: {this.props.newMaleFemale ? 'in order' : 'out of order'}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Promotion: {this.props.newPromotionNotification ? 'in order' : 'out of order'}
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
