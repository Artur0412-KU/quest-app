"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Arrow from '@/public/icons/Frame.svg';


const quests = [
];

const Quest = () => {


    return (
        <div className="px-[80px] py-[40px] bg-gray-200">
            <Link href={'/quests'} className="flex items-center gap-[8px]">
                <Image src={Arrow} alt={''} />
                All quests
            </Link>
            <div className="mt-8 flex flex-row items-center bg-white p-[24px] gap-[32px]">
                <div className='h-[372px] w-[520px] bg-red-600 rounded-[8px]'></div>
                <div className='flex flex-col items-start gap-[16px]'>
                    <h1 className='font-semibold text-[36px]'>Pre-algebra Refresher</h1>
                    <p className='font-normal'>Review concepts to prepare for Algebra! Translate expressions, integer operations, order of
                        operations, evaluate expressions, solve equations, combine like terms, and identify number
                        properties. Created in cooperation with Mathy Cathy!а. Review concepts to prepare for Algebra!
                        Translate expressions, integer operations, order of operations.</p>
                    <div className='flex items-center gap-[16px]'>
                        <div className='h-[32px] w-[32px] bg-red-600 rounded-[50%]'></div>
                        <p>almed-demded</p>
                        <p>• 24 tasks</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Quest;
