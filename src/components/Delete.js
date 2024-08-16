import { Circle } from "../styled/common.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";


export default function Delete({ width, onClick }) {
    return (
        <div className={`${width} flex justify-center items-center`}>
            <Circle 
                onClick={onClick}
                className={`w-5 h-5 border border-red-500 rounded-full cursor-pointer`}>
                <FontAwesomeIcon icon={faMinus} className="text-red-500"/>
            </Circle>
        </div>
    );
}