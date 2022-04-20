import { FC, useState, createContext, useContext } from 'react';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Error404 from './Components/Error404/Error404';
import Form from './Components/Form/Form';
import AboutUs from './Components/AboutUs/AboutUs';
import Home from './Components/Home/Home';
import MainContext from './context';

export interface IAppState {
  isSearchInputData: boolean;
}

const App: FC = () => {
  const [isSearchInput, setIsSearchInput] = useState<boolean>(false);
  return (
    <>
      <MainContext.Provider value={{ isSearchInput, setIsSearchInput }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/form" element={<Form />} />
          <Route path="/error404" element={<Error404 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </MainContext.Provider>
    </>
  );
};

export default App;
