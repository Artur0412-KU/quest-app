"use client"
import React, {useState} from 'react';
import Image from "next/image";
import CloseSvg from "@/public/icons/close.svg";
import Google from "@/public/icons/google.svg";
import Facebook from "@/public/icons/image.svg";
import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";

const Register = ({id}: {id: string}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [label, setLabel] = useState(false);

    const handleChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }

    const handleChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        console.log(password)
    }

    const handleLabelChange = () => {
        setLabel(!label)
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
                    <h2 className="font-bold text-lg text-[28px] text-center">Create an account</h2>
                    <div className='grid grid-cols-2 gap-[12px]'>
                        <Button image={Google} className={'btn2 btn-active bg-white border-[#dddddd] border rounded-[4px] py-[12px] flex justify-center'}/>
                        <Button image={Facebook} className={'btn2 btn-active bg-white border-[#dddddd] border rounded-[4px] py-[12px] flex justify-center'}/>
                    </div>
                    <div className='flex flex-row items-center justify-center gap-[8px]'>
                        <hr className='bg-[#DDDDDD] w-full'/>
                        <p>or</p>
                        <hr className='bg-[#DDDDDD] w-full'/>
                    </div>
                    <div className='flex flex-col gap-[16px]'>
                        <div className='grid grid-cols-2 gap-[24px]'>
                            <Input name={'First name'} type={'text'} value={firstName} onChange={handleChangeFirstName} className={"input input-bordered w-full bg-[#F8F8F8]"} />
                            <Input name={'Last name'} type={'text'} value={lastName} onChange={handleChangeLastName} className={"input input-bordered w-full bg-[#F8F8F8]"} />
                        </div>
                        <Input name={'Email'} type={'text'} value={email} onChange={handleChangeEmail} className={"input input-bordered w-full bg-[#F8F8F8]"} />

                        <div className='flex flex-col gap-[8px]'>
                            <Input name={'Password'} type={'password'} value={password} onChange={handleChangePassword} className={"input input-bordered w-full bg-[#F8F8F8]"} />
                            <p className='text-[#808080] text-[14px]'>Use 8 or more characters with a
                                mix of
                                letters, numbers and symbols. Must not contain your name or username.
                            </p>


                        </div>
                    </div>


                    <div className="form-control">
                        <label className="cursor-pointer flex flex-row-reverse gap-[16px] justify-end">
                        <span className="label-text">Send me tips, trends, updates & offers.</span>
                            <input type="checkbox" className="checkbox checkbox-primary checked:border-orange-500" onChange={handleLabelChange} />
                        </label>
                    </div>

                    <div className='flex flex-col gap-[8px]'>
                        {(!firstName || !lastName || !email || !password || !label) ?
                            <Button
                                className={"btn2 btn-disabled bg-[#E4572E] rounded-[4px] py-[12px] flex justify-center w-full text-white font-semibold"}
                                text={'Create account'} onClick={() => alert('no')}/>
                            :
                            <Button
                                className={"btn2 btn-active bg-[#E4572E] rounded-[4px] py-[12px] flex justify-center w-full text-white font-semibold cursor-pointer"}
                                text={'Create account'} onClick={() => alert(`Welcome, ${firstName} ${lastName}`)}/>
                        }
                        <p className='text-center text-[#808080] text-[14px]'>Already have a Quest404 Account? <span
                            className='text-[#228EDF] cursor-pointer'
                            onClick={() => {(document.getElementById('my_modal_6') as HTMLDialogElement).close(),
                                (document.getElementById('my_modal_5') as HTMLDialogElement | null)?.showModal()}}>Sign in here</span>
                        </p>
                    </div>

                    <div className='flex flex-col gap-[24px]'>
                        <hr className='h-[1px] bg-[#BBBBBB]'/>
                        <p className='text-[14px] text-[#808080]'>By continuing, you confirm you are 18 or over and agree to our <span className='border-b-[#808080] underline'>Privacy Policy</span> and <span className='border-b-[#808080] underline'>Terms of Use</span>.
                        </p>
                    </div>
                </div>

            </div>
        </dialog>
    );
};

export default Register;