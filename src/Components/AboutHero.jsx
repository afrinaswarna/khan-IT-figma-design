import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { FiTrendingUp } from 'react-icons/fi';
import { HiOutlineBadgeCheck, HiOutlineOfficeBuilding } from 'react-icons/hi';


const stateCards = [
    {
        
        icon:<HiOutlineOfficeBuilding className="text-blue-500 w-7 h-7" />,
        count:"200+",
        subtitle:"Businesses Served"
    },
    {
        
        icon:<FiTrendingUp className="text-blue-500 w-7 h-7" />,
        count:"18",
        subtitle:"Industries Covered"
    },
    {
        
        icon:<HiOutlineBadgeCheck className="text-blue-500 w-7 h-7" />,
        count:"95%",
        subtitle:"Client Satisfaction"
    },
]
const AboutHero = () => {
    return (
        <div className='my-30'>
            <div className='m-8 rounded-4xl lg:w-94.25   p-2  bg-[#F0F7FF] mx-auto '>
                <h4 className='text-[#0271E8] text-center text-sm'>Bangladesh's Trusted Digital Partner Since 2017</h4>
                </div>
                <h2 className='font-bold text-[70px] lg:text-[80px] text-center'>About <span className='text-[#0271E8]'>Khan IT</span></h2>
            <p className='text-center text-secondary text-[20px]'>We're more than a digital marketing agency. We're your partner in Bangladesh's <br />
fast-changing digital landscape. Delivering measurable growth <br />
through ethical, data-driven, and AI-powered strategies.</p>
<div className='flex justify-center gap-2 mt-6'>
    <button className='btn-primary flex items-center justify-center gap-2'><span>Explore Our Services</span> <FaArrowRight className='text-white '/></button>
    <button className='text-[#0271E8] rounded-lg px-6 py-2 border border-[#0271E8]'>View Case Studies</button>
</div>

<div className='flex flex-col lg:flex-row items-center justify-center gap-6 mt-6'>
    {
        stateCards.map(card=><div className='shadow-sm p-5 rounded-[20px] flex flex-col  items-center gap-2'>
            <div className='rounded-xl w-12 bg-linear-to-br from-[#C4DBF5] to-[#ECF1F8] p-2'>{card.icon}</div>
            <h2 className='font-bold text-2xl'>{card.count}</h2>
            <p className='text-sm text-secondary'>{card.subtitle}</p>
        </div>)
    }
</div>
        </div>
    );
};

export default AboutHero;