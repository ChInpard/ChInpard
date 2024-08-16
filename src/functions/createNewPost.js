import { v4 as uuidv4 } from 'uuid';


export default function createNewPost(value, list, setList, setInputValue) {
    
    if (value) {
        const newTodo = {
            id: uuidv4(),
            text: value,
            checked: false
        };

        const current = [...list, newTodo];
        localStorage.setItem("written", JSON.stringify(current));
        setList(current);
        setInputValue("");
    }

}