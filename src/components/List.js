import { ListItem } from "./index.js";


export default function List({ list, setList, openModal }) {
    
    return (
        <div className="h-96 border rounded-b-2xl">
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