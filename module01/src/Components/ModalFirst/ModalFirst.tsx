import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { IForPrintProps, IModalFirstProps } from '../../Types/Interfaces';

interface IModalFirstState {
  forPrintProps: IForPrintProps[];
}

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

export default class ModalFirst extends React.Component<IModalFirstProps, IModalFirstState> {
  constructor(props: IModalFirstProps) {
    super(props);

    this.state = {
      forPrintProps: [
        {
          ...this.props,
        },
      ],
    };
  }
  setterIsOpen = () => this.props.setState({ open: false });

  public render() {
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={this.props.open}
          onClose={this.setterIsOpen}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Box data-testid="modal-first" sx={style}>
            <Button
              sx={{ position: 'absolute', top: '1%', left: '88%' }}
              onClick={this.setterIsOpen}
            >
              X
            </Button>
            <CardMedia component="img" alt="image" height="280" image={this.props.image} />
            {this.state.forPrintProps.map((item) => {
              return (
                <div key={item.id}>
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
                    Id: {item.id}
                    <br />
                    Name: {item.name}
                    <br />
                    Status: {item.status}
                    <br />
                    Species: {item.species}
                    <br />
                    Type: {item.type}
                    <br />
                    Gender: {item.gender}
                    <br />
                    Origin Name: {item.origin.name}
                    <br />
                    Origin URL: {item.origin.url}
                    <br />
                    Location Name: {item.location.name}
                    <br />
                    Location URL: {item.location.url}
                    <br />
                    Url: {item.url}
                    <br />
                    Created: {item.created}
                  </Typography>
                </div>
              );
            })}
          </Box>
        </Modal>
      </div>
    );
  }
}
