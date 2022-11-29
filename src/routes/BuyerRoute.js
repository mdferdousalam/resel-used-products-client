import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/Authprovider/AuthContext';
import useBuyer from '../hooks/useBuyer';
import * as Loader from "react-loader-spinner";

const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
    const location = useLocation();


    if (loading || isBuyerLoading) {
        return < Loader.RotatingLines strokeColor="purple"
            strokeWidth="5"
            animationDuration="0.75"
            width="200"
            visible={true}
        />
    }

    if (user && isBuyer) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;