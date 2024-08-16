import { ListItem, Loading } from "./index.js";


export default function List({ list, setList, openModal, isLoading }) {

    return (
        <div className="h-96 border rounded-b-2xl overflow-y-scroll relative">
            {isLoading && <Loading isLoading={isLoading}/>}
            {
                list.map((todo, i) => (
                    <ListItem 
                        todo={todo} key={todo.id} 
                        list={list}
                        setList={setList}
                        openModal={openModal}
                    />
                ))
            }
            
        </div>
    );
}