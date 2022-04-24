import { FC, useContext, useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import CardPage from '../CardPage/CardPage';
import { characterAPI } from '../ApiService/ApiService';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import axios from 'axios';
import { AppContext } from '../../fakeRedux/context';
import { Types } from '../../fakeRedux/reducers';
import ControlledCheckbox from './Checkbox';
import MyPagination from './MyPagination';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
/* export interface IHomeProps {
  isSearchInput: boolean;
}
 */
const Home: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [isError, setIsError] = useState<boolean>(false);
  const { state, dispatch } = useContext(AppContext);
  console.log(`test state Home:`, state);

  useEffect(() => {
    fetchCards();
  }, [state.isSearchInput]);

  async function fetchCards() {
    if (state.isSearchInput) {
      try {
        const res = await characterAPI.getMoreFiveCharacter();
        dispatch({
          type: Types.Get,
          payload: res,
        }); // (for run test replace whit:)  const res = await axios.get('response');
        /* setAllCardsData([...allCardsData, ...res]); */ // (for run test replace whit:)  [...allCardsData, ...res.data],
        dispatch({
          type: Types.isLoading,
          payload: false,
        });
        dispatch({
          type: Types.Toggle,
          payload: false,
        });
      } catch (error) {}
      setIsError(true);
    } else {
      const res = await characterAPI.getDefaultCharacter();
      /* console.log(`test res reducer`, res); */

      dispatch({
        type: Types.Get,
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
    }
  }

  return (
    <Grid container spacing={3}>
      <Typography
        sx={{ position: 'absolute', ml: 85, mt: 3 }}
        color="primary"
        gutterBottom
        variant="h6"
        component="div"
      >
        Enter word &quot;Character&quot; in Search and press &quot;Enter&quot;
      </Typography>

      <Box sx={{ display: 'flex', position: 'absolute', ml: 10, mt: 8 }}>
        <ControlledCheckbox label="Filtered bu Alive Male" status="alive" gender="male" />
        <ControlledCheckbox label="Filtered bu Dead Female" status="dead" gender="female" />
        <ControlledCheckbox label="Filtered bu Unknown Female" status="unknown" gender="female" />
        <ControlledCheckbox label="Filtered bu Unknown Male" status="unknown" gender="male" />
      </Box>
      <Box sx={{ display: 'flex', position: 'absolute', ml: 12, mt: 15 }}>
        <MyPagination />
      </Box>

      {state.isLoading && (
        <>
          <Box sx={{ display: 'flex', position: 'absolute', ml: 45, mt: 5 }}>
            <CircularProgress />
          </Box>
          <Typography
            sx={{ position: 'absolute', ml: 55, mt: 4 }}
            color="error"
            gutterBottom
            variant="h4"
            component="div"
          >
            Some error ocurred
          </Typography>
        </>
      )}
      {state.cards.map((item) => (
        <Grid
          key={item.id}
          sx={{
            ml: 4,
            mt: 18,
            display: 'flex',
            justifyContent: 'space-between',
          }}
          xs={12}
          sm={6}
          md={4}
          lg={2}
          item
        >
          <CardPage
            id={item.id}
            name={item.name}
            image={item.image}
            status={item.status}
            species={item.species}
            type={item.type}
            gender={item.gender}
            origin={item.origin}
            location={item.location}
            url={item.url}
            created={item.created}
          />
        </Grid>
      ))}
    </Grid>
  );
};
export default Home;
