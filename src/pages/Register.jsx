import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <h1>Register</h1>


      <p>У вас аккаунт ?
        <Link to='/login'>Войти</Link>
      </p>
    </div>
  );
};

export default Register;