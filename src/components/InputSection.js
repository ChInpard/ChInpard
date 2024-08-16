import { TextInput, Button } from "./index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { createNewPost } from "../functions/index.js";
import { useState } from "react";


export default function InputSection({ list, setList }) {

    // TextInput
    const inputBgColor = '#323232';
    const inputColor = '#FFFFFF'

    // ButtonSmall
    const buttonBgColor = '#999999';
    const buttonColor = '#FFFFFF'
    const content = <FontAwesomeIcon icon={faPlus} />;


    const [ inputValue, setInputValue ] = useState("");


    return (
        <div className="flex">
            <TextInput 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        createNewPost(inputValue, list, setList, setInputValue);
                    }
                }}
                bgColor={inputBgColor}
                color={inputColor}
            />
            <Button 
                onClick={() => createNewPost(inputValue, list, setList, setInputValue)}
                bgColor={buttonBgColor}
                color={buttonColor}
                content={content}
            />
        </div>
    );
}