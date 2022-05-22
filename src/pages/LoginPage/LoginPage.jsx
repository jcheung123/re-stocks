import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {

  return (
    <div>
      <Link className='btn btn-default' to='/login'>LOGIN</Link>
      <p>This is the login Page</p>
    </div>
  );

};

export default LoginPage;