import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Table from "../../components/homeComponents/Table";
import { FilterType } from "../../types";
import useData from "./Hooks/useData";
import useCharts from "./Hooks/useCharts";
import useDropDowns from "./Hooks/useDropDowns";
import styled from "styled-components";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2
        }
    }
}

function Home() {
    
    const [dados] = useData();
    const [filters, setFilters] = useState<FilterType<string>>({
        title: 'tudo',
        lang: 'tudo',
        author: 'tudo',
        classification: 'tudo',
        characteristics: 'tudo'
    });
    const corpo = useMemo(() => dados.slice(1),[dados]);
    const [dropdowns] = useDropDowns(corpo, filters, setFilters);
    const [charts] = useCharts(corpo);
    const filteredData = useMemo(() => {
        return corpo.filter((data) => {
            const keys: [keyof FilterType<string>] = (
                Object.keys(filters) as [keyof FilterType<string>]
            );
            return keys.every((key) => {
                const value = filters[key];
                return value === 'tudo'?true:data[key].toLowerCase() === value;
            });
        });
    },[filters, corpo]);
    return (
        <Container>
            <LeftContainer>
                <motion.ul 
                    variants={container}
                    animate={{
                        display:"flex",
                        flexFlow: "row wrap",
                        justifyContent: "space-around",
                        alignItems: "center",
                        gap: "20px",
                        margin: "10px"
                    }}>
                    {dropdowns}
                </motion.ul>
                <Table 
                    header={["Título","Classificação","Característica"]} 
                    body={filteredData}/>
            </LeftContainer>
            <RightContainer>
                <ul>
                    {charts}
                </ul>
            </RightContainer>
        </Container>
    );
}

export default Home

const Container = styled.main`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    height: 100%;
    padding: 10px 20px;
`;

const LeftContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    height: 100%;
    gap: 20px;
    width: 50%;
`;

const RightContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    height: 100%;
    gap: 20px;
    width: 50%;
`;