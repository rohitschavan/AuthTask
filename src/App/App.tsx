import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardTable from '../common/components/molecules/DashboardTable';
import Register from 'pages/Register';
import CustomFonts from 'styles/Mantine/CustomFonts/CustomFonts';
import Login from 'pages/Login';
import ResetPass from 'pages/ResetPass';
import ForgotPassword from 'pages/ForgotPassword';
import PrivateRoute from '../pages/ProtectedRoutes'; 
import { Toaster } from 'react-hot-toast';
const App = () => {
    return (
        <div className="App">
            <CustomFonts />
            <Toaster/>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/reset-password" element={<ResetPass />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/user/password/reset/:tokenId" element={<ResetPass />} />
               
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <DashboardTable />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
