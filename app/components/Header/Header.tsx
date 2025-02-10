'use client';
import React from 'react';
import Login from '@/app/components/Login/Login';
import Register from '@/app/components/Register/Register';
import Logo from '@/public/main/404logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/components/Button/Button';
import BurgerMenu from '@/app/components/BurgerMenu/BurgerMenu';

const Header = () => {
  return (
    <div className="navbar bg-base-100 flex flex-row justify-between px-[80px] py-[20px] max-lg:px-[32px]">
      <div className="flex items-center justify-between gap-[48px]">
        <Image src={Logo} alt={'logo'} />
        <div className="flex gap-[16px] max-lg:hidden">
          <Link href={'/'} className="font-medium">
            Main page
          </Link>
          <Link href={'/quests'} className="font-medium">
            All quests
          </Link>
          <Link href={'/questions'} className="font-medium">
            FAQ
          </Link>
        </div>
      </div>

      <div className="flex gap-[16px] max-lg:hidden">
        <Button
          className={
            'btn border-[2px] border-[#E4572E] bg-white px-[28px] py-[16px] font-semibold text-[#E4572E] hover:border-orange-500 hover:bg-white hover:text-orange-500'
          }
          onClick={() => alert('Creating a quest will be soon ^)')}
          text={'Create a quest'}
        />
        <Button
          className={
            'btn border-none bg-[#E4572E] px-[28px] py-[16px] font-semibold text-white hover:bg-orange-500'
          }
          onClick={() => {
            (
              document.getElementById('my_modal_5') as HTMLDialogElement | null
            )?.showModal();
          }}
          text={'Log In'}
        />
      </div>

      <BurgerMenu />

      <Login id={'my_modal_5'} />
      <Register id={'my_modal_6'} />
    </div>
  );
};

export default Header;
