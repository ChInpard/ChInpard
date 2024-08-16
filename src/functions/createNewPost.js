import { v4 as uuidv4 } from 'uuid';


export default function createNewPost(value, list, setList, setInputValue, onComplete) {
    
    if (value) {
        const newTodo = {
            id: uuidv4(),
            text: value,
            checked: false
        };

        const newList = [...list, newTodo];
        localStorage.setItem("written", JSON.stringify(newList));
        setList(newList);
        setInputValue('');

        if (onComplete) {
            onComplete();
        } 
    }

}