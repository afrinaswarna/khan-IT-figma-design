import React, { use } from 'react';

const ServiceCard = ({servicesPromise}) => {
    const services = use(servicesPromise)
    // console.log(services)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-10'>
            {
                services.map(service=><div className='border border-[#E8EAED] hover:border-[#0271E8] hover:bg-[#F0F7FF] rounded-[20px] p-6'>
                    <img src={service.image} alt="" className='size-14 object-cover'/>
                    <h4 className='font-semibold text-2xl inter-font mt-3 mb-2'>{service.title}</h4>
                    <p className='text-[16px] text-secondary'>{service.subtitle}</p>
                </div>)
            }
        </div>
    );
};

export default ServiceCard;