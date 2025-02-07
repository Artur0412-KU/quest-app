'use client'
import React, {useState} from 'react';
import CloseSvg from '@/public/icons/close.svg'
import Google from '@/public/icons/google.svg'
import Facebook from '@/public/icons/image.svg'
import Image from "next/image";
import Button from "@/app/components/Button/Button";

const Login = ({id}: {id: string}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        console.log(username)
    }

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        console.log(password)
    }
    return (
        <dialog id={id} className="modal modal-bottom sm:modal-middle ">
            <div className="modal-box bg-white rounded-[8px] px-[32px] pt-[24px] pb-[40px]">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        <Image src={CloseSvg} alt={'close'}/>
                    </button>
                </form>
                <div className='flex flex-col gap-[32px]'>
                    <h2 className="font-bold text-lg text-[28px] text-center">Log in</h2>
                    <div className='grid grid-cols-2 gap-[12px]'>
                        <button className="btn2 btn-active bg-white border-[#dddddd] border rounded-[4px] py-[12px] flex justify-center">
                            <Image src={Google} alt={'google'} />
                        </button>
                        <button className="btn2 btn-active bg-white border-[#dddddd] border rounded-[4px] py-[12px] flex justify-center">
                            <Image src={Facebook} alt={'facebook'} />
                        </button>
                    </div>
                    <div className='flex flex-row items-center justify-center gap-[8px]'>
                        <hr className='bg-[#DDDDDD] w-full'/>
                        <p>or</p>
                        <hr className='bg-[#DDDDDD] w-full'/>
                    </div>
                    <div className='flex flex-col gap-[16px]'>
                        <div className='flex flex-col gap-[8px]'>
                            <h3 className='text-[16px] font-semibold'>Username or Email</h3>
                            <input type="text" placeholder="Type here"
                                   className="input input-bordered w-full bg-[#F8F8F8]" value={username} onChange={(e) => handleChangeUsername(e)}/>
                        </div>

                        <div className='flex flex-col gap-[8px]'>
                            <div className='flex justify-between'>
                                <h3 className='text-[16px] font-semibold'>Password</h3>
                                <h3 onClick={() => alert("Temporally, you can't change the password(")} className='text-[16px] font-semibold text-[#228EDF] cursor-pointer'>Forgot</h3>
                            </div>

                            <input type="password" placeholder=""
                                   className="input input-bordered w-full bg-[#F8F8F8]" value={password} onChange={(e) => handleChangePassword(e)}/>
                        </div>

                        <div className='flex flex-col gap-[8px]'>
                            {!username || !password ?
                                <Button className={"btn2 btn-disabled bg-[#E4572E] rounded-[4px] py-[12px] flex justify-center w-full text-white font-semibold"} text={'Log In'} onClick={() => alert('no')}/>
                                :
                                <Button className={"btn2 btn-active bg-[#E4572E] rounded-[4px] py-[12px] flex justify-center w-full text-white font-semibold cursor-pointer"} text={'Log In'} onClick={() => alert('Welcome!')}/>
                            }
                            <p className='text-center text-[#808080] text-[14px]'>New here? <span
                                className='text-[#228EDF] cursor-pointer'
                                onClick={() => alert("Temporally, you can't create account(")}>Create a 404Quest account</span></p>
                        </div>

                    </div>
                </div>

            </div>
        </dialog>
    );
};

export default Login;