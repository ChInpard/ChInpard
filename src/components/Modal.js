import styled from "styled-components";
import Button from "./Button.js";
import { useEffect } from "react";


export default function Modal({ 
    modalBgColor, 
    modalTextColor, 
    title, 
    input, 
    setInput, 
    buttonBgColor, 
    buttonTextColor, 
    buttonContent,
    isModalVisible,
    closeModal,
    selectedTodo,
    onClick
}) {

    useEffect(() => {
        if (selectedTodo) {
            setInput(selectedTodo.text);
        }
    }, [selectedTodo]);


    return (
        <ModalBackGround
            onClick={closeModal}
            isModalVisible={isModalVisible}
        >
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <ModalTitle 
                    bgColor={modalBgColor}
                    color={modalTextColor}>
                        {title}
                </ModalTitle>
                <ModalContent
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button
                    onClick={onClick}
                    bgColor={buttonBgColor}
                    color={buttonTextColor}
                    content={buttonContent}
                />
            </ModalContainer>
        </ModalBackGround>
    );
}


const ModalBackGround = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 30px;

    display: flex;
    justify-content: center;

    position: fixed;
    top: 0;
    z-index: 10;

    visibility: ${ ({isModalVisible}) => isModalVisible ? 'visible' : 'hidden'};
    opacity: ${ ({isModalVisible}) => isModalVisible ? '1' : '0'};
    transition: all 0.5s;
`;

const ModalContainer = styled.section`
    min-width: 290px;
    min-height: 195px;
    background-color: white;

    border-radius: 1rem;

    position: fixed;
    top: 270px;
`;

const ModalTitle = styled.h1`
    width: 100%;
    background-color: ${ ({bgColor}) => bgColor };
    padding: 4px 0;

    font-size: 24px;
    font-weight: 700;
    color: ${ ({color}) => color };

    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
`;

const ModalContent = styled.input`
    width: 70%;
    padding: 2px;
    margin: 40px auto 30px auto;
    display: block;
    border-bottom-width: 1px;
    border-color: #B6A3FF;

    &:focus {
        outline: none;
    }
`;