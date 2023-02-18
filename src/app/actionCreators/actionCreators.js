import { DELETEBLOG, DELETEPROJECT, ERROR, LOADBLOGS, LOADING, LOADPROJECTS, LOGIN, POSTPROJECT, REGISTER, RESETLOADING, RESETUSER, SETUSER } from "../actionTypes/actionTypes"

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
export const loadProjects = (projects) => {
  return {
    type: LOADPROJECTS,
    payload: projects,
  };
};
export const addProject = (project) => {
  return {
    type: POSTPROJECT,
    payload: project,
  };
};
export const deleteProject = (id) => {
  return {
    type: DELETEPROJECT,
    payload: id,
  };
};
