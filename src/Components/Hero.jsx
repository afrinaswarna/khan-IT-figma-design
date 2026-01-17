import React from 'react';
import HeroRight from './HeroRight';
import HeroLeft from './HeroLeft';

const Hero = () => {
    return (
        <div className='flex flex-col lg:flex-row m-8 lg:w-11/12 lg:mx-auto lg:my-30 gap-14'>
         <div className='lg:w-[60%]'>
          <HeroLeft></HeroLeft>

         </div>
          <div className='lg:w-[40%]'>
            <HeroRight></HeroRight>


          </div>
        </div>
    );
};

export default Hero;