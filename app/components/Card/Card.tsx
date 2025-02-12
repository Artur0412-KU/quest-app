"use client"
import React from 'react';
import {useParams, useRouter} from "next/navigation";
import {QuestProps} from "@/types/types";

const Card = ({ id, title, description, author, color }: QuestProps) => {
    const router = useRouter()

    return (
        <div className="flex flex-row h-[224px] cursor-pointer" onClick={() => router.push(`/quests/${id}`)}>
            <div className="h-full w-[40%] rounded-l-[16px]" style={{backgroundColor: color}}></div>
            <div
                className="px-[16px] py-[24px] w-[60%] bg-white rounded-r-[16px] flex flex-col gap-[16px] justify-center">
                <h1 className="font-semibold text-[20px]">{title}</h1>
                <p className="text-[14px] line-clamp-3">{description}</p>
                <div className="flex gap-[8px] mb-[8px] items-center">
                    <div className="w-[24px] h-[24px] rounded-[50%]" style={{backgroundColor: color}}></div>
                    <p className="text-[14px]">{author}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;