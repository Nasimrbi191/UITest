'use client'
import Image from 'next/image';
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Swiper, SwiperSlide } from 'swiper/react';
import { toPersianNumber } from '../lib/helper/helpers';

function SlidesProduct() {
    return (
        <div className='lg:col-span-7 col-span-12  mt-5'>
            <Swiper
                spaceBetween={3}
                slidesPerView={4.4}
                breakpoints={{
                    0: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="flex gap-2 max-w-full">
                        <div className='w-full max-w-full'>
                            <Image src={'/cb78fe776653c8d9b72b43711febdd417b36a497.png'} className='hidden lg:block' width={88} height={88} alt='' />
                            <Image src={'/cb78fe776653c8d9b72b43711febdd417b36a497.png'} className='lg:hidden block' width={66} height={66} alt='' />
                            <div className='flex gap-2 items-center flex-wrap lg:flex-nowrap hidden lg:block'>
                                <div className='w-[16px] h-[16px] bg-[#000] border border-[#868E96] rounded'></div>
                                <span className='text-[12px] hidden lg:block'>مشکی</span>
                            </div>
                            <div className='w-[94px] max-w-full mt-3 hidden lg:flex pl-2 pr-1 py-3 flex flex-wrap lg:flex-nowrap gap-2 items-center h-[20px] bg-[#6741D9] rounded-lg text-white'>
                                <Image src={'/shield-tick.png'} width={16} height={16} alt={''} />
                                <span className='text-[12px] hidden lg:block'>بیمه</span>
                            </div>
                            <div className=' mt-5 w-[94px] max-w-full flex flex-wrap lg:flex-nowrap justify-between items-center'>
                                <div className='border rounded  flex text-[11px] flex-wrap lg:flex-nowrap justify-center items-center border-[#1C1C1C] w-[18px] h-[18px]'>
                                    <AddIcon className='lg:text-[12px] !text-[13px] cursor-pointer !w-full' />
                                </div>
                                <span className='hidden lg:block'>{toPersianNumber(2)}</span>
                                <span className='lg:hidden block'>{toPersianNumber(1)}</span>
                                <div className='border hidden lg:block rounded text-[11px] flex flex-wrap lg:flex-nowrap justify-center items-center border-[#1C1C1C] w-[18px] h-[18px]'>
                                    <RemoveIcon className='lg:text-[12px]  cursor-pointer !w-full !h-[18px] ' />
                                </div>
                                <div className='border border-[#FA5252] rounded p-1 block lg:hidden'>
                                    <Image src={'/Icon.png'} width={10} height={10} className='' alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#CED4DA] w-[2px] h-[100px] lg:hidden block'></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex gap-2">
                        <div className='w-full max-w-full'>
                            <Image src={'/79d136e8496aa14d6e217222c51a734620603e59.jpg'} className='hidden lg:block' width={88} height={88} alt='' />
                            <Image src={'/79d136e8496aa14d6e217222c51a734620603e59.jpg'} className='lg:hidden block' width={66} height={55} alt='' />
                            <div className='flex flex-wrap lg:flex-nowrap gap-2 items-center hidden lg:block'>
                                <div className='w-[16px] h-[16px] bg-[#000] border border-[#868E96] rounded'></div>
                                <span className='text-[12px]'>مشکی</span>
                            </div>
                            <div className='w-[94px] hidden lg:block max-w-full mt-3 pl-2 pr-1 py-3 flex flex-wrap lg:flex-nowrap gap-2 items-center h-[20px]  rounded-lg text-white'>

                            </div>
                            <div className=' mt-5 w-[94px] max-w-full flex flex-wrap lg:flex-nowrap justify-between items-center'>
                                <div className='border rounded  flex flex-wrap lg:flex-nowrap justify-center items-center border-[#1C1C1C] w-[18px] h-[18px]'>
                                    <AddIcon className='lg:text-[12px] !text-[13px] cursor-pointer !w-full' />
                                </div>
                                <span>{toPersianNumber(1)}</span>
                                <div className='border rounded flex flex-wrap lg:flex-nowrapjustify-center items-center border-[#1C1C1C] w-[18px] h-[18px]'>
                                    <RemoveIcon className='text-[12px] cursor-pointer !w-full !h-[18px]' />
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#CED4DA] w-[2px] h-[100px] lg:hidden block'></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex gap-2">
                        <div className='w-full max-w-full'>
                            <Image src={'/5aa4d3720445e675939081397e406236826e8d18.jpg'} className='hidden lg:block' width={88} height={88} alt='' />
                            <Image src={'/5aa4d3720445e675939081397e406236826e8d18.jpg'} className='lg:hidden block' width={66} height={66} alt='' />
                            <div className='flex gap-2 hidden lg:block items-center flex-wrap lg:flex-nowrap'>
                                <div className='w-[16px] h-[16px] bg-[#fff] border border-[#868E96] rounded'></div>
                                <span className='text-[12px]'>سفید</span>
                            </div>
                            <div className='w-[94px] hidden lg:flex max-w-full mt-3 pl-2 pr-1 py-3  flex-wrap lg:flex-nowrap gap-2 items-center h-[20px] bg-[#6741D9] rounded-lg text-white'>
                                <Image src={'/shield-tick.png'} width={16} height={16} alt={''} />
                                <span className='text-[12px]'>بیمه</span>
                            </div>
                            <div className=' mt-5 w-[94px] max-w-full flex flex-wrap lg:flex-nowrap justify-between items-center'>
                                <div className='border rounded  flex flex-wrap lg:flex-nowrap justify-center items-center border-[#1C1C1C] w-[18px] h-[18px]'>
                                    <AddIcon className='lg:text-[12px] !text-[13px] cursor-pointer !w-full' />
                                </div>
                                <span>{toPersianNumber(1)}</span>
                                <div className='border rounded  flex flex-wrap lg:flex-nowrap justify-center items-center border-[#1C1C1C] w-[18px] h-[18px]'>
                                    <RemoveIcon className='lg:text-[12px] !text-[13px] cursor-pointer !w-full !h-[18px]' />
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#CED4DA] w-[2px] h-[100px] lg:hidden block'></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex gap-2">
                        <div className='w-full max-w-full'>
                            <Image src={'/knmjkn.png'} width={88} height={88} alt='' className='hidden lg:block' />
                            <Image src={'/knmjkn.png'} width={66} height={66} alt='' className='lg:hidden  block' />
                            <div className='flex gap-2 hidden lg:block items-center flex-wrap lg:flex-nowrap'>
                                <div className='w-[16px] h-[16px] bg-[#343A40] border border-[#868E96] rounded'></div>
                                <span className='text-[12px]'>ذغالی</span>
                            </div>
                            <div className='w-[94px] hidden lg:block max-w-full mt-3 pl-2 pr-1 py-3 flex flex-wrap lg:flex-nowrap gap-2 items-center h-[20px]  rounded-lg text-white'>
                            </div>
                            <div className=' mt-5 w-[94px] max-w-full flex flex-wrap lg:flex-nowrap justify-between items-center'>
                                <div className='border rounded  flex flex-wrap lg:flex-nowrap justify-center items-center border-[#1C1C1C] w-[18px] h-[18px]'>
                                    <AddIcon className='lg:text-[12px] !text-[13px] cursor-pointer !w-full' />
                                </div>
                                <span>{toPersianNumber(1)}</span>
                                <div className='border rounded  flex flex-wrap lg:flex-nowrap justify-center items-center border-[#1C1C1C] w-[18px] h-[18px]'>
                                    <RemoveIcon className='lg:text-[12px] !text-[13px] cursor-pointer !w-full !h-[18px]' />
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#CED4DA] w-[2px] h-[100px] lg:hidden block'></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex gap-2">
                        <div className='w-full max-w-full'>
                            <Image src={'/knmjkn.png'} width={88} height={88} alt='' className='hidden lg:block' />
                            <Image src={'/knmjkn.png'} width={66} height={66} alt='' className='lg:hidden block' />
                            <div className='flex gap-2 hidden lg:block items-center flex-wrap lg:flex-nowrap'>
                                <div className='w-[16px] h-[16px] bg-[#343A40] border border-[#868E96] rounded'></div>
                                <span className='text-[12px]'>ذغالی</span>
                            </div>
                            <div className='w-[94px] max-w-full hidden lg:flex mt-3 pl-2 pr-1 py-3  flex-wrap lg:flex-nowrap gap-2 items-center h-[20px] bg-[#6741D9] rounded-lg text-white'>
                                <Image src={'/shield-tick.png'} width={16} height={16} alt={''} />
                                <span className='text-[12px]'>بیمه</span>
                            </div>
                            <div className=' mt-5 w-[94px] max-w-full flex flex-wrap lg:flex-nowrap justify-between items-center'>
                                <div className='border rounded flex flex-wrap lg:flex-nowrap justify-center items-center border-[#1C1C1C] w-[18px] h-[18px]'>
                                    <AddIcon className='lg:text-[12px] !text-[13px] cursor-pointer !w-full' />
                                </div>
                                <span>{toPersianNumber(1)}</span>
                                <div className='border rounded flex flex-wrap lg:flex-nowrap justify-center items-center border-[#1C1C1C] w-[18px] h-[18px]'>
                                    <RemoveIcon className='lg:text-[12px] !text-[13px] cursor-pointer !w-full !h-[18px]' />
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#CED4DA] w-[2px] h-[100px] lg:hidden block'></div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="block lg:hidden flex gap-5 mt-5 justify-center">
                <button className='border text-[12px] border-[#97007B] rounded-lg font-bold text-[#97007B] px-8 py-2'>تغییر زمان تحویل</button>
                <div className='flex items-center gap-2'>
                    <p className='text-[#228BE6] text-[12px]'>توضیحات نحوه تحویل</p>
                    <Image src={'/info-circle.png'} width={16} height={16} alt='' />
                </div>
            </div>
        </div>
    )
}

export default SlidesProduct
