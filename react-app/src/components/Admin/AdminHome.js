import React from 'react';
import { Routes ,Route } from 'react-router-dom';

import AdminNavbar from '../Admin/AdminNavbar';
import User from '../Admin/User';
import TailorsDetails from './TailorDetails';
import DressDesignDetails from './DressDesignDetails';
import Service from './Service';
import CreateService from './CreateService';

function AdminHome (){
  return (
    <div>
      <AdminNavbar />
      <Routes>

      <Route path="/users" element={<User />} />
      <Route path="/tailors" element={<TailorsDetails />} />
      <Route path="/designs" element={<DressDesignDetails />} />
      <Route path="/service" element={<Service />} />
      <Route path="/createservice" element={<CreateService />} />





   
 
     </Routes>
    </div>
  );
};

export default AdminHome;
