import Header from 'components/Header';
import AddSchedulePage from 'pages/addSchedulePage/AddSchedulePage';
import SchedulePage from 'pages/schedulePage/SchedulePage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Path from './Path';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path={Path.ClassSchedule} element={<SchedulePage />} />
          <Route path={Path.AddClassSchedule} element={<AddSchedulePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
