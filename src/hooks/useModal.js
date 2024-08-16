import { useState } from "react";


export function useModal() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);

    
    function openModal(todo) {
        setSelectedTodo(todo);
        setIsModalVisible(true);
    }

    function closeModal() {
        setIsModalVisible(false);
        setSelectedTodo(null);
    }

    return {
        isModalVisible,
        selectedTodo,
        openModal,
        closeModal,
    };

}