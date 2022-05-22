import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {

  return (
    <div>
      <Link className='btn btn-default' to='/login'>SIGNUP</Link>
      <p>This is the SIGNUP Page</p>
    </div>
  );

};

export default SignUpPage;