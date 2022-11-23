import React, { useEffect, useState } from 'react';
import useTitle from '../../../Hooks/useTitle';
import ServiceCard from './ServiceCard';

const ShortServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-server-lovat.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className='mb-300 ml-10 bg-indigo-100	'>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="font-semibold text-5xl">Our Menu</h2>
                <p>Made by Hand with Love<br/> Wanna Try!!!</p>
           
            </div>
            <div className='grid gap-6 grid-cols-1 mid:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>).slice(3)
                }
            </div>
        </div>
    );
};

export default ShortServices;