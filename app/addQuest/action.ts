"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function addQuest() {
  const supabase = createServerActionClient({ cookies });

  // Отримуємо поточного користувача (якщо є)
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase.from("quest").insert([
    {
      title: "Новий квест",
      description: "Опис квесту",
      time: new Date().toISOString(),
      author: user?.email ?? "Анонім",
      user_id: user?.id || 0, 
    },
  ]);

  if (error) throw new Error(error.message);
}
