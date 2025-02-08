import React from "react";

type ButtonProps = {
    className?: string;
    onClick?: () => void;
    text?: string;
    image?: string;
}

type InputProps = {
    className?: string;
    name: string;
    forgotText?: string;
    type: string;
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { ButtonProps, InputProps };