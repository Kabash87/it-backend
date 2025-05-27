import React from 'react';
import { Notification, useLogin, useNotify, useRedirect } from 'react-admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Login.css';

const Login = () => {
  const login = useLogin();
  const notify = useNotify();
  const redirect = useRedirect();
  const handleSubmit = e => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    login({ username: username.value, password: password.value })
      .then(() => redirect('/'))
      .catch(() => notify('Credenciales incorrectas', { type: 'error' }));
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit} className="login-form card card-dark p-4">
        <div className="text-center mb-4">
          <img src="/logo.jpg" alt="IT Logo" className="login-logo" />
        </div>
        <h3 className="text-center text-white mb-4">Iniciar Sesión</h3>
        <div className="mb-3">
          <label className="form-label text-white">Usuario</label>
          <input name="username" type="text" className="form-control" required />
        </div>
        <div className="mb-4">
          <label className="form-label text-white">Contraseña</label>
          <input name="password" type="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-secondary w-100">Entrar</button>
      </form>
      <Notification />
    </div>
  );
};

export default Login;
