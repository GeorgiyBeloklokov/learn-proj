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

export interface IHomeProps {
  setState: React.Dispatch<React.SetStateAction<IAppState>>;
  isSearchInputData: boolean;
  error: boolean;
}
export interface IHomeState {
  allCardsData: Array<CharacterResponseType>;
  error: boolean;
  loading: boolean;
}

interface IFormInput {
  muiDatePicker: Date | null;
  name: string;
  surname: string;
  country: string;
}

/* Input = styled('input')({
  display: 'none',
}); */

const Form: FC<IHomeProps> = (props) => {
  /* const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false); */
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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        data-testid="form-test"
        sx={{ mt: 5, ml: 2, '& .MuiTextField-root': { m: 2, width: '25ch' } }}
      >
        <div>
          <TextField
            {...register('name', { required: 'Name is required', maxLength: 20 })}
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
            type="name"
            name="name"
            id="outlined-required"
            label="Name"
            placeholder="Your Name.."
          />
          <TextField
            {...register('surname', { required: 'Surname is required' })}
            error={Boolean(errors.surname)}
            helperText={errors.surname?.message}
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
          {/* <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="agreeCheckBox"
                  onChange={(e) => {
                    if (e.target.value) {
                      this.setState({ isFormValid: true });
                    }
                  }}
                />
              }
              label="Agree to data processing"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => {
                    if (e.target.value) {
                      this.setState({ isFormValid: true });
                    }
                  }}
                  name="giftFirst"
                />
              }
              label="Gift first"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => {
                    if (e.target.value) {
                      this.setState({ isFormValid: true });
                    }
                  }}
                  name="giftSecond"
                />
              }
              label="Gift second"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => {
                    if (e.target.value) {
                      this.setState({ isFormValid: true });
                    }
                  }}
                  name="giftThird"
                />
              }
              label="Gift third"
            />
          </FormGroup>
          <FormControlLabel
            control={
              <Switch
                onChange={(e) => {
                  if (e.target.value) {
                    this.setState({ isFormValid: true });
                  }
                }}
                name="male/female"
                defaultChecked
              />
            }
            label="Male/Female"
          />
          <FormControlLabel
            control={
              <Switch
                onChange={(e) => {
                  if (e.target.value) {
                    this.setState({ isFormValid: true });
                  }
                }}
                name="promotionNotification"
              />
            }
            label="Promotion notifications"
          />
        </div>
        <div>
          <label htmlFor="contained-button-file">
            <this.Input
              onChange={(e) => {
                if (e.target.value) {
                  this.setState({ isFormValid: true });
                }
              }}
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              name="image"
            />
            <Button sx={{ mt: 3 }} variant="contained" component="span">
              Upload profile picture
            </Button>
          </label> */}
          <div>
            <Button
              /* disabled={!this.state.isFormValid} */
              id="button"
              variant="contained"
              type="submit"
              sx={{ mt: 3 }}
            >
              Submit form data
            </Button>
            {/* {this.state.isSavedFormMessage && (
              <div style={{ color: 'red', fontSize: 30 }}>Your data is saved</div>
            )} */}
          </div>
        </div>
        {/* <div>{console.log(this.state.cardData)}</div> */}
        {/* <Grid container spacing={3} sx={{ mt: 2 }}>
          {this.state.cardData.map((item) => (
            <Grid
              data-testid="card-num-form"
              key={item.id}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
              xs={12}
              sm={6}
              md={4}
              lg={2}
              item
            >
              <CardForm
                newName={item.newName}
                newSurName={item.newSurName}
                newDatePicker={item.newDatePicker}
                newCountry={item.newCountry}
                newAgreeCheckBox={item.newAgreeCheckBox}
                newGiftFirst={item.newGiftFirst}
                newGiftSecond={item.newGiftSecond}
                newGiftThird={item.newGiftThird}
                newMaleFemale={item.newMaleFemale}
                newPromotionNotification={item.newPromotionNotification}
                newImage={item.newImage}
              />
            </Grid>
          ))}
        </Grid> */}
      </Box>
    </form>
  );
};
export default Form;
