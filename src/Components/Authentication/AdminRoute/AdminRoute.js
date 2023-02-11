import React from 'react';
import { Navigate } from 'react-router';
import { useData } from '../../../context/ContextProvider';
import Loader from '../../Common/Loader/Loader';

const AdminRoute = ({children}) => {
  const {state} = useData();
  if(state.isLoading){
    return <Loader />
  }
  if(state?.email){
    return children;
  }else{
    return <Navigate to="/authentication" />;
  };
  
};

export default AdminRoute;