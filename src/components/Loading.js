import styled, { keyframes } from "styled-components";


export default function Loading({isLoading}) {

    return (
        <LoadingOverlay isLoading={isLoading}>
            <LoadingSpinner />
        </LoadingOverlay>
    );
    
}


const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const LoadingOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    display: ${ ({isLoading}) => isLoading ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;

    &::active {
        display: flex;
    }
`;

const LoadingSpinner = styled.div`
    border: 8px solid #F3F3F3;
    border-top: 8px solid #3498DB;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 1s linear infinite;
`;