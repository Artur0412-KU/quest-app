"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/src/utils/supabase/client";
import Image from "next/image";
import ListQuests from "./components/Profile/ListQuests";

export default function ProfileClient({ quests }) {
  const supabase = createClient();
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        setAuthenticated(true);
        setUser(session.user);
      } else {
        setAuthenticated(false);
        setUser(null);
      }
    };

    checkAuthStatus();
  }, []);

  return (
    <div className="h-full overflow-hidden bg-white px-12 py-6">
      <div className="flex items-center gap-24 pb-20">
        <div className="avatar">
          <div className="w-64 rounded-full">
            {authenticated && user?.user_metadata?.avatar_url ? (
              <Image
                src={user.user_metadata.avatar_url}
                alt="User avatar"
                width={256}
                height={256}
                className="rounded-full"
              />
            ) : (
              <Image
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Default avatar"
                width={256}
                height={256}
                className="rounded-full"
              />
            )}
          </div>
        </div>
        <h2 className="mb-40 text-3xl font-bold">
          {authenticated ? user?.user_metadata?.full_name || "User" : "Guest"}
        </h2>
      </div>

      {/* Відображення списку квестів */}
      <h2 className="text-xl font-bold mb-4">Список квестів</h2>
      <ul className="mb-4">
        {quests.length ? (
          quests.map((quest) => (
            <li key={quest.user_id} className="p-2 border-b">
              <strong>{quest.title}</strong> – {quest.description} (Автор:{" "}
              {quest.author})
            </li>
          ))
        ) : (
          <p className="text-gray-500">Немає квестів</p>
        )}
      </ul>
    </div>
  );
}
