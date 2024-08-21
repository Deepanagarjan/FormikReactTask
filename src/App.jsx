import React,{useState} from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Adduser from './components/AddUser';
import Edituser from './components/EditUser';


function App() {
 
  return  <div id="wrapper">
      <BrowserRouter>
        <Sidebar />
        {/* <Dashboard/> */}
      <Routes>
          <Route path='/add-user' element={<Adduser/>}/>
          <Route path='/edit-user/:id' element={<Edituser/>}/>
          <Route path="/home" element={<Dashboard/>} />
          <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      </BrowserRouter>
    </div>
}

export default App;