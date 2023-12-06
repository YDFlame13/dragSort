import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages';
import Demo1 from './pages/demo1';
import Demo2 from './pages/demo2';

import styles from './App.module.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/demo1" Component={Demo1}></Route>
        <Route path="/demo2" Component={Demo2}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;