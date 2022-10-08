import { useEffect, useState } from "react";

const useHeaderRows = (header: Array<string>) => {
    const [headerRows, setHeaderRows] = useState<Array<JSX.Element>>(
        [] as Array<JSX.Element>
    );
    useEffect(() => {
        (async() => {
            const elements = await Promise.all(header.map((text) => {
                return <th key={text}>{text}</th>;
            }));
            setHeaderRows(elements);
        })();
    },[header]);
    return [headerRows];
}

export default useHeaderRows;