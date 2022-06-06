import React, { createContext, useReducer } from "react";



export const AuthContext = createContext();
const initState = {
    Auth : false,
    tokon : null
}

 const reducer = (state,action)=>{
     switch(action.type){
       case "loginSuccess":  {
         return {
           ...state,
           Auth: true,
           tokon : action.tokon,
         }
       }

       case "logoutSuccess":  {
        return {
          ...state,
          Auth: false,
          tokon : null,
        }
      }
     default: {
       console.log("action type is " , action.type)
     }

     }
}

export const AuthProvider = ({ children }) => {
  const [state,dispatch] = useReducer(reducer,initState)
  return <AuthContext.Provider value={[state,dispatch]}>{children}</AuthContext.Provider>;
};
