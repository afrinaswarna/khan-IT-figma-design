import React from 'react';
import HeroRight from './HeroRight';

const Hero = () => {
    return (
        <div className='flex w-11/12 mx-auto my-10 gap-14 items-center'>
          <div className='flex-1 '>
            <h2 className='dm-sans-font font-extrabold text-7xl '>Digital Marketing <br />
                Agency in <br /> Bangladesh</h2>
                <p className='text-lg inter-font text-secondary mt-5 mb-9'>Khan IT (led by SEO expert Md Faruk Khan) helps businesses get 150% 
more leads and 2.5x higher conversions through integrated digital
marketing and web design.</p>
             <button className='btn-primary'>Book Your Free Consultation</button>

          </div>
          <div className='flex-1 '>
            <HeroRight></HeroRight>


          </div>
        </div>
    );
};

export default Hero;