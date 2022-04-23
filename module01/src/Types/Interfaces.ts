import { ICardPageState } from '../Components/CardPage/CardPage';

export interface IForPrintProps {
  id: number;
  name: string;
  status: string;
  type: string;
  gender: string;
  species: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  url: string;
  created: string;
}

export interface IModalFirstProps {
  setState: React.Dispatch<React.SetStateAction<ICardPageState>>;
  image: string;
  open: boolean;
  id: number;
  name: string;
  status: string;
  type: string;
  gender: string;
  species: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  url: string;
  created: string;
}

export interface ICardPageProps {
  image: string;
  id: number;
  name: string;
  status: string;
  type: string;
  gender: string;
  species: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  url: string;
  created: string;
}

export interface IFormProps {
  id: string;
  firstName: string;
  surname: string;
  muiDatePicker: string;
  country: string;
  agreeCheckBox: boolean;
  giftFirst: boolean;
  giftSecond: boolean;
  giftThird: boolean;
  maleFemale: boolean;
  promotionNotification: boolean;
  image: File | null;
}
export interface ITableProps {
  id: number;
  firstName: string;
  surname: string;
  muiDatePicker: string;
  country: string;
  agreeCheckBox: boolean;
  giftFirst: boolean;
  giftSecond: boolean;
  giftThird: boolean;
  maleFemale: boolean;
  promotionNotification: boolean;
}
