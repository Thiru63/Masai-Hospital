import React,{useState} from "react";
import "./login.css";
import { login, signup } from "../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom/dist";

export const Login = () => {

  const [login,setLogin]=useState(true)
  
  const dispatch=useDispatch()
  const state=useSelector(store=>store.authReducer)

  const[formdata,setFormdata]=useState({})
  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormdata({...formdata,[name]:value})
  }

  const handleSubmitLogin=(e)=>{
    e.preventDefault()
    login(dispatch,formdata)
  }

  const handleSubmitSignUp=(e)=>{
    e.preventDefault()
    signup(dispatch,formdata)
  }

 if(state.isAuth && state.token){
  return <Navigate to='/'/>
 }

  return (
   <div>
    {login?( <div id="login-page">
      <div className="card">
        <h4 className="title">Login Form</h4>
        <div className="field">
           
            <button
              
             
              className="input-field"
              
              onClick={(e)=>setLogin(!login)}
            >Login</button>
          </div>
        <form onSubmit={handleSubmitLogin}>
          <div className="field">
           
            <input
              id="logemail"
              placeholder="Email"
              className="input-field"
              type="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="field">
            
            <input
              id="logpass"
              placeholder="Password"
              className="input-field"
              name="password"
              type="password"
              onChange={handleChange}
            />
          </div>
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>):
    ( <div id="login-page">
    <div className="card">
      <h4 className="title">Signup Form</h4>
      <div className="field">
           
            <button
              
             
              className="input-field"
              
              onClick={(e)=>setLogin(!login)}
            >Signup</button>
          </div>
      <form onSubmit={handleSubmitSignUp}>
        <div className="field">
         
          <input
            id="logemail"
            placeholder="Email"
            className="input-field"
            type="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          
          <input
            id="logpass"
            placeholder="Password"
            className="input-field"
            type="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          
          <input
            id="logcpass"
            placeholder="Confirm password"
            className="input-field"
            type="password"
            name="confirm_password"
            onChange={handleChange}
          />
        </div>
        <button className="btn" type="submit">
          Signup
        </button>
      </form>
    </div>
  </div>)}
   </div>
  );
};
