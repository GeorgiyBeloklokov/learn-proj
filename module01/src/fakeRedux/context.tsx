import React, { createContext, useReducer, Dispatch } from 'react';
import { CardType } from '../Types/Types';
import { cardsReducer, isSearchInputReducer, CardActions, isSearchInputActions } from './reducers';

export type InitialStateType = {
  cards: CardType[];
  isLoading: boolean;
  isSearchInput: boolean;
};
const initialState = {
  cards: [],
  isLoading: true,
  isSearchInput: false,
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<CardActions | isSearchInputActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { cards, isSearchInput }: InitialStateType,
  action: CardActions | isSearchInputActions
) => ({
  cards: cardsReducer(cards, action),
  isSearchInput: isSearchInputReducer(isSearchInput, action),
  isLoading: isSearchInputReducer(isSearchInput, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
