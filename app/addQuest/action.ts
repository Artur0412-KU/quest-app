"use server";

// import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

// export async function addQuest(
//   title: string,
//   description: string,
//   img: string,
//   img_bg: string,
//   type: string,
//   subtasks: { id: number; name: string }[]
// ) {
//   // Створюємо клієнт Supabase з cookies як функцією
//   const supabase = createServerActionClient({ cookies });

//   // Отримуємо дані користувача з Supabase
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   // Вставляємо новий запис в таблицю "quest"
//   const { error } = await supabase.from("quest").insert([
//     {
//       title,
//       description,
//       time: new Date().toISOString(),
//       author: user?.email ?? "Анонім",
//       user_id: user?.id || 0,
//       img,
//       img_bg,
//       type,
//       subtasks,
//     },
//   ]);

//   // Якщо сталася помилка при вставці, викидаємо її
//   if (error) throw new Error(error.message);
// }

// =====================================================

// import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

// export async function addQuest(
//   title: string,
//   description: string,
//   img: string,
//   img_bg: string,
//   type: string,
//   subtasks: { id: number; name: string }[]
// ) {
//   // Огортаємо cookies() у функцію, яка повертає Promise
//   const cookiesData = async () => {
//     return cookies();
//   };

//   // Створюємо клієнт Supabase, передаючи cookies як асинхронну функцію
//   const supabase = createServerActionClient({ cookies: cookiesData });

//   // Отримуємо дані користувача з Supabase
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   // Вставляємо новий запис в таблицю "quest"
//   const { error } = await supabase.from("quest").insert([
//     {
//       title,
//       description,
//       time: new Date().toISOString(),
//       author: user?.email ?? "Анонім",
//       user_id: user?.id || 0,
//       img,
//       img_bg,
//       type,
//       subtasks,
//     },
//   ]);

//   // Якщо сталася помилка при вставці, викидаємо її
//   if (error) throw new Error(error.message);
// }



"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function addQuest(
  title: string,
  description: string,
  img: string,
  img_bg: string,
  type: string,
  subtasks: { id: number; name: string }[]
) {
  const supabase = createServerActionClient({ cookies });

  // Отримуємо поточного користувача (якщо є)
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase.from("quest").insert([
    {
      title,
      description,
      time: new Date().toISOString(),
      author: user?.email ?? "Анонім",
      user_id: user?.id || 0,
      img,
      img_bg,
      type,
      subtasks,
    },
  ]);

  if (error) throw new Error(error.message);
}
