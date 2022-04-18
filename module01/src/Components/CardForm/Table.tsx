import Typography from '@mui/material/Typography';
import { ITableProps } from '../../Types/Interfaces';

export default function Table(props: ITableProps) {
  const isAgree = props.agreeCheckBox ? 'yes' : 'no';
  const isGiftFirst = props.giftFirst ? 'yes' : 'no';
  const isGiftSecond = props.giftSecond ? 'yes' : 'no';
  const isGiftThird = props.giftThird ? 'yes' : 'no';
  const isFemaleMale = props.maleFemale ? 'Male' : 'Female';
  const isNotificationPromotion = props.promotionNotification ? 'yes' : 'no';
  return (
    <>
      <Typography color="primary" gutterBottom variant="body2" component="div">
        Name: {props.firstName}
      </Typography>
      <Typography gutterBottom variant="body2" component="div">
        Surname: {props.surname}
      </Typography>
      <Typography color="primary" gutterBottom variant="body2" component="div">
        Date: {props.muiDatePicker}
      </Typography>
      <Typography gutterBottom variant="body2" component="div">
        Country: {props.country}
      </Typography>
      <Typography color="primary" gutterBottom variant="body2" component="div">
        Agree :{isAgree}
      </Typography>
      <Typography gutterBottom variant="body2" component="div">
        First Gift: {isGiftFirst}
      </Typography>
      <Typography color="primary" gutterBottom variant="body2" component="div">
        Second Gift: {isGiftSecond}
      </Typography>
      <Typography gutterBottom variant="body2" component="div">
        Third Gift: {isGiftThird}
      </Typography>
      <Typography color="primary" gutterBottom variant="body2" component="div">
        Gender: {isFemaleMale}
      </Typography>
      <Typography gutterBottom variant="body2" component="div">
        Promotion: {isNotificationPromotion}
      </Typography>
    </>
  );
}
