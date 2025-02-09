import React from 'react';
import Image from "next/image";
import Close from "@/public/icons/close.svg";
import Link from "next/link";
import Button from "@/app/components/Button/Button";
import BurgerImage from '@/public/icons/burger-menu.svg'

const BurgerMenu = () => {
    return (
        <div className="drawer drawer-end hidden max-lg:flex max-lg:justify-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content">
                <label htmlFor="my-drawer-4">
                    <Image src={BurgerImage} alt={''} className='w-[32px] drawer-button'/>
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-white text-base-content min-h-full w-80 p-4 gap-[32px] text-[18px]">
                    <li className="flex justify-start gap-[32px] min-h-full bg-white">
                        <label htmlFor="my-drawer-4" style={{backgroundColor: 'white'}}>
                            <Image src={Close} alt={''} className='w-[32px]'/>
                        </label>
                        <label htmlFor="my-drawer-4" style={{backgroundColor: 'white'}}>
                            <Link href={'/'} className='font-medium '>Main page</Link>
                        </label>
                        <label htmlFor="my-drawer-4" style={{backgroundColor: 'white'}}>
                            <Link href={'/quests'} className='font-medium '>All quests</Link>
                        </label>
                        <label htmlFor="my-drawer-4" style={{backgroundColor: 'white'}}>
                            <Link href={'/questions'} className='font-medium '>FAQ</Link>
                        </label>
                        <Button
                            className={"btn py-[16px] px-[28px] font-semibold bg-white text-[#E4572E] border-[#E4572E] border-[2px] hover:border-orange-500 hover:bg-white hover:text-orange-500 "}
                            onClick={() => alert('Creating a quest will be soon ^)')} text={'Create a quest'}/>
                        <Button
                            className={"btn py-[16px] px-[28px] font-semibold bg-[#E4572E] text-white hover:bg-orange-500 border-none"}
                            onClick={() => {
                                (document.getElementById('my_modal_5') as HTMLDialogElement | null)?.showModal()
                            }} text={'Log In'}/>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default BurgerMenu;