import React, { useState } from 'react';

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <div>
      <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Введите свой Emial" />
      <input type="password" onChange={(e) => setPass(e.target.value)} value={pass} placeholder="Введите свой пароль" />
      <button onClick={handleClick}>{title}</button>
    </div>
  );
};

export default Form;