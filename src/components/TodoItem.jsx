import React from 'react'

const TodoItem = ({ text, isCompleted, id, toggleTask, deleteTask }) => {
    return (
        <div className='flex justify-between items-center gap-2 max-xs:text-[12px]'>
            <label className={`hover:bg-slate-100 flex-1 p-2 rounded-md cursor-pointer select-none ${isCompleted ? 'line-through text-slate-400' : ''}`} onClick={() => toggleTask(id)}>{text}</label>

            <div>
                <div onClick={() => deleteTask(id) }>
                    <svg className='hover:fill-red-500  hover:bg-red-100 size-[26px] p-1 rounded-md cursor-pointer' xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </div>
            </div>
        </div>
    )
}

export default TodoItem