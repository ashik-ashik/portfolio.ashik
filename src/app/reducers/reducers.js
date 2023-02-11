import { DELETEBLOG, ERROR, LOADBLOGS, LOADING, LOGIN, REGISTER, RESETLOADING, RESETUSER, SETUSER } from "../actionTypes/actionTypes";

export const initialState = {
  email:"",
  role:"",
  isLoading: true,
  isError: false,
  error:{},
  blogs: [],
};

const reducers = (state, action) => {
  console.log(action)
  switch(action?.type) {
    
      case LOADING :
        return {
          ...state,
          isLoading: true,
          isError: false,
          error:""
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
          isError: false,
          error: "",
          email: action?.payload
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

    default :
    return;
  }
}

export default reducers;