import React, { FC, useEffect, useState } from 'react';
import { TextField, Box, Button, FormHelperText } from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import CardForm from '../CardForm/CardForm';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { IAppState } from '../../App';
const fakeState = [
  {
    firstName: 'jhon',
    surname: 'bee',
    muiDatePicker: null,
    country: 'germay',
    agreeCheckBox: true,
    giftFirst: false,
    giftSecond: false,
    giftThird: true,
    maleFemale: false,
    promotionNotification: false,
    image: null,
  },
];

const CheckBoxes = [
  {
    name: 'agreeCheckBox',
    required: 'Please agree to data processing',
    label: 'Agree to data processing',
  },
  {
    name: 'giftFirst',
    required: 'Please agree to data processing',
    label: 'Agree to someone gift',
  },
];

export interface IHomeProps {
  setState: React.Dispatch<React.SetStateAction<IAppState>>;
  isSearchInputData: boolean;
  error: boolean;
}
/* export interface IHomeState {
  allCardsData: Array<CharacterResponseType>;
  error: boolean;
  loading: boolean;
} */

export interface IFormInput {
  firstName: string;
  surname: string;
  muiDatePicker: Date | null;
  country: string;
  agreeCheckBox: boolean;
  giftFirst: boolean;
  giftSecond: boolean;
  giftThird: boolean;
  maleFemale: boolean;
  promotionNotification: boolean;
  image: File | null;
}

/* Input = styled('input')({
  display: 'none',
}); */

const FormTwo: FC<IHomeProps> = (props) => {
  /* const [isLoading, setIsLoading] = useState<boolean>(true);*/
  const [isSavedForm, setIsSavedForm] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [state, setState] = useState<IFormInput[]>([]);

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  console.log(state);

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    setState([data]);
    setTimeout(() => {
      setIsSavedForm(false);
    }, 2300);
  };
  const Input = styled('input')({
    display: 'none',
  });
  const isFormValidSetter = () => {
    setIsFormValid(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        data-testid="form-test"
        sx={{ mt: 5, ml: 2, '& .MuiTextField-root': { m: 2, width: '25ch' } }}
      >
        <div>
          <TextField
            {...register('firstName', { required: 'Name is required', maxLength: 20 })}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName?.message}
            onBlur={isFormValidSetter}
            type="firstName"
            name="firstName"
            id="outlined-required"
            label="Name"
            placeholder="Your Name.."
          />
          <TextField
            {...register('surname', { required: 'Surname is required' })}
            error={Boolean(errors.surname)}
            helperText={errors.surname?.message}
            onBlur={isFormValidSetter}
            type="surname"
            name="surname"
            id="outlined-disabled"
            label="Surname"
            placeholder="Your Surname.."
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Controller
              name="muiDatePicker"
              control={control}
              defaultValue={null}
              rules={{ required: 'Date required' }}
              render={({ field }) => (
                <DatePicker
                  label="Date input"
                  value={field.value}
                  renderInput={(params) => (
                    <TextField
                      name="muiDatePicker"
                      {...params}
                      error={Boolean(errors.muiDatePicker)}
                      helperText={errors.muiDatePicker?.message}
                    />
                  )}
                  onChange={(e) => {
                    field.onChange(e);
                  }}
                />
              )}
            />
          </LocalizationProvider>
          <FormControl sx={{ mt: 2, ml: 2, width: '25ch' }} error={Boolean(errors.country)}>
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Controller
              name="country"
              control={control}
              defaultValue={''}
              rules={{ required: 'Select required' }}
              render={({ field }) => (
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={field.value}
                  label="Country"
                  name="country"
                  onChange={(e) => {
                    field.onChange(e);
                  }}
                >
                  <MenuItem value={'Spain'}>Spain</MenuItem>
                  <MenuItem value={'France'}>France</MenuItem>
                  <MenuItem value={'Germany'}>Germany</MenuItem>
                </Select>
              )}
            />
            <FormHelperText>{errors.country?.message}</FormHelperText>
          </FormControl>
          <FormGroup>
            <FormControl error={Boolean(errors.agreeCheckBox)}>
              <FormControlLabel
                control={
                  <Checkbox
                    {...register('agreeCheckBox', { required: 'Please agree to data processing' })}
                    name="agreeCheckBox"
                  />
                }
                label="Agree to data processing"
              />
              <FormHelperText>{errors.agreeCheckBox?.message}</FormHelperText>
            </FormControl>
            <FormControlLabel
              control={<Checkbox {...register('giftFirst')} name="giftFirst" />}
              label="Gift first"
            />
            <FormControlLabel
              control={<Checkbox {...register('giftSecond')} name="giftSecond" />}
              label="Gift second"
            />
            <FormControlLabel
              control={<Checkbox {...register('giftThird')} name="giftThird" />}
              label="Gift third"
            />
          </FormGroup>
          <FormControlLabel
            control={<Switch {...register('maleFemale')} name="maleFemale" />}
            label="Male/Female"
          />
          <FormControlLabel
            control={
              <Switch
                {...register('promotionNotification')}
                defaultChecked
                name="promotionNotification"
              />
            }
            label="Promotion notifications"
          />
        </div>
        <div>
          <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple type="file" name="image" />
            <Button sx={{ mt: 3 }} variant="contained" component="span">
              Upload profile picture
            </Button>
          </label>
          <div>
            <Button
              disabled={!isFormValid}
              id="button"
              variant="contained"
              type="submit"
              sx={{ mt: 3 }}
            >
              Submit form data
            </Button>
            {isSavedForm && <div style={{ color: 'red', fontSize: 30 }}>Your data is saved</div>}
          </div>
        </div>
        {console.log(`test state:`, state)}
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {state.map((item) => (
            <Grid
              data-testid="card-num-form"
              key={item.surname}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
              xs={12}
              sm={6}
              md={4}
              lg={2}
              item
            >
              <CardForm
                firstName={item.firstName}
                surname={item.surname}
                muiDatePicker={item.muiDatePicker}
                country={item.country}
                agreeCheckBox={item.agreeCheckBox}
                giftFirst={item.giftFirst}
                giftSecond={item.giftSecond}
                giftThird={item.giftThird}
                maleFemale={item.maleFemale}
                promotionNotification={item.promotionNotification}
                image={item.image}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </form>
  );
};
export default FormTwo;
