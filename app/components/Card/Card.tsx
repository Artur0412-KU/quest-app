import React from 'react';
import Button from "@/app/components/Button/Button";

const Card = () => {
    return (
        <div className='flex flex-row h-[224px]'>
            <div className='bg-red-600 h-full w-full rounded-l-[16px]'></div>
            <div className='px-[16px] py-[24px] bg-white rounded-r-[16px] flex flex-col gap-[16px] flex justify-center'>
                <h1 className='font-semibold text-[20px]'>Pre-algebra Refresher</h1>
                <p className='text-[14px]'>Review concepts to prepare for Algebra! Translate expressions, integer
                    operations, order of
                    operations, evaluate expressions, solve equations, combine like terms, and identify number
                    properties. Created in cooperation with Mathy Cathy!а</p>
                <div className='flex gap-[8px] mb-[8px]'>
                    <div className='w-[24px] h-[24px] bg-[#D13333] rounded-[50%]'></div>
                    <p className='text-[14px]'>almed-demded</p>
                </div>
            </div>
        </div>
    );
};

export default Card;