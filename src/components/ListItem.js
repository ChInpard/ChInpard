import { useState } from 'react';
import { CheckBox, ToDo, Edit, Delete } from './index.js'
import { deletePost } from '../utils/functions.js';
import { useUpdateCheckedState } from '../hooks/index.js';


export default function ListItem({ todo, list, setList, openModal }) {
    
    const [isChecked, setIsChecked] = useState(todo.checked);

    useUpdateCheckedState(isChecked, todo, list, setList);

    const removeTodo = () => deletePost(todo.id, list, setList);


    return (
        <div className="flex justify-center items-center py-4 px-2 gap-5 border border-x-0 border-t-0 border-gainsboro hover:bg-gray-100">
            <CheckBox 
                className="w-1/6" width={'w-1/12'} 
                isChecked={isChecked} 
                onChange={() => setIsChecked(!isChecked)}
            />
            <ToDo 
                className="w-3/4" 
                width={'w-8/12'}
                todo={todo.text} 
                isChecked={isChecked} 
            />
            <Edit 
                className="w-1/6" 
                width={'w-1/12'}
                onClick={() => openModal(todo)} 
            />
            <Delete 
                className="w-1/6" 
                width={'w-1/12'}
                onClick={() => removeTodo()}
            />
        </div>
    );
    
}