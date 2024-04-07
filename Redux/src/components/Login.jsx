import React from 'react'
import { useDispatch } from 'react-redux' // used to change values
import {login, logout} from '../features/users'

const Login = () => {

  const dispatch = useDispatch();

  return (
    <div className='login-form'>
        <button
        onClick={()=>{
          dispatch(login({name: "RRJ", age: 18, email: "botchat137@gmail.com"}))
        }}
        >Login</button>
        <button
        onClick={()=>{
          dispatch(logout())
        }}
        >Logout</button>
    </div>
  )
}

export default Login