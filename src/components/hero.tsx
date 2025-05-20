import react from 'react';
import logo3 from '../assets/image 64.png';
import { CiSearch } from "react-icons/ci";
import { IoPlayCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";



const Hero = () => {
    return (
        <div>
            <div className="flex justify-between items-start w-full">
                <div className="flex flex-col items-start ml-20 mt-20 max-w-[600px] ">
                    <p className="font-poppins font-bold text-7xl text-left text-[#2F241F]">
                        The kind of <span className="text-[#CBA35C]">furniture</span> you have been looking for
                    </p>
                    <div className="flex space-x-4 mt-6">
                        <button className="flex items-center gap-2 text-brown rounded bg-[#E5F0B6] px-8 py-6">
                            <CiSearch /><span>SEARCH CATALOG</span>
                        </button>
                        <button className="flex items-center gap-2 text-brown rounded outline outline-2 outline-brown-800 px-8 py-6">
                            <IoPlayCircleOutline /><span>WATCH VIDEOS</span>
                        </button>
                    </div>
                </div>

                <div className="relative w-[420px]">
                    <img src={logo3} alt="Furniture Preview" className="w-full" />
                    <div className="absolute top-[calc(100%-14rem)] left-4">
                        <div className='w-[80px] h-[40px] bg-[#FFFFFF] opacity-50 rounded  '>
                            <p className='text-center text-[23px] text-[#2F241F]'>$329</p>
                        </div>
                        <p className="font-poppins font-light text-[64px] text-white text-left">Posht Sofa</p>
                        <button className="w-[197px] bg-[#2F241F] text-white rounded px-4 py-2 text-left flex items-center justify-center gap-2 mt-2">
                        View Details <MdKeyboardArrowRight />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default Hero;