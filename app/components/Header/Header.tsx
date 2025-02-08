'use client';
import React from 'react';
import Login from '@/app/components/Login/Login';

const Header = () => {
  return (
    <div className="navbar bg-base-100 flex flex-row justify-between p-[16px]">
      <h1 className="text-[32px] font-semibold">404 Quest</h1>
      <div className="flex gap-[20px]">
        <button
          className="btn"
          onClick={() => {
            (
              document.getElementById('my_modal_5') as HTMLDialogElement | null
            )?.showModal();
          }}
        >
          Log In
        </button>
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller bg-red-50"
        />
      </div>

      <Login id={'my_modal_5'} />
    </div>
  );
};

export default Header;
