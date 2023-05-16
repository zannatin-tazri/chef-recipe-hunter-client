import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center m-5'>
          <h2 className='text-warning'> Oops!</h2> 
          <h4>Page Not Found</h4>
          <p>Back to <Link to='/'> Home</Link></p>
        </div>
    );
};

export default ErrorPage;