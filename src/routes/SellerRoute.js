import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/Authprovider/AuthContext';
import useSeller from '../hooks/useSeller';
import * as Loader from "react-loader-spinner";

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();


    if (loading || isSellerLoading) {
        return < Loader.RotatingLines strokeColor="purple"
            strokeWidth="5"
            animationDuration="0.75"
            width="200"
            visible={true}
        />
    }

    if (user && isSeller) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;