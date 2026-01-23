import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Userdetails from '../pages/Userdetails'
import Adminpage from '../pages/Adminpage'
import ViewUserDetails from '../pages/ViewUserDetails'

const AdminRoutes = () => {
  return (
    <div>
        <Routes>
             <Route path="/" element={<Adminpage />} />
            <Route path="/admin/view" element={<ViewUserDetails />} />
        </Routes>
    </div>
  )
}

export default AdminRoutes