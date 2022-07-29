import React from 'react';
import { RefreshedProvider } from 'libs/context';
import CheckSchedule from './components/CheckSchedule';

function SchedulePage() {
  return (
    <RefreshedProvider>
      <CheckSchedule />
    </RefreshedProvider>
  );
}

export default SchedulePage;
