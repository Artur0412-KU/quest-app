// "use client";
// import { useEffect, useState } from "react";
// import { createClient } from "@/src/utils/supabase/client";
// import ListQuests from "./components/Profile/ListQuests";
// import Image from "next/image";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const testQuests = [
  {
    id: Math.random(),
    title: "title1",
    description: "desc1",
    author: "auth1",
    time: 10,
  },
  {
    id: Math.random(),
    title: "title2",
    description: "desc2",
    author: "auth2",
    time: 20,
  },
  {
    id: Math.random(),
    title: "title3",
    description: "desc3",
    author: "auth3",
    time: 30,
  },
  {
    id: Math.random(),
    title: "title4",
    description: "desc4",
    author: "auth4",
    time: 40,
  },
  {
    id: Math.random(),
    title: "title5",
    description: "desc5",
    author: "auth5",
    time: 50,
  },
];

import { addQuest } from "../app/addQuest/action"; // Імпортуємо серверну функцію

export default async function Profile() {
  const supabase = createServerComponentClient({ cookies });

  // Отримуємо всі квести
  const { data: quests, error } = await supabase.from("quest").select("*");

  if (error) {
    console.error("Помилка отримання квестів:", error.message);
  }

  return (
    <div className="h-full overflow-hidden bg-white px-12 py-6">
      {/* Відображення списку квестів */}
      <h2 className="text-xl font-bold mb-4">Список квестів</h2>
      <ul className="mb-4">
        {quests?.length ? (
          quests.map((quest) => (
            <li key={quest.user_id} className="p-2 border-b">
              <strong>{quest.title}</strong> – {quest.description} (Автор: {quest.author})
            </li>
          ))
        ) : (
          <p className="text-gray-500">Немає квестів</p>
        )}
      </ul>

      {/* Форма для додавання квесту */}
      <form action={addQuest}>
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white">
          Додати квест
        </button>
      </form>
    </div>
  );
}
// function Profile() {
//   const supabase = createClient();
//   const [authenticated, setAuthenticated] = useState<boolean>(false);
//   const [user, setUser] = useState<any>(null);

//   useEffect(() => {
//     const checkAuthStatus = async () => {
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();

//       if (session) {
//         setAuthenticated(true);
//         setUser(session.user);
//       } else {
//         setAuthenticated(false);
//         setUser(null);
//       }
//     };

//     checkAuthStatus();
//   }, []);

//   return (
//     <div className="h-full overflow-hidden bg-white px-12 py-6">
//       <div className="flex items-center gap-24 pb-20">
//         <div className="avatar">
//           <div className="w-64 rounded-full">
//             {authenticated && user?.user_metadata?.avatar_url ? (
//               <Image
//                 src={user.user_metadata.avatar_url}
//                 alt="User avatar"
//                 width={256}
//                 height={256}
//                 className="rounded-full"
//               />
//             ) : (
//               <Image
//                 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//                 alt="Default avatar"
//                 width={256}
//                 height={256}
//                 className="rounded-full"
//               />
//             )}
//           </div>
//         </div>
//         <h2 className="mb-40 text-3xl font-bold">
//           {authenticated ? user?.user_metadata?.full_name || "User" : "Guest"}
//         </h2>
//       </div>
//       <ListQuests quests={testQuests} />
//     </div>
//   );
// };
