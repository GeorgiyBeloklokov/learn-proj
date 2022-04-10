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
  /* episode: Array<string>; */
  url: string;
  created: string;
  searchInputData?: boolean;
  setState: React.Dispatch<React.SetStateAction<ICardPageState>>;
  open: boolean;
};
