import { Title } from "../styled/common.js";


export default function Header({title}) {

    return (
        <Title className="rounded-t-2xl">
            {title}
        </Title>
    );
}