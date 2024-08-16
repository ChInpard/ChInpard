import { v4 as uuidv4 } from 'uuid';


export function createNewPost(value, list, setList, setInputValue, onComplete) {
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

export function deletePost(id, list, setList) {
    const updatedList = list.filter((item) => item.id !== id);
    localStorage.setItem("written", JSON.stringify(updatedList));
    setList(updatedList);
}

export function updatePost(id, newText, list, setList) {
    const updatedList = list.map(todo => 
        todo.id === id ? { ...todo, text: newText } : todo
    );
    setList(updatedList);
    localStorage.setItem("written", JSON.stringify(updatedList));
}