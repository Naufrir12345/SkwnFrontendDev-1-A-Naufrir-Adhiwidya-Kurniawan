import react from 'react';
import company_logo1 from '../assets/Company logo.png';
import company_logo2 from '../assets/Company logo-1.png';
import company_logo3 from '../assets/Company logo-2.png';
import company_logo4 from '../assets/Company logo-3.png';

const Client = () => {
    return (
        <div className='flex flex-row items-center justify-center px-20 py-20 gap-x-40'>
            <div className='font-poppins text-black text-left'>
                <p className='text-[96px] font-semibold '>25+</p>
                <p className='text-[24px] font-light text-left'>PARTNERED BRANDS</p>    
            </div>
            <div className='flex flex-row gap-[45px] mt-8'>
                <img src={company_logo1} alt="Company logo" />
                <img src={company_logo2} alt="Company logo-1" />
                <img src={company_logo3} alt="Company logo-2" />
                <img src={company_logo4} alt="Company logo-3" />
            </div>
        </div>
    );
};

export default Client;