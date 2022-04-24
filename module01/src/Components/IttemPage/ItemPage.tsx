import { FC, useContext, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { AppContext } from '../../fakeRedux/context';
import { characterAPI } from '../ApiService/ApiService';
import { Types } from '../../fakeRedux/reducers';
import CardMedia from '@mui/material/CardMedia';
import { useParams } from 'react-router-dom';
import { resolve } from 'path/win32';
import { StarRate } from '@mui/icons-material';
import { CardType } from '../../Types/Types';

const ItemPage: FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const { id } = useParams<{ id?: string }>();
  const [itemState, setItemState] = useState<CardType>();

  console.log(`test state22222eee`, state);

  useEffect(() => {
    fetchCards();
  }, []);

  async function fetchCards() {
    try {
      const res = await characterAPI.getByIdCharacter(id);
      console.log(`test getByIdCharacter`, res);
      /* setItemState(res); */
      dispatch({
        type: Types.SetItem,
        payload: res,
      });
      /* dispatch({
        type: Types.isLoading,
        payload: false,
      });
      dispatch({
        type: Types.Toggle,
        payload: false,
      }); */
    } catch (error) {}
  }

  return (
    <Box
      data-testid="about-us-test"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 800,
          height: 750,
        },
      }}
    >
      <CardMedia component="img" alt="image" height="280" image={state.SetItem.image} />
      <div>helooooo</div>
      {/* <Typography
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          fontSize: 25,
          ml: 15,
          mt: 10,
        }}
        color="primary"
        gutterBottom
        variant="body2"
        component="div"
      >
        Id: {state.cards.id}
        <br />
        Name: {state.cards.name}
        <br />
        Status: {state.cards.status}
        <br />
        Species: {state.cards.species}
        <br />
        Type: {state.cards.type}
        <br />
        Gender: {state.cards.gender}
        <br />
        Origin Name: {state.cards.origin.name}
        <br />
        Origin URL: {state.cards.origin.url}
        <br />
        Location Name: {state.cards.location.name}
        <br />
        Location URL: {state.cards.location.url}
        <br />
        Url: {state.cards.url}
        <br />
        Created: {state.cards.created}
      </Typography> */}
    </Box>
  );
};
export default ItemPage;
