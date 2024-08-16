import { Input } from "../styled/common.js";


export default function TextInput({ value, onChange, onKeyUp, bgColor, color }) {

    return (
        <Input 
            type="text"
            value={value}
            onChange={onChange}
            onKeyUp={onKeyUp}
            placeholder="할 일을 입력해주세요." 
            className="w-full"
            bgColor={bgColor}
            color={color}
        />
    );
    
}