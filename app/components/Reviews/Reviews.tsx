"use client"
import React, {useState} from 'react';
import Button from "@/app/components/Button/Button";
import Review from "@/app/components/Review/Review";

const Reviews = () => {
    const [review, setReview] = useState<{rating: number, text:string}[]>([]);
    const [rating, setRating] = useState(0)
    const [text, setText] = useState('')

    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }

    const handleReviewSend = () => {
        if(rating >= 0 && text.trim() !== "") {
            setReview([...review, {rating, text}])
            setRating(0)
            setText("")
        }
    }

    return (
        <div className='pt-[80px]'>
            <div className='flex justify-between'>
                <h1 className='text-[36px] font-semibold'>Reviews</h1>
                <Button text={'Write a review'} onClick={() => {(document.getElementById('my_modal_1') as HTMLDialogElement | null)?.showModal()}}
                        className={'border-orange-500 border-[2px] text-orange-600 font-bold rounded-[4px] py-[12px] px-[49px]'}/>
            </div>

            <Review handleReviewSend={handleReviewSend} text={text} handleChangeText={handleChangeText} rating={rating} setRating={setRating} setText={setText} />


                {review.map((item, index) => {
                    const ratingArr = [...Array(item.rating)].map((_, i) => i + 1)
                    return(
                        <div key={index} className='flex flex-col gap-[16px] mt-[40px]'>
                            <div className='bg-white px-[32px] py-[24px] rounded-[12px]'>
                                <div className="rating rating-sm flex justify-end gap-[8px]">
                                    {ratingArr.map((star) => (
                                        <input key={star} type="radio" name="rating-8"
                                               className="mask mask-star-2 w-[24px] bg-[#ECBA0B]" defaultChecked={false} disabled={true}/>
                                    ))}
                                </div>
                                <h1>{item.text}</h1>
                            </div>
                        </div>
                    )
                })}



        </div>
    );
};

export default Reviews;