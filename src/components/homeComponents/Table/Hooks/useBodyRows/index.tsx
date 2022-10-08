import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MethodType } from "../../../../../types";

const useBodyRows = (body: Array<MethodType>) => {
    const [bodyRows, setBodyRows] = useState<Array<JSX.Element>>(
        [] as Array<JSX.Element>
    );
    const browse = useNavigate();
    useEffect(() => {
        (async() => {
            const elements = await Promise.all(body.map((row, index) => {
                const {title, classification, characteristics} = row;
                return (
                    <tr 
                        onClick={() => browse('/method',{state:row})} 
                        key={index}>
                        <td>{title}</td>
                        <td>{classification}</td>
                        <td>{characteristics}</td>
                    </tr>
                );
            }));
            setBodyRows(elements);
        })();
    },[body, browse]);
    return [bodyRows];
}

export default useBodyRows;