import { Header, InputSection, List } from "../components/index.js";


export default function ToDoList({ list, setList, openModal }) {

    const title = '일정관리';


    return (
        <div className="w-11/12 my-12 mx-auto max-w-screen-sm" >
            <Header title={title} />
            <InputSection 
                list={list}
                setList={setList}
            />
            <List 
                list={list}
                setList={setList} 
                openModal={openModal}
            />
        </div>
    );
}