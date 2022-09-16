import React from 'react';

const Explore = () => {
    return (
        <div className='relative overflow-hidden rounded-md '>
            <div>
                <img className='rounded-md' src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/newyork.jpg" alt="" />
            </div>
            <div className='absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center bg-gray-800 bg-opacity-40 text-white'>
                <h2 className='text-2xl font-semibold' >London</h2>
                <p>45667 Hotels</p>
            </div>

        </div>
    );
};

export default Explore;