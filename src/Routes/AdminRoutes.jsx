import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Userdetails from '../pages/Userdetails'
import Adminpage from '../pages/Adminpage'

const AdminRoutes = () => {
  return (
    <div>
        <Routes>
             <Route path="/" element={<Adminpage />} />
            <Route path="/admin/userdetails" element={<Userdetails />} />
        </Routes>
    </div>
  )
}

export default AdminRoutes