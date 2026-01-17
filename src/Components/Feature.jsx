import React from 'react';
import ServiceCard from './ServiceCard';


const servicesPromise = fetch('/serviceCard.json').then(res=>res.json())

const Feature = () => {
    return (
        <div className='m-8 lg:w-11/12 lg:mx-auto py-10 lg:py-20 space-y-3'>
            <div className='rounded-4xl w-30  p-2  bg-[#F0F7FF] mx-auto mb-2'>
                <h4 className='text-[#0271E8] text-center'>Our Services</h4>
                </div>
                <h2 className='font-bold text-5xl text-center dm-sans-font'>Full-stack Digital Marketing Services</h2>
                <p className='text-lg text-center inter-font text-secondary'>We manage your complete digital presence so you can focus on your core business.</p>
                <div>
                    <ServiceCard servicesPromise={servicesPromise}></ServiceCard>
                </div>
            
        </div>
    );
};

export default Feature;