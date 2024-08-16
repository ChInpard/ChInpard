import { useEffect, useState } from "react";


export function useGetList(key) {

    const [ list, setList ] = useState([]);

    
    useEffect(() => {
        const storedList = localStorage.getItem(key);

        if (storedList) {
            try {
                const parsedList = JSON.parse(storedList);
                if (Array.isArray(parsedList)) {
                    setList(parsedList);
                }
            } catch(error) {
                console.error("에러남", error);
            }
        }
    }, [key]);

    return [ list, setList ];

}