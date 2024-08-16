import { useState } from "react";
import { Header, InputSection, List } from "../components/index.js";


export default function ToDoList({ list, setList, openModal }) {

    const title = '일정관리';

    const [ isLoading, setIsLoading ] = useState(false);


    return (
        <div className="w-11/12 my-12 mx-auto max-w-screen-sm" >
            <Header title={title} />
            <InputSection 
                list={list}
                setList={setList}
                setIsLoading={setIsLoading}
            />
            <List 
                list={list}
                setList={setList} 
                openModal={openModal}
                isLoading={isLoading}
            />
        </div>
    );
}