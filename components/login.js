import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Login = () => {
  const [person, setPerson] = useState({ email: '', password: '' });
  const history=useHistory()
  let name,value;
  const handleChange = (e) => {
     name = e.target.name;
     value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit =async (e) => {
    const {email,password}=person
    if(email==='admin@gmail.com' && password==='admin'){
      history.push('/createpoll')
    }
    e.preventDefault();
    const res=await fetch('./signin',{
      method:'POST',
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    })
    const data= await res.json()
    if(res.status===400 || !data)
      alert('INVALID Credentials')
    else{
      alert('Login Success')

    }

  };
  return (
    <>
      <form method='POST'>
        <div className="row">
          <div className="col-sm-2 col-md-3 col-lg-4"></div>
          <h1 className="text-center col-sm-8 col-md-6 col-lg-5 m-3">Login</h1>
        </div>
        <div className="row">
          <div className="col-sm-2 col-md-3 col-lg-4"></div>
          <input className="col-sm-8 col-md-6 col-lg-5 m-3 p-3" type="text" id='email'
            name='email'
            placeholder="Email"
            value={person.email}
            onChange={handleChange}></input>
        </div>
        <div className="row">
          <div className="col-sm-2 col-md-3 col-lg-4"></div>
          <input className="col-sm-8 col-md-6 col-lg-5 m-3 p-3" type='password'
            id='password'
            name='password'
            placeholder="password"
            value={person.password}
            onChange={handleChange}></input>
        </div>
        <div className="row">
          <div className="col-sm-2 col-md-3 col-lg-4"></div>
          <div className="text-center col-sm-8 col-md-6 col-lg-5 m-1">
            <button className="submit p-2 btn-primary" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </form>
       
      <div className="row">
        <div className="col-sm-2 col-md-3 col-lg-4"></div>
        <div className="text-center col-sm-8 col-md-6 col-lg-5 m-1">
          <h3>New user?</h3>
          <Link to='/signup'>
            <button className="submit p-2 btn-primary">SignUp</button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Login


