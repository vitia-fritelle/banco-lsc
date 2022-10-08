import { useEffect, useState } from "react";
import Axios from "../../../../adapters";
import { MethodType } from "../../../../types";

const useData = () => {
    const [dados, setDados] = useState<Array<MethodType>>(
        [] as Array<MethodType>
    ); 
    useEffect(() => {
        const promise = Axios.get('/');
        promise.then(({data}) => {
            const rows = data.values.map((row: Array<string>) => {
                const [
                    title, 
                    lang, 
                    author, 
                    classification, 
                    characteristics, 
                    description, 
                    usage, 
                    advantages, 
                    references, 
                    doi
                ] = row;
                return {
                    title,
                    lang, 
                    author, 
                    classification, 
                    characteristics, 
                    description, 
                    usage, 
                    advantages, 
                    references, 
                    doi
                };
            });
            setDados(rows);
        })
        promise.catch(() => {
            console.error('Houston, we have a problem!')
        })
    },[]);
    return [dados];
}

export default useData;