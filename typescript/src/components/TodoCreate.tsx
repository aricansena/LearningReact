import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice'
import { TodoType } from '../types/Type';

function TodoCreate() {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState<string>('');

    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert("Todo Giriniz.")
            return;
        }
        const payload: TodoType = {
            id: Math.floor(Math.random() * 9999),
            content: newTodo
        }
        dispatch(createTodo(payload))
        setNewTodo('');
    }

    return (
        <div className='flex-column todo-create'>
            <input value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} className='input-create-todo' type='text' placeholder='Todo Giriniz' />
            <button onClick={handleCreateTodo} className='todo-button'>Oluştur</button>
        </div>
    )
}

export default TodoCreate