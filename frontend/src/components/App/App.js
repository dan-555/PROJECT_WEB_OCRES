import React from 'react';
import './App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header/Header';
import Widgets from '../../pages/Dashboard/Dashboard';
import AdminControl from '../../pages/AdminControl/AdminControl';

import {
  Routes,
  Route
} from "react-router-dom";
function App() {

  return (
    <div>
    
    <Header/>
   
    <div className="App">  
        <Routes>
             <Route path="/" element={<Widgets/>} />
             <Route path="/AdminControl" element={<AdminControl/>} />
       </Routes>

    </div> 

    </div>
  );
}
export default App;
