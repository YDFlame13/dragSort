import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages';
import Demo1 from './pages/demo1';
import Demo2 from './pages/demo2';
import Demo3 from './pages/demo3';
import Demo4 from './pages/demo4';

import styles from './App.module.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/demo1" Component={Demo1}></Route>
        <Route path="/demo2" Component={Demo2}></Route>
        <Route path="/demo3" Component={Demo3}></Route>
        <Route path="/demo4" Component={Demo4}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;