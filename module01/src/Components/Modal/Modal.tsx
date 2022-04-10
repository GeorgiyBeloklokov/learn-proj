import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { CharacterResponseType } from '../../Types/Types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default class ModalOne extends React.Component<CharacterResponseType> {
  constructor(props: CharacterResponseType) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={this.props.open}
          onClose={() => this.props.setState({ open: false })}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Box sx={style}>
            <Button
              sx={{ position: 'absolute', top: '1%', left: '88%' }}
              onClick={() => this.props.setState({ open: false })}
            >
              X
            </Button>
            <CardMedia
              data-testid="card"
              component="img"
              alt="image"
              height="280"
              image={this.props.image}
            />
            <Typography color="primary" gutterBottom variant="body2" component="div">
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
          </Box>
        </Modal>
      </div>
    );
  }
}
