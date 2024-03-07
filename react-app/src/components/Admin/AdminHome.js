import React from 'react';
import { Routes ,Route } from 'react-router-dom';

import AdminNavbar from '../Admin/AdminNavbar';
import User from '../Admin/User';
import TailorsDetails from './TailorDetails';
import DressDesignDetails from './DressDesignDetails';
import Service from './Service';
import CreateService from './CreateService';
import OrderDetails from './OrderDetails';
import Dashboard from './Dashboard.js';

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
      <Route path="/orders" element={<OrderDetails />} />
      <Route path="/" element={<Dashboard/>} />









   
 
     </Routes>
    </div>
  );
};

export default AdminHome;
