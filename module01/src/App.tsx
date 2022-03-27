import React from 'react';
import './App.css';
import SearchAppBar from './Components/Header';
import AppRouter from './Components/ApiRouter';

function App() {
  return (
    <div>
      <SearchAppBar />
      <AppRouter />
    </div>
  );
}

export default App;
