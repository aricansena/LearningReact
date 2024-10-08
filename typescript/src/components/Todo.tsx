import React, { useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { IoCheckmarkDone } from "react-icons/io5";

import { TodoType } from '../types/Type';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodoById } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {
    const { id, content } = todoProps;
    const dispatch = useDispatch();
    const [editable, setEditable] = useState<boolean>(false);
    const [newtodo, setNewTodo] = useState<string>(content);
    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id))
    }
    const handleUpdateTodo = () => {
        const payload: TodoType = {
            id: id,
            content: newtodo
        }
        dispatch(updateTodoById(payload))
        setEditable(false)
    }
    return (
        <div className='todos flex-space-between'>
            {editable ? <input className='edit-todo-input' type='text'
                value={newtodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
            ></input> : <div>{content}</div>}
            <div>
                <CiCircleRemove onClick={handleRemoveTodo} className='icon' />
                {editable ? <IoCheckmarkDone onClick={handleUpdateTodo} className='icon' /> : <CiEdit onClick={() => setEditable(!editable)} className='icon' />}
            </div>
        </div>
    )
}

export default Todo