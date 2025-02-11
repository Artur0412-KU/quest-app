import React from 'react';
import Map from "@/app/components/Map/Map";
import Card from "@/app/components/Card/Card";
import {quests} from "@/data/data";

const Page = () => {
    return (
        <div className='h-screen bg-gray-200 p-[80px]'>
            <h1 className='text-[36px] font-semibold text-center'>All quests</h1>
            <div className='grid grid-cols-2 gap-[32px] mt-[54px] max-lg:flex flex-col'>
                {quests.map((item) => (
                    <Card key={item.id} title={item.title} description={item.description} color={item.color} id={item.id}
                          author={''} />
                ))}

            </div>

        </div>
    );
};

export default Page;