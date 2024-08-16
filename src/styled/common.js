import styled from "styled-components";


export const Title = styled.header`
    padding: 16px 0;
    background-color: #B6A3FF;

    font-size: 24px;
    color: #FFFFFF;
    text-align: center;
`;

export const Input = styled.input`
    background-color: ${({bgColor}) => bgColor };

    font-size: 16px;
    color: ${({color}) => color };
    padding: 12px 24px;
    box-sizing: border-box;
    border-radius: 0;
    
    border: none;
    &::placeholder {
        color: #FFFFFF;
        opacity: 0.6;
    }
    &:focus {
        outline: none;
    }
`;

export const IconButton = styled.button`
    background-color: ${ ({bgColor}) => bgColor };
    padding: 12px 20px;
    border: none;

    font-weight: 700;
    color: ${ ({color}) => color };
`;

export const TextButton = styled.button`
    background-color: ${ ({bgColor}) => bgColor };
    padding: 4px 12px;
    border: none;
    border-radius: 8px;

    color: ${ ({color}) => color };
`;

export const CheckInput = styled.input`
    &:checked {
        border-color: transparent;
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: violet;
    }
`

export const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ToDoList = styled.section``;

export const Content = styled.p`
    overflow-wrap: anywhere;
`;