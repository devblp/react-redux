import React from 'react';
import "./App.css"
import { useDispatch , useSelector } from 'react-redux';
import {login} from "./Store/Slices/Auth"
export default function App() {
  const tokens = "msdopewerpodsas231pasdjaskei3jsdkslsejfvmjsaZ"
  const dispatch = useDispatch()
  const { user , token } = useSelector((state) => state.auth)
  console.log(user);
  console.log(token);
  const handelCheng = (e)=>{
    const {name,value} = e.target;
    dispatch(login({user: { ...user, [name]: value },token:tokens}))
  }
  
  return (
    <>
      <div className="pg-mine">
        <div className='inputs'>
          <input type="text" name="name" id='input-name' onChange={handelCheng}/>
          <input type="password" name="password"  id='input-password' onChange={handelCheng}/>
        </div>
        <div className='log'>
          <span>User: {user.name}</span>
          <span>Token: {token}</span>
        </div>
      </div>
    </>
  )
}
