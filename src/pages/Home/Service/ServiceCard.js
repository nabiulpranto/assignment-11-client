import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, picture, price, name, description } = service;
    // console.log(service);
    return (
        <div className="card card-compact w-96 bg-indigo-200 shadow-xl mb-50">
            <PhotoProvider>
                <PhotoView src={picture}>
                    <figure><img src={picture} alt="Food" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <p>Details: {description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-primary">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;