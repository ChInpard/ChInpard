import { IconButton, TextButton } from "../styled/common.js";


export default function Button({ bgColor, color, onClick, content }) {

    return (
        content.length >= 2
        ?
        <TextButton
            onClick={onClick}
            bgColor={bgColor}
            color={color}>
                {content}
        </TextButton>
        :
        <IconButton
            onClick={onClick}
            bgColor={bgColor}
            color={color}>
                {content}
        </IconButton>

    );
}