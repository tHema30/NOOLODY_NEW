import React from 'react'
import { Navigate } from 'react-router-dom';

function AdminRoutes({children}) {
    
    const info=JSON.parse(localStorage.getItem("userInfo"));
  return info.role==="admin"? children : <Navigate to="/home"/>
}

export default AdminRoutes