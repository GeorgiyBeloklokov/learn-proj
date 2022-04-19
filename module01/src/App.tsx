import { FC, useState, createContext, useContext } from 'react';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Error404 from './Components/Error404/Error404';
import Form from './Components/Form/Form';
import AboutUs from './Components/AboutUs/AboutUs';
import Home from './Components/Home/Home';

const UserContext = createContext<string | null>(null);

export interface IAppState {
  isSearchInputData: boolean;
}

const App: FC = () => {
  return (
    <>
      <UserContext.Provider value="hello">
        <Header setIsSearchInputData={setIsSearchInputData} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setIsSearchInputData={setIsSearchInputData}
                isSearchInputData={isSearchInputData}
              />
            }
          />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/form" element={<Form />} />
          <Route path="/error404" element={<Error404 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
};

export default App;
