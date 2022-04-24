import { useContext, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { AppContext } from '../../fakeRedux/context';
import { characterAPI } from '../ApiService/ApiService';
import { Types } from '../../fakeRedux/reducers';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function MyPagination() {
  const [page, setPage] = useState(1);
  const { state, dispatch } = useContext(AppContext);
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1(event.target.checked);
  };
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2(event.target.checked);
  };

  const handleChange = async (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    const res = await characterAPI.getNextCharacter(page + 1);
    const res5 = res.results.slice(0, 5);
    const res10 = res.results.slice(0, 10);
    if (checked1) {
      dispatch({
        type: Types.Get,
        payload: res5,
      });
      console.log(`test pagination`, res);
    } else {
      dispatch({
        type: Types.Get,
        payload: res10,
      });
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Pagination count={10} page={page} onChange={handleChange} />
      <FormControlLabel
        label="5 items per page"
        control={
          <Checkbox
            sx={{ ml: 3 }}
            checked={checked1}
            inputProps={{ 'aria-label': 'controlled' }}
            onChange={handleChange1}
          />
        }
      />
      <FormControlLabel
        label="10 items per page"
        control={
          <Checkbox
            sx={{ ml: 3 }}
            checked={checked2}
            inputProps={{ 'aria-label': 'controlled' }}
            onChange={handleChange2}
          />
        }
      />
    </Box>
  );
}
