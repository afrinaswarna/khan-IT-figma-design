import React from 'react';
import ServiceCard from './ServiceCard';


const servicesPromise = fetch('/serviceCard.json').then(res=>res.json())
// console.log(services)
const Feature = () => {
    return (
        <div className='w-11/12 mx-auto py-30 space-y-2'>
            <div className='rounded-4xl w-30  py-4  bg-[#F0F7FF] mx-auto mb-2'>
                <h4 className='text-[#0271E8] text-center font-medium'>Our Services</h4>
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