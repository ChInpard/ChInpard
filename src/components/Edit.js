import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";


export default function Edit({width, onClick}) {

    return (
        <div className={`${width} flex justify-end`} onClick={onClick}>
            <FontAwesomeIcon icon={faPenToSquare} className="cursor-pointer" />
        </div>
    );
    
}
