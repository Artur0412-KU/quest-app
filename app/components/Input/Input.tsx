import React from 'react';
import {InputProps} from "@/types/types";

const Input = ({className, name, value, onChange, type, forgotText}: InputProps) => {
    return (
        <div className='flex flex-col gap-[8px]'>
            <div className='flex justify-between'>
                <h3 className='text-[16px] font-semibold'>{name}</h3>
                <h3 onClick={() => alert("Temporally, you can't change the password(")}
                    className='text-[16px] font-semibold text-[#228EDF] cursor-pointer'>{forgotText}</h3>
            </div>

            <input type={type} placeholder=""
                   className={className} value={value}
                   onChange={onChange}/>
        </div>
    );
};

export default Input;