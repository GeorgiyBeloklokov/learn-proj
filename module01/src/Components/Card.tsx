import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MediaCardPageProps {
  image: string;
  text: string;
}

const MediaCardPage: React.FunctionComponent<MediaCardPageProps> = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }} data-testid="card">
      <CardMedia component="img" height="140" image={props.image} alt="img" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default MediaCardPage;
