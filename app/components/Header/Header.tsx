"use client";
import React from "react";
import Login from "@/app/components/Login/Login";
import Register from "@/app/components/Register/Register";
import Logo from "@/public/main/404logo.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/Button/Button";

const Header = () => {
  return (
    <div className="navbar bg-base-100 py-[20px] px-[80px] flex flex-row justify-between bg-white max-lg:px-[32px]">
      <div className="flex items-center justify-between gap-[48px]">
        <Image src={Logo} alt={"logo"} />
        <div className="flex gap-[16px]">
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

      <div className="flex gap-[16px]">
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
              document.getElementById("my_modal_5") as HTMLDialogElement | null
            )?.showModal();
          }}
          text={"Log In"}
        />
      </div>

      <Login id={"my_modal_5"} />
      <Register id={"my_modal_6"} />
    </div>
  );
};

export default Header;
