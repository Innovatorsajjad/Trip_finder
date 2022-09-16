import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'


const Card = () => {
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure><img src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-10_thumb.jpg" alt="Shoes" /></figure>
            <div class="card-body text-left p-3">
                <p className='text-sm text-gray-400'>43299 Murazik Extension</p>
                <h3 className='text-lg font-bold'>Small Metal Ball</h3>
                <p  className='text-sm'>$316.00/Night - Free Cancellation</p>
                <div className="flex text-teal-500">
                    <AiFillStar />
                    <AiFillStar/>
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />   
                </div>
            </div>
        </div>
    );
};

export default Card;