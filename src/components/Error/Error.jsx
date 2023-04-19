import React from 'react';
import './Error.css'

const Error = () => {
    return (
        <div className='error-container'>
            <div>
                <h1 className='error-number'>404</h1>
            </div>
            <div>
                <h1 className='border'>Nothing here to see</h1>
            </div>
        </div>
    );
};

export default Error;