import axios from "axios";
import { DELETEBLOG, ERROR, LOADBLOGS, LOADING, LOGIN, REGISTER, RESETLOADING, RESETUSER, SETUSER } from "../actionTypes/actionTypes"

export const loading = () => {
  return {
    type: LOADING,
  };
};
export const resetLoading = () => {
  return {
    type: RESETLOADING,
  };
};
export const error = (err) => {
  return {
    type: ERROR,
    payload: err,
  };
};
export const registerUser = (data) => {
  return {
    type: REGISTER,
    payload: data,
  };
};
export const loginUser = (email) => {
  return {
    type: LOGIN,
    payload: email,
  };
};
export const setUser = (email) => {
  return {
    type: SETUSER,
    payload: email,
  };
};
export const resetUser = () => {
  return {
    type: RESETUSER,
  };
};
export const loadBlogs = (blogs) => {
  return {
    type: LOADBLOGS,
    payload: blogs,
  };
};
export const deleteBlog = (id) => {
  return {
    type: DELETEBLOG,
    payload: id,
  };
};
