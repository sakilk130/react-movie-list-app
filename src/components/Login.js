import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../API';
import Button from './Button';
import { Wrapper } from './Login.styles';
import { Context } from '../context';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const [_user, setUser] = useContext(Context);

  const navigate = useNavigate();

  const handelInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  const handelSubmit = async () => {
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password
      );
      console.log(sessionId);
      setUser({
        sessionId: sessionId.session_id,
        username,
      });
      navigate('/');
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Wrapper>
      {error && <div className="error">Something went wrong</div>}
      <label>Username:</label>
      <input
        type="text"
        value={username}
        name="username"
        onChange={handelInput}
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        name="password"
        onChange={handelInput}
      />
      <Button text="login" callback={handelSubmit} />
    </Wrapper>
  );
};

export default Login;
