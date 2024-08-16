import { useState } from "react";
import { ToDoList, Modal } from "../components/index.js";
import { useModal } from "../hooks/index.js";
import { useGetList } from "../hooks/index.js";
import { updatePost } from "../functions/index.js";


export default function ToDoListPage() {

    // Modal 
    const title = '수정하기';
    const [ input, setInput ] = useState();
    const modalBgColor = '#B6A3FF';
    const modalTextColor = '#FFFFFF';

    // Button in Modal
    const buttonBgColor = '#B6A3FF';
    const buttonTextColor = '#FFFFFF';
    const buttonContent = '수정';


    const { isModalVisible, selectedTodo, openModal, closeModal } = useModal();
    const [ list, setList ] = useGetList("written");


    return (
        <div>
            <Modal 
                title={title}
                input={input}
                setInput={setInput}
                modalBgColor={modalBgColor}
                modalTextColor={modalTextColor}

                buttonBgColor={buttonBgColor}
                buttonTextColor={buttonTextColor}
                buttonContent={buttonContent}
                isModalVisible={isModalVisible}
                closeModal={closeModal}
                selectedTodo={selectedTodo}
                onClick={() => { 
                    updatePost(selectedTodo.id, input, list, setList); 
                    closeModal(); 
                }}
            />
            
            <ToDoList list={list} setList={setList} openModal={openModal} />
        </div>
    );
    
}