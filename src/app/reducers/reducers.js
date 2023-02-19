import { DELETEBLOG, DELETEPROJECT, ERROR, LOADBLOGS, LOADING, LOADPROJECTS, LOADUSERS, LOGIN, POSTPROJECT, REGISTER, RESETLOADING, RESETUSER, SETUSER } from "../actionTypes/actionTypes";

export const initialState = {
  email:"",
  role:"",
  isLoading: true,
  isError: false,
  error:{},
  blogs: [],
  projects:[],
  users: []
};

const reducers = (state, action) => {
  // console.log(action)
  switch(action?.type) {
    
      case LOADING :
        return {
          ...state,
          isLoading: true,
        };
      case RESETLOADING :
        return {
          ...state,
          isLoading: false,
        }
      case ERROR :
        return {
          ...state,
          isLoading: false,
          isError: true,
          error: {...action?.payload}
        };

      case LOGIN:
        return {
          ...state,
          email: action?.payload,
          isLoading: false,
          isError: false,
          error:""
        };
      case REGISTER:
        return {
          ...state,
          email: action?.payload,
          isLoading: false,
          isError: false,
          error:""
        };
      case SETUSER:
        return {
          ...state,
          isLoading: false,
          email: action?.payload.email,
          role: action.payload.role
        }
      case RESETUSER:
        return {
          ...state,
          email:"",
        }
      case LOADBLOGS: 
      return{
        ...state,
        isLoading: false,
        isError: false,
        blogs:[...action.payload]
      }
      case DELETEBLOG: 
        return{
          ...state,
          isLoading: false,
          isError: false,
          blogs:[...state.blogs.filter(blog => blog._id !== action.payload)]
        }
      case LOADPROJECTS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          error: {},
          projects: action.payload
        }
      case POSTPROJECT:
        return {
          ...state,
          isLoading: false,
          isError: false,
          error:{},
          projects: [...state.projects, action.payload]
        }
      case DELETEPROJECT :
        return {
          ...state,
          projects: [...state.projects.filter(project => project._id !== action.payload)]
        }
      case LOADUSERS :
        return {
          ...state,
          users: action.payload
        }

    default :
    return;
  }
}

export default reducers;