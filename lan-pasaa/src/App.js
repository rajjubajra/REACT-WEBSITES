import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import LanPasaa from './components/LanPasaa';
import CopyRightFooter from './components/CopyRightFooter';


function App() {
  return (
    <BrowserRouter>
      <LanPasaa />
      <CopyRightFooter />
    </BrowserRouter>
  );
}
export default App;