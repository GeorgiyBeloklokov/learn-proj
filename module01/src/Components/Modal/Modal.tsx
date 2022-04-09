import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IAppState } from '../../App';

export interface IModalProps {
  open: boolean;
  onClose: () => void;
  closeAfterTransition: boolean;
  BackdropComponent: boolean;
  setState: React.Dispatch<React.SetStateAction<IAppState>>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IModalState {}
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default class ModalOne extends React.Component<IModalProps, IModalState> {
  constructor(props: IModalProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div>
        {/* <Button onClick={() => this.setState({ open: true })}>Open modal</Button> */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={this.state.open}
          onClose={() => this.props.setState({ open: false })}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  }
}
