import { ICardPageState } from '../Components/CardPage/CardPage';

export type CharacterResponseType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  url: string;
  created: string;
  open: boolean;
};

export type CardType = {
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
};
