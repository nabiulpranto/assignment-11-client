import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-6 mb-8">
            <div className='w-21'>
                <figure><img className=' bg-center' src="https://i.ibb.co/DQ2R17T/background.webp" alt="Kitchen"
                /></figure>
            </div>

            <div className="card-body ">
                <h2 className="card-title w-3/5">Do you want to Drink Organic Juice? </h2>
                <p className='justify-end'>Click the Button to See Our Menu</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to='/services'>Menu</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;