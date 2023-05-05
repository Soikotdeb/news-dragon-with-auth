import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div className='text-danger'>
            this is a home 
        </div>
    );
};

export default Home;