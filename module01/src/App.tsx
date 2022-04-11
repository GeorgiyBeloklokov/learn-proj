import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Error404 from './Components/Error404/Error404';
import Form from './Components/Form/Form';
import AboutUs from './Components/AboutUs/AboutUs';
import Home from './Components/Home/Home';
import * as React from 'react';
import CardForm from './Components/CardForm/CardForm';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAppProps {}

export interface IAppState {
  searchInputData: boolean;
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.setState = this.setState.bind(this);
    this.state = {
      searchInputData: false,
    };
  }

  public render() {
    return (
      <>
        <Header setState={this.setState} />
        <Routes>
          <Route
            path="/"
            element={<Home setState={this.setState} searchInputData={this.state.searchInputData} />}
          />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/form" element={<Form />} />
          <Route path="/error404" element={<Error404 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </>
    );
  }
}
