import { createContext, useContext } from "react";
import { useReducer } from "react";
import reducers, { initialState } from "../app/reducers/reducers";

export const DataContext = createContext();
const ContextProvicer = ({children}) => {
  const [state, dispatch] = useReducer(reducers,initialState);
  // dispatch()

  return (
    <>
      <DataContext.Provider value={{state, dispatch}}>
        {children}
      </DataContext.Provider>
    </>
  )
}

export const useData = () => {
  return useContext(DataContext);
}

export default ContextProvicer;
