// import { createClient } from '../utils/supabase/client';

import { createServerClient } from "@supabase/ssr";

// export async function createQuest(title: string, description: string, time: number) {
//   const user = createClient.auth.user();

//   if (!user) {
//     throw new Error('User not authenticated');
//   }

//   const { data, error } = await createClient
//     .from('quests')
//     .insert([
//       {
//         title,
//         description,
//         time,
//         author: user.email,
//         user_id: user.id,
//       },
//     ]);

//   if (error) {
//     console.error(error);
//     return null;
//   }

//   return data;
// }

// export async function getUserQuests() {
//   const user = createClient.auth.user();

//   if (!user) {
//     throw new Error('User not authenticated');
//   }

//   const { data, error } = await createClient
//     .from('quests')
//     .select('*')
//     .eq('user_id', user.id);

//   if (error) {
//     console.error(error);
//     return [];
//   }

//   return data;
// }

