'use client'
import React from 'react'
import '../styles/Facture.scss'
import Image from 'next/image'
import { toPersianNumber } from '../lib/helper/helpers'
import { useMediaQuery, useTheme } from '@mui/material';
import MobileFacture from './MobileFacture'

export default function Facture() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            {
                isMobile ?
                    <MobileFacture />
                    :
                    <div className='border 2xl:col-span-4 col-span-12 border-gray-200 rounded-xl p-[16px] cols-box-shadow max-w-[100%]'>
                        <div className='flex justify-start max-w-[100%] flex-wrap lg:flex-nowrap'>
                            <p className='text-[18px]'>صورتحساب</p>
                        </div>
                        <ul className='flex flex-col gap-[14px] mt-10 max-w-[100%] flex-wrap lg:flex-nowrap'>
                            <li className='flex justify-between max-w-[100%] flex-wrap lg:flex-nowrap'>
                                <p className='text-[14px] text-[rgba(73, 80, 87, 1)]'>نحوه خرید</p>
                                <div className='flex items-center gap-2 flex-wrap lg:flex-nowrap'>
                                    <p className='text-[16px] font-bold'>دیچی پی</p>
                                    <Image src="/Bank logo.png" width={24} height={24} alt="" />
                                </div>
                            </li>
                            <div className='h-[1px] w-full bg-[#DEE2E6]'></div>
                            <li className='flex justify-between max-w-[100%] flex-wrap lg:flex-nowrap'>
                                <p className='text-[14px] text-[rgba(73, 80, 87, 1)]'>قیمت کالاها <span className='text-[#F76707]'>({toPersianNumber(3)} کالا)</span></p>
                                <div className='flex items-center gap-2 flex-wrap lg:flex-nowrap'>
                                    <p className=''>{toPersianNumber(37_280_000)} تومان</p>
                                </div>
                            </li>
                            <div className='h-[1px] w-full bg-[#DEE2E6]'></div>
                            <li className='flex justify-between max-w-[100%] flex-wrap lg:flex-nowrap'>
                                <p className='text-[14px] text-[rgba(73, 80, 87, 1)]'>میزان تسهیلات درخواستی</p>
                                <div className='flex items-center gap-2 flex-wrap lg:flex-nowrap'>
                                    <p className=''>{toPersianNumber(50_000_000)} تومان</p>
                                </div>
                            </li>
                            <div className='h-[1px] w-full bg-[#DEE2E6]'></div>
                            <li className='flex justify-between max-w-[100%] flex-wrap lg:flex-nowrap'>
                                <p className='text-[14px] text-[rgba(73, 80, 87, 1)]'>هزینه ی بیمه ها</p>
                                <div className='flex items-center gap-2 flex-wrap lg:flex-nowrap'>
                                    <p className=''>{toPersianNumber(50_000_000)} تومان</p>
                                </div>
                            </li>
                            <div className='h-[1px] w-full bg-[#DEE2E6]'></div>
                            <li className='flex justify-between max-w-[100%] flex-wrap lg:flex-nowrap'>
                                <p className='text-[14px] text-[rgba(73, 80, 87, 1)]'>هزینه ی بسته بندی و ارسال (دو مرسوله)</p>
                                <div className='flex items-center gap-2 flex-wrap lg:flex-nowrap'>
                                    <p className=''>{toPersianNumber(50_000_000)} تومان</p>
                                </div>
                            </li>
                            <div className='h-[1px] w-full bg-[#DEE2E6]'></div>
                            <li className='flex justify-between max-w-[100%] flex-wrap lg:flex-nowrap'>
                                <p className='text-[14px] text-[rgba(73, 80, 87, 1)]'>مابه التفاوت نقدی</p>
                                <div className='flex items-center gap-2 flex-wrap lg:flex-nowrap'>
                                    <p className=''>{toPersianNumber(0)} تومان</p>
                                </div>
                            </li>
                            <div className='h-[1px] w-full bg-[#DEE2E6]'></div>
                            <li className='flex justify-between max-w-[100%] flex-wrap lg:flex-nowrap'>
                                <p className='text-[14px] text-[#FF6B6B]'>سود شما از این خرید</p>
                                <div className='flex items-center gap-2 flex-wrap lg:flex-nowrap'>
                                    <p className='text-[#FF6B6B]'>{toPersianNumber(0)} تومان</p>
                                </div>
                            </li>
                            <div className='h-[1px] w-full bg-[#DEE2E6]'></div>
                        </ul>
                        <div className='mt-5 flex items-center gap-3 max-w-[100%] flex-wrap lg:flex-nowrap'>
                            <input name='coupon' type="text" placeholder='کد تخفیف' className='bg-[#F8F9FA] grow  w-full h-[48px] border border-[#DEE2E6] rounded-md p-2 w-[381px] text-[#ADB5BD]' />
                            <button type='button' className=' rounded-md border border-[#343A40] py-[10px] 2xl:px-[12px] w-[88px] h-[48px] cursor-pointer'>ثبت کد</button>
                        </div>
                        <div className='bg-[#E7F5FF] flex  gap-4 max-w-[100%] items-center mt-5 py-[12px] px-[24px] w-full h-[72px] rounded-[12px]'>
                            <Image src='/Icon 16px.svg' width={16} height={16} alt='' />
                            <span className='text-[#1C7ED6] text-[11px]'>ﻫﺰﯾﻨﻪ ارﺳﺎل در اداﻣﻪ ﺑﺎ ﻣﺸﺨﺺ ﺷﺪن آدرس، زﻣﺎن و ﻧﺤﻮه ارﺳﺎل ﻣﺸﺨﺺ و ﺑﻪ ﻫﺰﯾﻨﻪ ﻧﻬﺎﯾﯽ اﺿﺎﻓﻪ ﺧﻮاﻫﺪ ﺷﺪ.</span>
                        </div>
                        <div className='flex gap-2 flex-wrap lg:flex-nowrap items-center mt-5 max-w-[100%]'>
                            <input type="checkbox" name="checkbox" id="" />
                            <p>صدور فاکتور رسمی</p>
                        </div>
                        <div className='flex flex-wrap lg:flex-nowrap gap-2 items-center mt-2 max-w-[100%]'>
                            <input type="checkbox" name="checkbox" id="" />
                            <p>سفارش بصورت حقوقی ثبت شود</p>
                        </div>
                        <div className='h-[1px] w-full bg-[#DEE2E6] mt-5'></div>
                        <div className='flex flex-wrap lg:flex-nowrap items-center justify-between mt-5 max-w-[100%]'>
                            <button className='bg-[#12B886] cursor-pointer text-[12px] py-[11px] px-[10px] w-[174px]  rounded-md text-white'>
                                انتخاب نحوه پرداخت
                            </button>
                            <div className='flex flex-col flex-wrap lg:flex-nowrap gap-2'>
                                <p className='text-[12px]'>مبلغ قابل پرداخت</p>
                                <p><span className='font-bold'>{toPersianNumber(60_648_018)}</span> تومان</p>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}
