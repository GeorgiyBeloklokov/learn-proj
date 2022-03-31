import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs/AboutUs';
import Error404 from './Error404/Error404';
import Form from './Form/Form';
import HomePage from './Home/Home';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAppProps {}

const AppRouter: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
