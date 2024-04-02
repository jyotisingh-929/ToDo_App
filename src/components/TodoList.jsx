import React from 'react';
import { TiPencil } from "react-icons/ti";
import { BsTrash } from "react-icons/bs";

const TodoList = ({ todos, handleCompleteTodo, handleDeleteTodo, handleEditTodo }) => {
    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id} className={`flex justify-between items-center text-justify bg-black max-w-[550px] text-white p-2 rounded-md mx-10 m-4 ${todo.completed ? 'text-lime-500' : ''}`}>
                    <div className='flex items-center'>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleCompleteTodo(todo.id)}
                            className="mr-2 cursor-pointer"
                        />
                        <p className='text-ellipsis overflow-hidden'>{todo.title}</p>
                    </div>
                    <div>
                        <button className="bg-blue-500 text-white p-1 rounded-md ml-2" onClick={() => handleEditTodo(todo)}>
                            <TiPencil />
                        </button>
                        <button className="bg-red-500 text-white p-1 rounded-md ml-2" onClick={() => handleDeleteTodo(todo.id)}>
                            <BsTrash />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
