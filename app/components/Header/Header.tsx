"use client";
import React, { useEffect, useState } from "react";
import Login from "@/app/components/Login/Login";
import Register from "@/app/components/Register/Register";
import Logo from "@/public/main/404logo.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/Button/Button";
import BurgerMenu from "@/app/components/BurgerMenu/BurgerMenu";
import { createClient } from "@/src/utils/supabase/client";
import { logout } from "@/app/logaut/actions";

const Header = () => {
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

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session) {
          setAuthenticated(true);
          setUser(session.user);
        } else {
          setAuthenticated(false);
          setUser(null);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase, user]);

  const logoutHendler = async () => {
    await logout();
    setAuthenticated(false);
    setUser(null);
  };

  return (
    <div className="navbar bg-base-100 py-[20px] px-[80px] flex flex-row justify-between bg-white max-lg:px-[32px]">
      <div className="flex items-center justify-between gap-[48px]">
        <Image src={Logo} alt={"logo"} />
        <div className="flex gap-[16px] max-lg:hidden">
          <Link href={"/"} className="font-medium">
            Main page
          </Link>
          <Link href={"/quests"} className="font-medium">
            All quests
          </Link>
          <Link href={"/questions"} className="font-medium">
            FAQ
          </Link>
        </div>
      </div>

      <div className="flex gap-[16px] max-lg:hidden">
        {!authenticated ? (
          <>
            <Button
              className={
                "btn py-[16px] px-[28px] font-semibold bg-white text-[#E4572E] border-[#E4572E] border-[2px] hover:border-orange-500 hover:bg-white hover:text-orange-500 "
              }
              onClick={() => alert("Creating a quest will be soon ^)")}
              text={"Create a quest"}
            />
            <Button
              className={
                "btn py-[16px] px-[28px] font-semibold bg-[#E4572E] text-white hover:bg-orange-500 border-none"
              }
              onClick={() => {
                (
                  document.getElementById(
                    "my_modal_5"
                  ) as HTMLDialogElement | null
                )?.showModal();
              }}
              text={"Log In"}
            />
          </>
        ) : (
          <>
            <Button
              className={
                "btn py-[16px] px-[28px] font-semibold bg-white text-[#E4572E] border-[#E4572E] border-[2px] hover:border-orange-500 hover:bg-white hover:text-orange-500 "
              }
              onClick={() => alert("Creating a quest will be soon ^)")}
              text={"Create a quest"}
            />
            <div className="flex items-center gap-[12px]">
              <Link rel="stylesheet" href="/profile">
                <Image
                  src={
                    user?.user_metadata?.avatar_url ||
                    "/public/profile-default.png"
                  }
                  alt="Profile Picture"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Link>

              <div>
                <button
                  className="btn py-[16px] px-[28px] font-semibold bg-[#E4572E] text-white hover:bg-orange-500 border-none"
                  onClick={logoutHendler}
                >
                  Logout
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <BurgerMenu />

      <Login id={"my_modal_5"} />
      <Register id={"my_modal_6"} />
    </div>
  );
};

export default Header;
