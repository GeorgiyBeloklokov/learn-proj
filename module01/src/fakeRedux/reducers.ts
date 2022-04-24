import { CardType } from '../Types/Types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Get = 'GET_CARD',
  isLoading = 'IS_LOADING',
  /* Delete = 'DELETE_PRODUCT', */
  Toggle = 'TOGGLE_IS_SEARCH_INPUT',
}

// Card

type CardPayload = {
  [Types.Get]: CardType[];
  /* [Types.Delete]: {
    id: number;
  }; */
};

export type CardActions = ActionMap<CardPayload>[keyof ActionMap<CardPayload>];

export const cardsReducer = (state: CardType[], action: CardActions | isSearchInputActions) => {
  switch (action.type) {
    case Types.Get:
      return [...state, ...action.payload];

    /* case Types.Delete:
      return [...state.filter((product) => product.id !== action.payload.id)]; */
    default:
      return state;
  }
};

// isSearchInput

type isSearchInputPayload = {
  [Types.Toggle]: boolean;
  [Types.isLoading]: boolean;
};

export type isSearchInputActions =
  ActionMap<isSearchInputPayload>[keyof ActionMap<isSearchInputPayload>];

export const isSearchInputReducer = (
  state: boolean,
  action: CardActions | isSearchInputActions
) => {
  switch (action.type) {
    case Types.Toggle:
      return action.payload;
    case Types.isLoading:
      return action.payload;
    default:
      return state;
  }
};
