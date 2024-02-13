import React from 'react';
import { Routes ,Route } from 'react-router-dom';

import AdminNavbar from '../Admin/AdminNavbar';
import User from '../Admin/User';
import TailorsDetails from './TailorDetails';
import DressDesignDetails from './DressDesignDetails';
import Logout from './Logout';

function AdminHome (){
  return (
    <div>
      <AdminNavbar />
      <Routes>

      <Route path="/users" element={<User />} />
      <Route path="/tailors" element={<TailorsDetails />} />
      <Route path="/designs" element={<DressDesignDetails />} />
      <Route path="/logout" element={<Logout />} />


   
 
     </Routes>
    </div>
  );
};

export default AdminHome;
