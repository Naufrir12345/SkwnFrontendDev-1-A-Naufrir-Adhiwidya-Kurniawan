import react from 'react';
import ctg1 from '../assets/Ctg1.jpg';
import ctg2 from '../assets/Ctg2.jpg';
import ctg3 from '../assets/Ctg3.jpg';

const CategoriesContent = () => {
    return (
        <div className="flex flex-row items-center justify-center px-20 py-20">
            <div className="flex flex-row items-center justify-center px-20 py-50 gap-[24px]">
                {/* flex flex-row items-center justify-center gap-[24px] */}
                <div className="rounded-xl w-[148px] h-[523px] overflow-hidden"><img src={ctg2} alt="" className="w-full h-full object-cover" /></div>
                <div className="rounded-xl w-[148px] h-[523px] overflow-hidden"><img src={ctg1} alt="" className="w-full h-full object-cover" /></div>
                <div className="rounded-xl w-[472px] h-[573px] overflow-hidden"><img src={ctg3} alt="" className="w-full h-full object-cover" /></div>
            </div>
            <div className='flex flex-col justify-start gap-2 max-w-[600px]'>
                <p className='text-black font-light text-left text-[24px]'>Categories</p>
                <p className='text-black font-bold text-left text-[38px] leading-tight'>Furniture Sets Recommendations</p>
                <div className='flex flex-col gap-y-2 mt-8'>
                    <div className='bg-[#FFFFFF] px-10 py-5 text-left'>
                        <p className='font-bold text-left'>Bedroom</p>
                        {/* <p>Enjoy a great living room aesthetics with your family  Designs created for increased comfortability</p> */}
                    </div>
                    <div className='flex flex-col  bg-[#E5F0B6] px-10 py-4 text-left rounded-xl'>
                        <p className='font-bold text-black py-4'>Living Room</p>
                        <p>Enjoy a great living room aesthetics with your family  Designs created for increased comfortability</p>
                    </div>
                    <div className='bg-[#FFFFFF] px-10 py-5 text-left'>
                        <p className='font-bold text-left'>Home Office</p>
                        {/* <p>Enjoy a great living room aesthetics with your family  Designs created for increased comfortability</p> */}
                    </div>
                    <div className='flex flex-col bg-[#FFFFFF] px-10 py-5 text-left'>
                        <p className='font-bold text-left'>Gaming Room</p>
                        {/* <p>Enjoy a great living room aesthetics with your family  Designs created for increased comfortability</p> */}
                    </div>
                </div>
            </div>
        </div>

    );
};


export default CategoriesContent;