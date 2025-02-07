import React from 'react';
import {ButtonProps} from "@/types/types";

const Button = ({className, onClick, text}: ButtonProps) => {
    return (
        <button
            className={className}
        onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;

// "btn2 btn-active bg-[#E4572E] rounded-[4px] py-[12px] flex justify-center w-full text-white font-semibold"