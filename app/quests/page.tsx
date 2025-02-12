
// import React from 'react';
// import Map from "@/app/components/Map/Map";
// import Card from "@/app/components/Card/Card";
// import {quests} from "@/data/data";

// const Page = () => {
//     return (
//         <div className='h-screen bg-gray-200 p-[80px]'>
//             <h1 className='text-[36px] font-semibold text-center'>All quests</h1>
//             <div className='grid grid-cols-2 gap-[32px] mt-[54px] max-lg:flex flex-col'>
//                 {quests.map((item) => (
//                     <Card key={item.id} title={item.title} description={item.description} color={item.color} id={item.id}
//                           author={''} />
//                 ))}

//             </div>

//         </div>
//     );
// };

// export default Page;

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import React from 'react';

import Card from "@/app/components/Card/Card";

// Визначення інтерфейсу для квестів
interface Quest {
  id: string; // або number
  title: string;
  description: string;
  time: string;
  author: string;
  user_id: number;
  img: string;
  img_bg: string;
  type: string;
  subtasks: string[];
}

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });

  // Отримуємо всі квести з бази даних
  const { data: quests, error } = await supabase.from("quest").select("*");

  if (error) {
    console.error("Помилка отримання квестів:", error.message);
    return <p className="text-gray-500">Немає квестів</p>; // Якщо є помилка, відображаємо повідомлення
  }

  return (
    <div className="h-screen bg-gray-200 p-[80px]">
      <h1 className="text-[36px] font-semibold text-center">All quests</h1>
      <div className="grid grid-cols-2 gap-[32px] mt-[54px] max-lg:flex flex-col">
        {quests.length ? (
          quests.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              color={item.type} // Якщо `color` є типом
              id={item.id}
              author={item.author}
              // img={item.img}
              // img_bg={item.img_bg}
            />
          ))
        ) : (
          <p className="text-gray-500">Немає квестів</p>
        )}
      </div>
    </div>
  );
}
