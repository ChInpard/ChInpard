import { CheckInput } from "../styled/common.js";


export default function CheckBox({ width, isChecked, onChange}) {

    return (
        <div className={`${width} flex justify-center`}>
            <CheckInput 
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
                className="w-6 h-6 border border-gainsboro rounded-md appearance-none cursor-pointer"
            />
        </div>
    );
    
}