import react from 'react';
import { MdOutlineEmail } from "react-icons/md";

const Offer = () => {
    return (
        <div className='bg-[#FFFFFF] flex flex-col items-start justify-center gap-8 py-16 '>
            <p className='text-[#2F241F] font-light text-[24px]'>LIMITED DEALS</p>
            <p className='font-bold text-left text-[60px] leading-tight text-[#2F241F]'>Become a member and get 10% off of your first purchase</p>

            <form className="flex flex-row items-center rounded-lg mt-4 text-[24px]">
                <input type="email" placeholder="Enter your email" className="text-[#2F241F] px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#FFFFFF] w-[450px] rounded-l-lg"/>
                <button type="submit" className="px-6 py-4 bg-[#E5F0B6] text-[#2F241F] font-semibold rounded-r-lg hover:bg-[#d8e4a5] transition"><MdOutlineEmail className='text-[24px]'/></button>
            </form>
        </div>

    );
};
export default Offer;