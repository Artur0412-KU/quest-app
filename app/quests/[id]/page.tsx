"use client"
import React, {useRef} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Arrow from '@/public/icons/Frame.svg';
import Button from "@/app/components/Button/Button";
import Reviews from "@/app/components/Reviews/Reviews";
import QuestTask from "@/app/components/Quest/Quest";


const Quest = () => {
    const modal = useRef<HTMLDialogElement>(null);
    const openQuiz = () => {
        modal.current?.showModal()
    }
    return (
        <div className="px-[80px] py-[40px] bg-gray-200 h-screen">
            <Link href={'/quests'} className="flex items-center gap-[8px]">
                <Image src={Arrow} alt={''} />
                All quests
            </Link>
            <div className="mt-8 flex flex-row items-center bg-white p-[24px] gap-[32px]">
                <div className='h-[372px] w-[50%] bg-red-600 rounded-[8px]'></div>
                <div className='flex flex-col items-start gap-[61px]'>
                    <div className='flex flex-col gap-[16px]'>
                        <h1 className='font-semibold text-[36px]'>Pre-algebra Refresher</h1>
                        <p className='font-normal'>Review concepts to prepare for Algebra! Translate expressions,
                            integer operations, order of
                            operations, evaluate expressions, solve equations, combine like terms, and identify number
                            properties. Created in cooperation with Mathy Cathy!а. Review concepts to prepare for
                            Algebra!
                            Translate expressions, integer operations, order of operations.</p>
                        <div className='flex items-center gap-[16px] mt-[8px]'>
                            <div className='h-[32px] w-[32px] bg-red-600 rounded-[50%]'></div>
                            <p>almed-demded</p>
                            <p>• 24 tasks</p>
                        </div>

                    </div>
                    <div className='grid grid-cols-2 gap-[16px] w-full'>
                        <Button
                            className={"btn py-[16px] px-[28px] font-semibold bg-[#E4572E] text-white hover:bg-orange-500 border-none"}
                            text={'Play solo'} onClick={() => {(document.getElementById('quest') as HTMLDialogElement | null)?.showModal()}}/>
                        <Button
                            className={"btn py-[16px] px-[28px] font-semibold bg-white text-[#E4572E] border-[#E4572E] border-[2px] hover:border-orange-500 hover:bg-white hover:text-orange-500 "}
                            text={'Host live'}/>
                    </div>


                </div>

            </div>
            <QuestTask openQuiz={openQuiz}/>
            <Reviews/>
        </div>
    );
};

export default Quest;
