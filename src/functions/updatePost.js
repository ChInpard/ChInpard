export default function updatePost(id, newText, list, setList) {

    const updatedList = list.map(todo => 
        todo.id === id ? { ...todo, text: newText } : todo
    );
    setList(updatedList);
    localStorage.setItem("written", JSON.stringify(updatedList));

}