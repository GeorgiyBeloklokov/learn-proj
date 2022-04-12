import React, { FC, useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import CardPage from '../CardPage/CardPage';
import { CharacterResponseType } from '../../Types/Types';
import { IAppState } from '../../App';
import { characterAPI } from '../ApiService/ApiService';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import axios from 'axios';
export interface IHomeProps {
  setState: React.Dispatch<React.SetStateAction<IAppState>>;
  isSearchInputData: boolean;
}
/* export interface IHomeState {
  allCardsData: Array<CharacterResponseType>;
  error: boolean;
  loading: boolean;
} */
const Home: FC<IHomeProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [allCardsData, setAllCardsData] = useState<Array<CharacterResponseType>>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    secondFetchCards();
    fetchCards();
  }, [props.isSearchInputData]);
  async function fetchCards() {
    try {
      const res = await characterAPI.getDefaultCharacter(); // for test:  const res = await axios.get('response');
      setAllCardsData([...allCardsData, ...res]); // for test: newData: [...state.newData, ...res.data],
      setIsLoading(false);
      console.log(`test1 isSearchInputData:`, props.isSearchInputData);
      /* if (props.isSearchInputData) {
        const res = await characterAPI.getCharacter();
        props.setState({ isSearchInputData: false });
        setAllCardsData([...res, ...allCardsData]);
      } */
    } catch (error) {
      setIsError(true);
    }
  }

  async function secondFetchCards() {
    console.log(`test2 isSearchInputData:`, props.isSearchInputData);
    if (props.isSearchInputData) {
      const res = await characterAPI.getCharacter();
      props.setState({ isSearchInputData: false });
      setAllCardsData([...res, ...allCardsData]);
    }
  }

  return (
    <Grid container spacing={3}>
      <Typography
        sx={{ position: 'absolute', ml: 95, mt: 3 }}
        color="primary"
        gutterBottom
        variant="h6"
        component="div"
      >
        Enter word &quot;Character&quot; in Search and press &quot;Enter&quot;
      </Typography>
      {isLoading && (
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
      {allCardsData.map((item) => (
        <Grid
          key={item.id}
          sx={{ ml: 4, mt: 10, display: 'flex', justifyContent: 'space-between' }}
          xs={12}
          sm={6}
          md={4}
          lg={2}
          item
        >
          <CardPage
            key={item.id}
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
            setState={function (): void {
              ('Function not implemented.');
            }}
            open={false}
          />
        </Grid>
      ))}
    </Grid>
  );
};
export default Home;
