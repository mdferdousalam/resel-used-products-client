import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/Authprovider/AuthContext';
import useAdmin from '../hooks/useAdmin';
import * as Loader from "react-loader-spinner";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();


    if (loading || isAdminLoading) {
        return < Loader.RotatingLines strokeColor="purple"
            strokeWidth="5"
            animationDuration="0.75"
            width="200"
            visible={true}
        />
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;