import React from 'react';
import { Navigate } from 'react-router';
import toast from '../../../app/toast/toast';
import { useData } from '../../../context/ContextProvider';
import Loader from '../../Common/Loader/Loader';

const AdminRoute = ({children}) => {
  const {state} = useData();
  if(state.isLoading){
    return <Loader />
  }
  if(state?.email && state.role ==="admin"){
    return children;
  }
  else if(state.email && state.role !== "admin"){
    toast("warning", "Warning", "Some contents are protected! Where you don't have an access")
    return <Navigate to="/" />;
  }
  else {
    return <Navigate to="/authentication" />;
  };
  
};

export default AdminRoute;