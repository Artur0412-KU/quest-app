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

type QuestProps = {
    id: number;
    title: string;
    description: string;
    author: string;
    color: string;
}

type ReviewProps = {
    rating: number;
    text: string;
    setRating: (rating: number) => void;
    setText: (text: string) => void;
    handleChangeText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleReviewSend: () => void;
}

export type { ButtonProps, InputProps, QuestProps, ReviewProps };