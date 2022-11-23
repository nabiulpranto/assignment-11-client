import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="card lg:card-side bg-indigo-200	 shadow-xl mt-6 mb-8">
            <div>
                <figure><img className=' bg-center' src="https://i.ibb.co/hWpdsJV/juice-bar.png" alt="Kitchen"
                /></figure>
            </div>

            <div className="card-body bg-indigo-200 justify-end">
                <h2 className="card-title w-1/5 ml-60 mt-8">Do you want to Drink Organic Juice? </h2>
                <p className='ml-60 mt-3'>Click the Button<br/> to See Our Menu</p>
                <div className="card-actions ">
                    <button className="btn btn-primary justify-start ml-60 mb-20"><Link to='/services'>Menu</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;