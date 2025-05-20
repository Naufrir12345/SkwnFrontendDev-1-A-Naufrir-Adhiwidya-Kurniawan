import React, { useState, useEffect } from 'react';
import ctg1 from '../assets/idx0.jpg';
import ctg2 from '../assets/idx1.jpg';
import ctg3 from '../assets/idx2.jpg';
import ctg4 from '../assets/idx3.jpg';
import ctg5 from '../assets/idx4.jpg';
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const Product = () => {
  const [posts, setPosts] = useState([]); // Menyimpan data dari API
  const [loading, setLoading] = useState(true); // Status pemuatan
  const [error, setError] = useState(null);

  const images = [ctg1, ctg2, ctg3, ctg4, ctg5];
  const [activeIndex, setActiveIndex] = useState(1);
  const slideTexts = [
    "Green Sofa",
    "Und Chair",
    "Sofa Und",
    "Table Minimalist",
    "Living Room",
  ];
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Gagal mengambil data');
        }
        return response.json();
      })
      .then(data => {
        setPosts(data); // Simpan data ke state
        setLoading(false); // Hentikan status pemuatan
      })
      .catch(error => {
        setError(error.message); // Simpan pesan error
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Memuat produk...</div>;
  }

  // Tampilkan error jika ada
  if (error) {
    return <div className="error">Error: {error}</div>;
  }
  
  return (
    <div className='bg-[#2F241F] py-6 px-0 overflow-hidden'>
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6">
        {/* Header & Button */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start gap-2">
            <p className="text-[#FFFFFF] font-light text-[24px]">OUR PRODUCTS</p>
            <p className="font-bold text-left text-[48px] leading-tight text-[#FFFFFF]">
              This month’s best seller
            </p>
          </div>
          <button className="bg-[#E5F0B6] text-[#2F241F] font-light rounded-lg px-6 py-2">
            SEE MORE
          </button>
        </div>

        {/* Swiper */}
        <div className="relative -mx-[125px]"> {/* half width of each slide */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={5}
            centeredSlides={true}
            initialSlide={2}
            navigation={{
              nextEl: '.next-btn',
              prevEl: '.prev-btn',
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="pl-[125px] pr-[125px]" // offset equal to half of slide width
          >
            {images.map((img, idx) => (
              <SwiperSlide
                key={idx}
                className="!w-[250px] flex justify-center"
              >
                <div
                  className={`rounded-xl overflow-hidden transition-all duration-300 shadow-lg ${
                    idx === activeIndex ? 'scale-110 h-[400px] z-10' : 'h-[350px] opacity-50'
                  }`}
                >
                  <img
                    src={img}
                    alt={`product-${idx}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  {idx === activeIndex && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-[250px] h-[350px] bg-gradient-to-b from-black/0 to-black/60 pl-6 pr-4 py-4 z-20">
                        <div className='absolute top-[calc(100%-14rem)] left-4 py-20'>
                            <div className="w-[50px] h-[25px] text bg-[#FFFFFF] opacity-50 rounded">
                                <p className="text-left text-[15px] text-[#2F241F]">$329</p>
                            </div>
                            <div className="text-white text-[24px] font-semibold max-w-[200px] pl-2">
                            {slideTexts[idx]}
                            </div>
                        </div>
                    </div>
                 )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation */}
        <div className="flex justify-end gap-4 mt-4">
          <button className="prev-btn text-[35px] bg-white text-black rounded-full p-1">
            <FaCircleArrowLeft />
          </button>
          <button className="next-btn text-[35px] bg-white text-black rounded-full p-1">
            <FaCircleArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
