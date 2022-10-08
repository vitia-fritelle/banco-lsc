import { useEffect, useState } from "react";
import { MethodType } from "../../../../types";
import { motion } from "framer-motion";
import styled from "styled-components";

const options: MethodType = {
    title: 'Título',
    lang: 'Idioma',
    author: 'Autor',
    classification: 'Classificação',
    characteristics: 'Características',
    description: 'Descrição',
    usage: 'Aplicação',
    advantages: 'Vantagens & Desvantagens',
    references: 'Referência',
    doi: 'DOI'
}

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const useItems = (row: MethodType ) => {
    const [items, setItems] = useState<Array<JSX.Element>>(
        [] as Array<JSX.Element>
    );
    useEffect(() => {
        (async() => {
            const result = await Promise.all(
                Object.entries(row).map(async (pair) => {
                    const [key,text] = pair;
                    return (
                        <motion.li 
                            key={key} 
                            variants={item}
                            animate={{
                                border: "1px solid black",
                                borderRadius: "10px",
                                display: "flex",
                                flexFlow: "column nowrap",
                                padding: "15px 10px 20px 10px",
                                boxShadow: "5px 5px 20px 1px #000000",
                                opacity: "1"
                            }}>
                            <StyledHeader>{options[key as keyof MethodType]}</StyledHeader>
                            <p>{text}</p>
                        </motion.li>
                    );
                })
            );
            setItems(result);
        })();
    },[row]);
    return [items];
};

export default useItems;

const StyledHeader = styled.header`
    font-weight: 600;
    margin-bottom: 5px;
`;