import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import  axios from "axios"
import { Navigate } from "react-router-dom";
import { Products } from "../components/Products";
import { Link } from "react-router-dom";

const Login = () => {
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState('')
  const [state,dispatch] = useContext( AuthContext)

  const handleSubmit = (e)=>{
    e.preventDefault()
    

    axios({
        url:"https://reqres.in/api/login",
        method:"POST",
        data:{
          email,
          password
        }
    })
    .then((res)=>{
      console.log("loginSuccess")
      console.log(res.data)
      dispatch({
           type:"loginSuccess",
           tokon:res.data
      })
      
     console.log(state)
    })

   
    

  }

  if(state.Auth ){
    
  return  <Navigate to ="/produts" />
  }

  
   
  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
      <input data-cy="login-email" value= {email} onChange={(e)=>setEmail(e.target.value)}  placeholder="enter email"/>
      <input data-cy="login-password" value= {password} onChange={(e)=>setPassword(e.target.value)}  placeholder="enter password" />
      <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
