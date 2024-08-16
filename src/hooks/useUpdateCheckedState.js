import { useEffect } from "react";


export function useUpdateCheckedState(isChecked, todo, list, setList) {

    useEffect(() => {
        const updatedList = list.map(item => 
            item.id === todo.id ? { ...item, checked: isChecked } : item
        );
        setList(updatedList);
        localStorage.setItem('written', JSON.stringify(updatedList));
    }, [isChecked, list, setList, todo.id]);

}