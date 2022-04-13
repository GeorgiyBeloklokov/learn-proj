import React, { FC, useEffect, useState } from 'react';
import { TextField, Box, Button } from '@mui/material';
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
}
export interface IHomeState {
  allCardsData: Array<CharacterResponseType>;
  error: boolean;
  loading: boolean;
}

interface IFormInput {
  muiDatePicker: Date | null;
  lastName: string;
  firstName: string;
}

/* Input = styled('input')({
  display: 'none',
}); */

const Form: FC<IHomeProps> = (props) => {
  /* const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false); */
  const [state, setState] = useState<IFormInput[]>([]);

  const { control, register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        data-testid="form-test"
        sx={{ mt: 5, ml: 2, '& .MuiTextField-root': { m: 2, width: '25ch' } }}
      >
        <div>
          <TextField
            /* onFocus={() => this.setState({ isFormValid: true })} */
            {...register('firstName', { required: true, maxLength: 20 })}
            type="name"
            name="name"
            id="outlined-required"
            label="Name"
            placeholder="Your Name.."
          />
          <TextField
            {...register('lastName', { required: true, pattern: /^[A-Za-z]+$/i })}
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
              defaultValue={new Date()}
              rules={{ required: true }}
              render={({ field }) => (
                <DatePicker
                  label="Date input"
                  value={field.value}
                  renderInput={(params) => <TextField name="datePicker" {...params} />}
                  onChange={(e) => {
                    field.onChange(e);
                  }}
                />
              )}
            />
          </LocalizationProvider>
          {/* <FormControl sx={{ mt: 2, ml: 2, width: '25ch' }}>
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Controller
              name="muiDatePicker"
              control={control}
              defaultValue={new Date()}
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
          </FormControl> */}
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
