import react from 'react';
import { CiSearch } from "react-icons/ci";

const Content = () => {
    return (
        <div className='bg-[#2F241F] py-20 px-20'>
            <div className='flex flex-col items-start justify-center gap-4'>
                <p className='text-white font-light text-[24px]'>WHY CHOOSE US?</p>
                <p className='text-white font-bold text-left text-[60px] leading-tight'>We care about details and quality of our products</p>
            </div>
            <div className='flex flex-row gap-8 mt-8'>
                <div className="flex items-center gap-2">
                    <div className="bg-white opacity-20 rounded w-[35px] h-[30px] flex items-center justify-center">
                        <CiSearch className="text-[#2F241F] text-sm" />
                    </div>
                    <div className="text-white text-[20px] font-medium text-left">MANUFACTURED WITH QUALITY MATERIALS</div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="bg-white opacity-20 rounded w-[35px] h-[30px] flex items-center justify-center">
                        <CiSearch className="text-[#2F241F] text-sm" />
                    </div>
                    <div className="text-white text-[20px] font-medium text-left">5 YEARS OF WARRANTY FOR EACH PRODUCT</div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="bg-white opacity-20 rounded w-[35px] h-[30px] flex items-center justify-center gap-2">
                        <CiSearch className="text-[#2F241F] text-sm" />
                    </div>
                    <div className="text-white text-[20px] font-medium text-left">20 YEARS OF EXPERTISE</div>
                </div>
            </div>
        </div>



        
    );
};

export default Content;