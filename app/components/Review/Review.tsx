"use client"
import React from 'react';
import Button from "@/app/components/Button/Button";
import {ReviewProps} from "@/types/types";

const Review = ({text, rating, setRating, handleChangeText, handleReviewSend}: ReviewProps) => {

    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box p-[48px] max-w-5xl bg-white">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-[32px] p-[16px]">✕
                    </button>
                </form>
                <div className='flex items-center flex-col gap-[16px]'>
                    <h1 className="font-semibold text-[36px] text-center">Share your thoughts on the quest!</h1>
                    <div className="rating rating-lg gap-[8px]">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <input key={item} type="radio" name="rating-8" className="mask mask-star-2 bg-[#ECBA0B]"
                                   checked={rating === item} onChange={() => setRating(item)}/>
                        ))}
                    </div>
                    <div className='w-full flex flex-col gap-[16px] mt-[56px]'>
                            <textarea
                                placeholder="Type here"
                                className="textarea textarea-bordered  w-full h-[160px] bg-gray-100"
                                value={text}
                                onChange={handleChangeText}
                            ></textarea>
                        <Button
                            className={'btn py-[16px] font-semibold bg-[#E4572E] text-white text-[16px] hover:bg-orange-500 border-none w-full' }
                            text={'Leave a review'} onClick={handleReviewSend}/>
                    </div>

                </div>

            </div>
        </dialog>
    );
};

export default Review;