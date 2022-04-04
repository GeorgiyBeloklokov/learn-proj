import * as React from 'react';
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
import CardPage from '../CardPage/CardPage';

export interface IArrayCard {
  id: number;
  newName: string;
  newSurName: string;
  newDatePicker: string;
  newCountry: string;
  newAgreeCheckBox: boolean;
  newGiftFirst: boolean;
  newGiftSecond: boolean;
  newGiftThird: boolean;
  newMaleFemale: boolean;
  newPromotionNotification: boolean;
  newImage: File;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IFormProps {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IFormState {
  valuePicker: string | null;
  valueSelect: string;
  formData: string;
  switchFirsDate: boolean;
  switchSecondDate: boolean;
  image: object;
  isFormValid: boolean;
  error: string;
  isErrorFieldName: boolean;
  isErrorFieldSurname: boolean;
  isErrorFieldDatePicker: boolean;
  isErrorFieldCountry: boolean;
  cardData: Array<IArrayCard>;
}

export default class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);
    this.state = {
      valuePicker: '',
      valueSelect: '',
      formData: '',
      switchFirsDate: false,
      switchSecondDate: false,
      image: {},
      isFormValid: false,
      error: 'Error - enter data please',
      isErrorFieldName: false,
      isErrorFieldSurname: false,
      isErrorFieldDatePicker: false,
      isErrorFieldCountry: false,
      cardData: [],
    };
  }
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get(`name`) as string;
    console.log(`test name:`, name);
    if (name === '') {
      this.setState({ isErrorFieldName: true });
      this.setState({ isFormValid: true });
    }

    const surname = formData.get(`surname`);
    console.log(`test name:`, surname);
    if (surname === '') {
      this.setState({ isErrorFieldSurname: true });
      this.setState({ isFormValid: true });
    } else {
      this.setState({ isErrorFieldSurname: false });
    }
    const datePicker = formData.get(`datePicker`);
    console.log(`test IsDatePicker:`, datePicker);
    if (datePicker === '') {
      this.setState({ isErrorFieldDatePicker: true });
    } else {
      this.setState({ isErrorFieldDatePicker: false });
    }
    const country = formData.get(`country`) as string;
    console.log(`test country:`, country);
    if (country === '') {
      this.setState({ isErrorFieldCountry: true });
    } else {
      this.setState({ isErrorFieldCountry: false });
    }
    const agreeCheckBox = !!formData.get('agreeCheckBox');
    console.log(`test agreeCheckBox:`, agreeCheckBox);
    const giftFirst = !!formData.get(`giftFirst`);
    console.log(`test giftFirst:`, giftFirst);
    const giftSecond = !!formData.get(`giftSecond`);
    console.log(`test giftSecond:`, giftSecond);
    const giftThird = !!formData.get(`giftThird`);
    console.log(`test giftThird:`, giftThird);
    const maleFemale = !!formData.get(`male/female`);
    console.log(`test male/female:`, maleFemale);
    const promotionNotification = !!formData.get(`promotionNotification`);
    console.log(`test promotionNotification:`, promotionNotification);
    const image = formData.get(`image`);
    console.log(`test image:`, image);
    if (
      !this.state.isErrorFieldName ||
      !this.state.isErrorFieldSurname ||
      !this.state.isErrorFieldDatePicker ||
      !this.state.isErrorFieldCountry
    ) {
      this.setState((state) => {
        return {
          cardData: [
            ...state.cardData,
            {
              id: Date.now(),
              newName: name,
              newSurName: surname,
              newDatePicker: datePicker,
              newCountry: country,
              newAgreeCheckBox: agreeCheckBox,
              newGiftFirst: giftFirst,
              newGiftSecond: giftSecond,
              newGiftThird: giftThird,
              newMaleFemale: maleFemale,
              newPromotionNotification: promotionNotification,
              newImage: image,
            },
          ],
        };
      });
    }
  };

  Input = styled('input')({
    display: 'none',
  });

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Box sx={{ mt: 5, ml: 2, '& .MuiTextField-root': { m: 2, width: '25ch' } }}>
          <div>
            {this.state.isErrorFieldName && <div style={{ color: 'red' }}>{this.state.error}</div>}
            <TextField
              onFocus={() => this.setState({ isFormValid: true })}
              type="name"
              name="name"
              id="outlined-required"
              label="Name"
              defaultValue="Your Name.."
            />
            {this.state.isErrorFieldSurname && (
              <div style={{ color: 'red' }}>{this.state.error}</div>
            )}
            <TextField
              onFocus={() => this.setState({ isFormValid: true })}
              type="surname"
              name="surname"
              id="outlined-disabled"
              label="Surname"
              defaultValue="Your Surname.."
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              {this.state.isErrorFieldDatePicker && (
                <div style={{ color: 'red' }}>{this.state.error}</div>
              )}
              <DatePicker
                label="Date input"
                value={this.state.valuePicker}
                renderInput={(params) => <TextField name="datePicker" {...params} />}
                onChange={(newValue) => {
                  this.setState({ valuePicker: newValue });
                  if (newValue) {
                    this.setState({ isFormValid: true });
                  }
                }}
              />
            </LocalizationProvider>
            {this.state.isErrorFieldCountry && (
              <div style={{ color: 'red' }}>{this.state.error}</div>
            )}
            <FormControl sx={{ mt: 2, ml: 2, width: '25ch' }}>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.valueSelect}
                label="Country"
                name="country"
                onChange={(e) => {
                  this.setState({ valueSelect: e.target.value as string });
                  if (e) {
                    this.setState({ isFormValid: true });
                  }
                }}
              >
                <MenuItem value={'Spain'}>Spain</MenuItem>
                <MenuItem value={'France'}>France</MenuItem>
                <MenuItem value={'Germany'}>Germany</MenuItem>
              </Select>
            </FormControl>
            <FormGroup>
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
            </label>
            <div>
              <Button
                disabled={!this.state.isFormValid}
                id="button"
                variant="contained"
                type="submit"
                sx={{ mt: 3 }}
              >
                Submit form data
              </Button>
            </div>
          </div>
          <div>
            {/* <div>{console.log(this.state.cardData)}</div> */}
            {this.state.cardData.map((item) => (
              <div key={item?.id}>
                <CardPage name={item.newName} surName={item.newSurName} />
              </div>
            ))}
          </div>
        </Box>
      </form>
    );
  }
}