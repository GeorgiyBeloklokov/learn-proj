import { FC } from 'react';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Error404 from './Components/Error404/Error404';
import Form from './Components/Form/Form';
import AboutUs from './Components/AboutUs/AboutUs';
import Home from './Components/Home/Home';
import { AppProvider } from './fakeRedux/context';
import ItemPage from './Components/IttemPage/ItemPage';

/* export interface IAppState {
  isSearchInputData: boolean;
} */

const App: FC = () => {
  /* const [cartState, cartDispatch] = useReducer(cartReducer, inistialCartState);
  const cartContextValues = {
    cartState,
    cartDispatch,
  }; */
  return (
    <>
      {/* <CartContextProvider value={cartContextValues}> */}
      <AppProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/itemPage:id" element={<ItemPage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/error404" element={<Error404 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AppProvider>
      {/* </CartContextProvider> */}
    </>
  );
};

export default App;
