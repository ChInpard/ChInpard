export default function deletePost(id, list, setList) {

    const updatedList = list.filter((item) => item.id !== id);
    localStorage.setItem("written", JSON.stringify(updatedList));
    setList(updatedList);

}