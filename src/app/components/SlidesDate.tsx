'use client'
import React from 'react'
import '../styles/SlidesDate.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { toPersianNumber } from '../lib/helper/helpers'

function SlidesDate() {
    return (
        <div className='lg:col-span-5 col-span-12 lg:mt-5'>
            <p className='text-[#495057] text-[12px] mb-4 hidden lg:block'>انتخاب تاریخ تحویل</p>
            <p className='text-[#495057] text-[12px] mb-4 lg:hidden block'>زمان ارسال</p>
            <Swiper
                spaceBetween={20}
                slidesPerView={3.6}
                breakpoints={{
                    0: {
                        slidesPerView: 1, // Show only 1 slide on mobile
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3.6, // Show 3.6 slides on larger screens
                        spaceBetween: 10,
                    },
                }}
                initialSlide={2} // Start at the third slide
                className="dates-slides-time"
            >
                {/* Slide 1 - Hidden on mobile */}
                <SwiperSlide className="hidden lg:block">
                    <div className="border flex flex-col justify-center bg-[#FFF5F5] items-center h-[76px] border-[#FF6B6B] rounded-xl p-[16px]">
                        <span className="text-[#FF6B6B] font-bold text-[14px]">دوشنبه</span>
                        <span className="text-[#FF6B6B] font-bold text-[14px]">22</span>
                        <span className="text-[#FF6B6B] font-bold text-[14px]">اسفند</span>
                    </div>
                </SwiperSlide>

                {/* Slide 2 - Hidden on mobile */}
                <SwiperSlide className="hidden lg:block">
                    <div className="border border-[#CED4DA] flex flex-col slideBoxShadow justify-center items-center h-[76px] rounded-xl p-[16px] bg-[#FFF5F5]">
                        <span className="text-[#343A40] font-bold text-[14px]">یکشنبه</span>
                        <span className="text-[#343A40] font-bold text-[14px]">23</span>
                        <span className="text-[#343A40] font-bold text-[14px]">اسفند</span>
                    </div>
                </SwiperSlide>

                {/* Slide 3 - Visible on all screens */}
                <SwiperSlide>
                    <div className="flex gap-5 justify-center">
                        <div className="border border-[#CED4DA] flex flex-col justify-center items-center h-[76px] rounded-xl p-[16px] ">
                            <span className="text-[#343A40] font-bold text-[14px] whitespace-nowrap">سه شنبه</span>
                            <span className="text-[#343A40] font-bold text-[14px]">{toPersianNumber(24)}</span>
                            <span className="text-[#343A40] font-bold text-[14px]">اسفند</span>
                        </div>
                        <div className='flex gap-2 items-center md:hidden'>
                            <Image src={'/Success - color fill.png'} width={20} height={20} alt='' />
                            <p className='text-[10px]'>10 الی 14</p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 4 - Hidden on mobile */}
                <SwiperSlide className="hidden lg:block">
                    <div className="border border-[#CED4DA] flex flex-col justify-center items-center h-[76px] rounded-xl p-[16px] bg-[#FFF5F5]">
                        <span className="text-[#343A40] font-bold text-[14px]">چهارشنبه</span>
                        <span className="text-[#343A40] font-bold text-[14px]">25</span>
                        <span className="text-[#343A40] font-bold text-[14px]">اسفند</span>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="block lg:hidden flex gap-5 mt-5">
                <button className='border text-[12px] border-[#502FB2] rounded-lg font-bold text-[#502FB2] px-8 py-2'>تغییر زمان تحویل</button>
                <div className='flex items-center gap-2'>
                    <p className='text-[#228BE6] text-[12px]'>توضیحات زمان تحویل</p>
                    <Image src={'/info-circle.png'} width={16} height={16} alt='' />
                </div>
            </div>
            <p className='text-[12px] text-[#495057] my-5 hidden lg:block'>انتخاب زمان تحویل</p>
            <Swiper
                spaceBetween={5}
                slidesPerView={3.5}
                className='items-center DatesDeliverySlides '>
                <SwiperSlide className='!flex items-center gap-1 border border-[#1C7ED6]  rounded-xl text-[#1C7ED6] p-2'>
                    <Image src={'/Success - color fill.png'} width={20} height={20} alt='' />
                    <p className='text-[10px]'>10 الی 14</p>
                </SwiperSlide>
                <SwiperSlide className='!flex items-center gap-1 border border-[#FF6B6B]  rounded-xl text-[#FF6B6B] p-2'>
                    <Image src={'/Right icon.png'} width={20} height={20} alt='' />
                    <p className='text-[10px]'>18 الی 14</p>
                </SwiperSlide>
                <SwiperSlide className='!flex items-center gap-1 border border-[#CED4DA]  rounded-xl  p-2'>
                    <Image src={'/Empty - gray linear.png'} width={20} height={20} alt='' />
                    <p className='text-[10px]'>18 الی 14</p>
                </SwiperSlide>
                <SwiperSlide className='!flex'>
                    <Image src={'/Button S.png'} width={15} height={15} alt='' />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SlidesDate
