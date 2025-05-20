import react from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div className='flex flex-row justify-between items-start gap-8 py-16'>
            <div className='flex flex-col gap-4 max-w-md'>
                <img src={logo} alt="Dekoor logo" className="w-20 h-auto" />
                <div className=" text-[#667085] text-left">
                    <p className='text-[#667085] text-left gap-y-10'>
                        Dekoor is a furniture company created to fulfill the needs of family with aesthetic feeling in their furniture. Always pay attention to details and give clear communication for the customers. Priority of our design is comfortability.
                    </p>
                </div>
                
                <p className='text-[#667085] text-left'>
                © Copyright 2022 Dekoor
                </p>
            </div>
            <div className="flex flex-row gap-10 text-left ">
           
                <div className="flex flex-col gap-4 max-w-md">
                    <h3 className="font-semibold text-black text-[20px]">Support</h3>
                    <p className="text-[#667085] text-[14px]">FAQ</p>
                    <p className="text-[#667085] text-[14px]">Shipping & Returns</p>
                    <p className="text-[#667085] text-[14px]">Care guide</p>
                    <p className="text-[#667085] text-[14px]">Redeem warranty</p>
                </div>

                {/* Kolom 2 */}
                <div className="flex flex-col gap-4 max-w-md">
                    <h3 className="font-semibold text-black text-[20px]">Social Media</h3>
                    <p className="text-[#667085] text-[14px]">Instagram</p>
                    <p className="text-[#667085] text-[14px]">Facebook</p>
                    <p className="text-[#667085] text-[14px]">Twitter</p>
                    <p className="text-[#667085] text-[14px]">TikTok</p>
                </div>

                {/* Kolom 3 */}
                <div className="flex flex-col gap-4 max-w-md">
                    <h3 className="font-semibold text-black text-[20px]">About Us</h3>
                    <p className="text-[#667085] text-[14px]">Our story</p>
                    <p className="text-[#667085] text-[14px]">Designer</p>
                    <p className="text-[#667085] text-[14px]">Craftmanship</p>
                    <p className="text-[#667085] text-[14px]">Sustainability</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;