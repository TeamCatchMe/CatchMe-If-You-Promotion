import React from 'react';
import { Route, Routes } from 'react-router';
import AboutPage from '../About';
import CatchurisPage from '../Catchuris';
import CatchuTestPage from '../CatchuTest';
import CatchuTestResult from '../CatchuTest/End';
import CatchuTestStart from '../CatchuTest/Start';
import GameWorldPage from '../GameWorld';
import MainPage from '../Main';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/test' element={<CatchuTestPage />} />
      <Route path='/test/result' element={<CatchuTestResult />} />
      <Route path='/test/:questionID' element={<CatchuTestStart />} />
      <Route path='/game' element={<GameWorldPage />} />
      <Route path='/game/catchuris' element={<CatchurisPage />} />
    </Routes>
  );
}

export default Router;
