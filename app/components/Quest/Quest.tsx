"use client"
import React, {use, useRef, useState} from 'react';
import {questions, quests} from "@/data/data";
import Button from "@/app/components/Button/Button";

type QuestTaskProps = {
    openQuiz: () => void; // Функція відкриття модального вікна
};

const QuestTask = ({openQuiz} : QuestTaskProps) => {
    const [currentQuestion, setCurrentQuest] = useState(0)
    const [score, setScore] = useState(0);
    const [userAnswer, setUserAnswer] = useState<string | boolean>("");
    const [isQuizFinished, setIsQuizFinished] = useState(false)
    const modal = useRef<HTMLDialogElement>(null);
    const resultModal = useRef<HTMLDialogElement>(null)

    const handleAnswer = () => {
        const correctAnswer = questions[currentQuestion].correct;
        setUserAnswer('')

        if (userAnswer === correctAnswer) {
            setScore((prev) => prev + 1)
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuest(currentQuestion + 1)
            setUserAnswer('')
        } else {
            setIsQuizFinished(true)
            modal.current?.close()
            resultModal.current?.showModal()

        }
    }

    return (
        <>
            <dialog ref={modal} id="quest" className="modal ">
                <div className="modal-box bg-white">
                    <h2>{questions[currentQuestion].question}</h2>

                    {questions[currentQuestion].type === "multiple-choice" &&
                        Array.isArray(questions[currentQuestion].options) &&
                        questions[currentQuestion].options.map((option) => (
                            <Button text={option} className={`block w-full p-2 mt-2 border rounded ${
                                userAnswer === option ? "bg-orange-300" : ""
                            }`} onClick={() => setUserAnswer(option)}/>
                        ))}


                    {questions[currentQuestion].type === "true-false" && (
                        <div className="mt-3 grid grid-cols-2 gap-[16px]">
                            <Button onClick={() => setUserAnswer(true)}
                                    className={`px-4 py-2 border rounded ${userAnswer === true ? "bg-orange-300" : ""}`}
                                    text={'True'}/>
                            <Button onClick={() => setUserAnswer(false)}
                                    className={`px-4 py-2 border rounded ${userAnswer === false ? "bg-orange-300" : ""}`}
                                    text={'False'}/>
                        </div>
                    )}

                    {questions[currentQuestion].type === 'open' && (
                        <div className="mt-3">
                            <input value={userAnswer as string} onChange={(e) => setUserAnswer(e.target.value)}
                                   placeholder="Enter your answer" className="w-full mt-3 p-2 border rounded"/>
                        </div>
                    )}

                    {questions[currentQuestion].type === 'abc' && (
                        <div className="mt-3">
                            {Object.entries(questions[currentQuestion].options).map(([key, value]) => (
                                <Button key={key} onClick={() => setUserAnswer(key)}
                                        className={`block w-full p-2 mt-2 border rounded ${
                                            userAnswer === key ? "bg-orange-300" : ""
                                        }`}
                                        text={`${key}: ${value}`}
                                />
                            ))}
                        </div>
                    )}


                    <Button onClick={handleAnswer} className="mt-4 px-4 py-2 bg-orange-500 w-full text-white rounded"
                            text={'Next'}/>
                </div>
            </dialog>

            {score > 5 ? (
                <dialog ref={resultModal} id='result-modal' className='modal'>
                    <div className="modal-box bg-white text-center">
                        <h2 className="text-xl font-bold">🎉 Congratulations, you won! 🎉</h2>
                        <p className="mt-2">
                            Your score: <b>{score} / {questions.length}</b>
                        </p>
                        <Button
                            onClick={() => resultModal.current?.close()}
                            className="mt-4 px-4 py-2 bg-orange-500 w-[80%] text-white rounded"
                            text={"Close"}
                        />
                    </div>
                </dialog>
            ) : (
                <dialog ref={resultModal} id='result-modal' className='modal'>
                    <div className="modal-box bg-white text-center">
                        <h2 className="text-xl font-bold">🥺 Sorry, you lost :( 🥺</h2>
                        <p className="mt-2">
                            Your score: <b>{score} / {questions.length}</b>
                        </p>
                        <Button
                            onClick={() => resultModal.current?.close()}
                            className="mt-4 px-4 py-2 bg-orange-500 w-[80%] text-white rounded"
                            text={"Close"}
                        />
                    </div>
                </dialog>
            )}

        </>


    );
};

export default QuestTask;