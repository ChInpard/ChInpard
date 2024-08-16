import { useEffect } from "react";


export function useUpdateCheckedState(isChecked, todo, list, setList) {

    useEffect(() => {
        const updatedList = list.map(item => 
            item.id === todo.id ? { ...item, checked: isChecked } : item
        );
        
        const isListUpdated = JSON.stringify(updatedList) !== JSON.stringify(list);
        
        if (isListUpdated) {
            setList(updatedList);
            localStorage.setItem('written', JSON.stringify(updatedList));
        }
    }, [isChecked, todo.id]);

}