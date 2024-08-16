import { Content } from "../styled/common.js";


export default function ToDo({ todo, isChecked, width }) {

    return (
        <Content className={`${width} text-left /*overflow-x-scroll*/ ${isChecked ? 'line-through text-gray-500' : ''}`}>
            {todo}
        </Content>
    );
    
}