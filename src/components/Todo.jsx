import React, { useEffect, useRef, useState } from 'react';
import TodoItem from './TodoItem';

const Todo = () => {

    const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
    const inputRef = useRef();

    //Local Storage Setup
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList));
    }, [todoList]);


    // Task Adding Function
    const addTask = () => {
        const inputText = inputRef.current.value.trim();

        if(inputText === "") {
            return null;
        }

        const newTodo = {
            id: Date.now(),
            text: inputText,
            isCompleted: false,
        };

        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = '';
    }

    //Task Updating Function
    const toggleTask = (id) => {
        setTodoList((prev) => {
            return prev.map((todo) => {
                if(id === todo.id) {
                    return {...todo, isCompleted: !todo.isCompleted}
                }
                return todo;
            })
        })
    }

    //Task Deleting Function
    const deleteTask = (id) => {
        setTodoList((prev) => {
            return prev.filter((todo) => todo.id !== id);
        });
    }

    return (
        <>
            <div className='w-[30-rem] select-none'>

                <h1 className='text-4xl my-3 text-center font-medium text-amber-500'>To-Do List</h1>

                <div className='flex gap-2'>
                    <div className='flex-1'>
                        <input ref={inputRef} type='text' name='input' id='input' className='py-3 px-4 text-[18px] max-xs:text-[12px] w-full border-2 focus:outline-none focus:border-amber-500' placeholder='Add your task here' />
                    </div>

                    <button className='py-3 px-4 max-xs:py-1 max-xs:px-2 max-xs:text-[12px] bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium border-none rounded-sm' onClick={addTask}>Add Task</button>
                </div>

                <p className='my-3 text-sm text-zinc-400 px-1'>Fill Task Details</p>

            </div>

            <div className='w-[30-rem] bg-white shadow py-6 px-4'>

                <fieldset className='space-y-3'>

                    <legend className='text-red-500 font-medium text-lg'>List of Task</legend>

                    {todoList.length === 0 ?
                        (<p className='text-gray-500 text-sm'>No Task Found</p>) :
                        (todoList.map((todo, index) => {
                            return <TodoItem text={todo.text} key={index} isCompleted={todo.isCompleted} id={todo.id} toggleTask={toggleTask} deleteTask={deleteTask} />
                        }))
                    }

                </fieldset>

            </div>
        </>
    )
}

export default Todo