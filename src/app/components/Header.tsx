'use client'
import Image from 'next/image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useEffect, useRef } from 'react';

function Header() {
  return (
    <div
      className="flex lg:justify-center justify-between  px-[30px] py-[24px] header-mobile  w-full z-[100] sm:static lg:container lg:mx-auto"
      dir="rtl"
    >
      <Image src="/Logo and search.svg" alt="Vercel Logo" width={100} height={24} className="max-w-full hidden lg:block" />
      <Image src="/Logo and search.svg" alt="Vercel Logo" width={88} height={32} className="max-w-full  block lg:hidden" />
      <div className="flex items-center gap-2 lg:hidden ">
        <ArrowForwardIosIcon className='!text-[14px]' />
        <button className='text-[#343A40] !text-[14px]'>بازگشت به سبد خرید </button>
      </div>
    </div>
  );
}

export default Header;