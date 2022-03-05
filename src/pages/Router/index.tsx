import React from 'react';
import { Route, Routes } from 'react-router';
import AboutPage from '../About';
import CatchurisPage from '../Catchuris';
import CatchuTestPage from '../CatchuTest';
import GameWorldPage from '../GameWorld';
import MainPage from '../Main';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/test' element={<CatchuTestPage />} />
      <Route path='/game' element={<GameWorldPage />} />
      <Route path='/game/catchuris' element={<CatchurisPage />} />
    </Routes>
  );
}

export default Router;
