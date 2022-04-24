import { Children, useContext, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { AppContext } from '../../fakeRedux/context';
import { characterAPI } from '../ApiService/ApiService';
import { Types } from '../../fakeRedux/reducers';
type Props = {
  /* children: React.ReactNode; */
  label: string;
  status: string;
  gender: string;
};

const ControlledCheckbox = (props: Props) => {
  const [checked, setChecked] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      const res = await characterAPI.getFilteredCharacter(props.status, props.gender);
      dispatch({
        type: Types.Get,
        payload: res.results,
      });
    }
  };

  return (
    <FormControlLabel
      label={props.label}
      control={
        <Checkbox
          checked={checked}
          inputProps={{ 'aria-label': 'controlled' }}
          onChange={handleChange}
        />
      }
    />
  );
};
export default ControlledCheckbox;
