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

  console.log(`test id params`, id);
  const actualData = state?.cards?.[id];

  console.log(`test stateItemPage`, state.cards?.[id]);

  /*   useEffect(() => {
    fetchCards();
  }, []);

  async function fetchCards() {
    try {
      const res = await characterAPI.getByIdCharacter(id);
      console.log(`test getByIdCharacter`, res);
      setItemState(res);
      dispatch({
        type: Types.SetItem,
        payload: res,
      });
      dispatch({
        type: Types.isLoading,
        payload: false,
      });
      dispatch({
        type: Types.Toggle,
        payload: false,
      });
    } catch (error) {}
  } */

  return (
    <Box
      data-testid="about-us-test"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 250,
          height: 450,
        },
      }}
    >
      <CardMedia component="img" alt="image" height="180" image={actualData.image} />
      <Typography
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          fontSize: 15,
          ml: 15,
          mt: 10,
        }}
        color="primary"
        gutterBottom
        variant="body2"
        component="div"
      >
        Id: {actualData.id}
        <br />
        Name: {actualData.name}
        <br />
        Status: {actualData.status}
        <br />
        Species: {actualData.species}
        <br />
        Type: {actualData.type}
        <br />
        Gender: {actualData.gender}
        <br />
        Origin Name: {actualData.origin.name}
        <br />
        Origin URL: {actualData.origin.url}
        <br />
        Location Name: {actualData.location.name}
        <br />
        Location URL: {actualData.location.url}
        <br />
        Url: {actualData.url}
        <br />
        Created: {actualData.created}
      </Typography>
    </Box>
  );
};
export default ItemPage;
