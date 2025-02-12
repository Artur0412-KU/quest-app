"use client"
import React, {useRef, useState} from 'react';
import {tasks} from "@/data/data";
import Button from "@/app/components/Button/Button";

const Map = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const ref = useRef<(HTMLDetailsElement | null)[]>([]);
    const [selected, setSelected] = useState<{[key: number]: { [key: number]: boolean}}>({});

    const activeIndexChange = (index: number) => {
       if (activeIndex === index) {
           setActiveIndex(null);
       } else {
           setActiveIndex(index);
       }
   }

    const handleCompleted = (taskId: number, itemId: number) => {
       setSelected((prev) => ({
           ...prev,
           [taskId]: {
               ...prev[taskId],
               [itemId]: !(prev[taskId]?.[itemId]),
           }
       }))
   }

   const handleReset = () => {
        setSelected({});
   }

     const allCheckedTasks = (task: {id: number; list: {id: number}[]}) => {
       return task.list.length > 0 && task.list.every((item) => selected[task.id]?.[item.id] === true)

     }

     return (
        <div className='flex items-start flex-col justify-center p-[64px] px-[200px] gap-[32px]'>
            <div className='flex gap justify-between items-center w-full'>
                {tasks.map((task, index) => {
                    const chckedAll = allCheckedTasks(task)
                    const lastIndex = tasks[tasks.length - 1].id;
                    return (
                        <>
                            <details className="dropdown" key={task.id} ref={(e) => {
                                ref.current[index] = e;
                            }}
                                     open={activeIndex === index}
                            >
                                <summary
                                    className={`btn m-1 p-[10px] px-[20px] text-[18px] text-center  rounded-[50%] ${chckedAll ? "bg-green-700" : "bg-orange-500"} text-white border-white border`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        activeIndexChange(index)
                                    }}>
                                    {task.id}
                                </summary>
                                <div
                                    tabIndex={0}
                                    className="dropdown-content card card-compact bg-primary text-primary-content z-[1] w-64 p-2 shadow bg-white">
                                    <div className="card-body">
                                        <h3 className="card-title">{task.title}:</h3>
                                        <div className="form-control">
                                            {task.list.map((item) => (
                                                <label key={item.id} className="label cursor-pointer">
                                                    <span className="label-text">{item.name}</span>
                                                    <input type="checkbox"
                                                           onChange={() => handleCompleted(task.id, item.id)}
                                                           checked={selected[task.id]?.[item.id] || false}
                                                           className="checkbox"/>
                                                </label>
                                            ))}
                                        </div>
                                        <Button text={"Reset"} className={'btn bg-orange-500 rounded-[10px] p-[10px] text-white'} onClick={() => handleReset()}/>
                                    </div>
                                </div>

                            </details>
                            {lastIndex === task.id ? null :
                                (<hr className='w-full mx-auto h-[10px] border-t-2 border-orange-500'/>)}

                        </>

                    )

                })}
            </div>

        </div>

     );
};

export default Map;