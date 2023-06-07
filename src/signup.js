import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const navigate=useNavigate()

  const signup = () => {
    let detail= {
        "name": name,
        "password": password,
        "email": email
      }

      axios.post("http://localhost:1234/userlist",detail)
      .then(data=>{
          setMsg(" SignUp done Successfully")
          localStorage.setItem("id", data.id);  //WHere from this id,name,type came
          navigate("/loginn")
      })

  };
  return (
    <div className="container">
      <div className="row m-4">
          <p className='text-center'>{msg}</p>
        <div className="col-lg-4 offset-4">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(obj) => setName(obj.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(obj) => setPassword(obj.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(obj) => setEmail(obj.target.value)}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button className="btn btn-primary" onClick={signup}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
