import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CheckIcon from '@mui/icons-material/Check';
import Image from 'next/image';
import CachedIcon from '@mui/icons-material/Cached';
import SlidesProduct from './SlidesProduct';
import SlidesDate from './SlidesDate';
import { toPersianNumber } from '../lib/helper/helpers';

export default function ProductInfo() {
    return (
        <div className='max-w-[100%] 2xl:col-span-8 col-span-12 '>
            <div className='border border-gray-200  rounded-xl p-[16px]  bg-white'>
                <div className="lg:flex justify-between hidden">
                    <div className='flex gap-10 items-center h-fit flex-wrap lg:flex-nowrap'>
                        <p className='text-[18px]'>زمان و نحوه تحویل</p>
                        <p className='text-[#1C1C1C]'>{toPersianNumber(2)} مرسوله</p>
                    </div>
                    <div className='relative h-fit'>
                        <button className='text-[#1C7ED6] cursor-pointer border border-[#1C7ED6] rounded-lg px-[8px] py-[6px] pr-[32px] text-[12px]'>بازگشت به سبد خرید</button>
                        <KeyboardArrowRightIcon className='absolute right-2 top-1/2 transform -translate-y-1/2 text-[#1C7ED6]' />
                    </div>
                </div>
                <p className='text-[#1C1C1C] text-[14px] mt-5 font-bold mb-5 lg:mb-0'>شیوه دریافت</p>
                <div className="flex gap-5 lg:justify-center  items-center ">
                    <button className='text-[#339AF0] text-[12px] bg-[#E7F5FF] cursor-pointer border border-[#339AF0] rounded-xl px-[8px] py-[6px]'>تحویل به آدرس شما</button>
                    <span className='text-[14px]'>دریافت از فروشگاه تهران</span>
                </div>
                <div className='bg-[#FFF4E6] rounded-[16px] p-[16px] border border-[#F76707]  mt-5'>
                    <div className="flex justify-between flex-wrap lg:flex-nowrap">
                        <div className='flex gap-5 items-center'>
                            <div className=" rounded-full flex flex-wrap lg:flex-nowrap items-center justify-center bg-[#ff922b] w-[6px] h-[6px] p-[7px]">
                                <CheckIcon className='text-[#F76707] text-white !text-[8px] ' />
                            </div>
                            <p className='text-[#F76707] font-bold'>ارسال به (عنوان آدرس)</p>
                        </div>
                        <Image src={'/location-add.svg'} alt='' width={24} height={24} />
                    </div>
                    <div className='flex flex-wrap lg:flex-nowrap gap-2 items-center mt-5'>
                        <Image src={'/Vector.png'} alt='' width={16} height={16} />
                        <p className='text-[#343A40] '>محمدرضا اکبری</p>
                    </div>
                    <div className='flex gap-2 items-center mt-2'>
                        <Image src={'/Icon 16px.png'} width={16} height={16} alt={''} className='hidden lg:block' />
                        <Image src={'/Icon 16px.png'} width={35} height={35} alt={''} className='lg:hidden block' />
                        <p className='text-[#343A40] lg:block hidden'>تهران, تهران جمالزاده، خیابان آزادی، نرسیده به خیابان قریب، خیابان والعصر، کوچه بزمه / پلاک {toPersianNumber(1434)} / واحد {toPersianNumber(4)}</p>
                        <p className='text-[#343A40] block lg:hidden'>خراسان رضوی, مشهد، وکیل آباد، بلوار هفت تیر، هفت تیر 11، چهارراه اول، پلاک   {toPersianNumber(13)}، واحد  {toPersianNumber(10)}</p>
                    </div>
                </div>
            </div>
            <div className="border-[#F03E3E] border bg-[#FFE3E3] p-[16px] lg:hidden rounded-lg my-3 text-[#F03E3E]">
                این سفارش در چند نوبت (مرسوله) ارسال می‌شود چون شامل کالای سنگین یا روش ارسال متفاوت است.
            </div>
            <div className='bg-[#F1F3F5] rounded-[16px] p-[16px] mt-2 border border-[#CED4DA] text-[#343A40]'>
                <div className="flex flex-wrap lg:flex-nowrap justify-between">
                    <div className="flex gap-3 items-center flex-wrap lg:flex-nowrap">
                        <div className='flex gap-1 flex-wrap lg:flex-nowrap items-center'>
                            <Image src={'/425ec9c71c2768cff9d415e26229674208ae8547.png'} width={24} height={24} alt={''} />
                            <p className='font-bold lg:text-[12px] text-[xl]'>ارسال سریعتر</p>
                        </div>
                        <span className='lg:text-[12px] text-[lg] text-[#495057] lg:text-[#000]'>در این روش کالاها توسط زیترو اکسپرس سریع تر از حالت عادی تحویل شما داده میشود</span>
                    </div>
                    <button className='border hidden lg:block text-[12px] cursor-pointer border-[#97007B] text-[#97007B] rounded-lg px-[8px] py-[6px]'>ارسال با زیترو اکسپرس <CachedIcon className='text-[#97007B]' /></button>
                </div>
                <div className="flex gap-3 lg:gap-5 mt-5 ">
                    <Image className='rounded' src={'/cb78fe776653c8d9b72b43711febdd417b36a497.png'} width={40} height={40} alt={''} />
                    <Image className='rounded' src={'/79d136e8496aa14d6e217222c51a734620603e59.jpg'} width={40} height={40} alt={''} />
                    <Image className='rounded' src={'/5aa4d3720445e675939081397e406236826e8d18.jpg'} width={40} height={40} alt={''} />
                    <Image className='rounded' src={'/cb78fe776653c8d9b72b43711febdd417b36a497.png'} width={40} height={40} alt={''} />
                    <button className='border lg:hidden font-bold block text-[10px] cursor-pointer border-[#97007B] text-[#97007B] rounded-lg px-[8px] py-[6px]'>ارسال با زیترو اکسپرس <CachedIcon className='text-[#97007B] !text-[12px]' /></button>
                </div>
            </div>
            <div className="border mt-2 border-gray-200  rounded-xl p-[16px] ">
                <div className="flex 2xl:gap-10 gap-5 justify-between flex-wrap 2xl:flex-nowrap">
                    <div className="flex gap-4 items-center flex-wrap lg:flex-nowrap">
                        <div className="flex flex-wrap lg:flex-nowrap gap-1 items-center justify-start">
                            <Image src={'/f002180855a125cdaf9a3a402abc12dc0d093357.png'} width={24} height={24} alt={''} />
                            <p className='text-[14px] font-bold'>زیترو پیک</p>
                        </div>
                        <span className='text-[12px] hidden lg:block'>ارسال از {toPersianNumber(1)} روز کاری</span>
                        <div className="flex flex-wrap lg:flex-nowrap hidden lg:block">
                            <div className='bg-[#F1F3F5] rounded-[8px] p-[8px] flex items-center justify-center'>
                                <span className='text-[12px]'>{toPersianNumber(4)} کالا</span>
                            </div>
                        </div>
                        <button className='border hidden lg:block font-bold text-[12px] border-[#97007B] text-[#97007B] rounded-xl cursor-pointer px-[16px] py-[8px]'>انتخاب نحوه ارسال</button>
                    </div>
                    <div className='  items-center gap-1 pl-[88px] hidden lg:flex'>
                        <Image src={'/clock.png'} width={22} height={22} alt={''} />
                        <p className='font-bold text-[#343A40] hidden lg:block text-[13px]'>زمان تحویل به شما</p>
                        <p className='text-[12px] hidden lg:block'>تاریخ و ساعت تحویل را مشخص کنید</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-5 items-center">
                    <SlidesProduct />
                    <SlidesDate />
                </div>
            </div>
        </div>
    )
}
