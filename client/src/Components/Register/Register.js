import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import "./Register.css"
import { hideLoading, showLoading } from '../../Redux/loadingSlice';
import axios from 'axios';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onFinish = async (e) => {
    e.preventDefault();
    try {
      dispatch(showLoading());
      console.log(userData)
      const response = await axios.post('http://localhost:3000/api/users/register', userData);
      console.log(response.data)
      dispatch(hideLoading());
      if (response.data) {
        toast.success(response.data.message);
        toast("Redirecting to login page")
        navigate('/login');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error)
    }
  };



  return (
    <div>
      <div class="register-container">
        <div class="register-box">
          <form onSubmit={onFinish}>
            <input
              type='text'
              name='name'
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              placeholder='Username'
            />
            <input
              type='text'
              name='email'
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              placeholder='Email'
            />
            <input
              type='password'
              name='password'
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              placeholder='Password'
            />

            <button type='submit'>Register</button>
          </form>
        </div>
      </div>
    </div >
  );
};

export default Register;
