import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import DropDown from "../../../../components/homeComponents/DropDown";
import { FilterType, MethodType } from "../../../../types";

const titles: FilterType<string> = {
    title: 'Título',
    lang: 'Idioma',
    author: 'Autor',
    classification: 'Classificação',
    characteristics: 'Caracteristica',
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const useDropDowns = (
    dados: Array<MethodType>, 
    filters: FilterType<string>, 
    setFilters: React.Dispatch<React.SetStateAction<FilterType<string>>>) => {

    const [dropdowns, setDropdowns] = useState<Array<JSX.Element>>(
        [] as Array<JSX.Element>
    );
    const options = useMemo(() => {
        return dados.reduce(async (accum,row) => {
            const acc: FilterType<Set<string>> =  await accum;
            const keys: [keyof FilterType<string>] = (
                Object.keys(titles) as [keyof FilterType<string>]
            );
            await Promise.all(keys.map((key) => {
                const addKey = async () => {
                    if(!acc[key]) {
                        acc[key] = new Set<string>();
                    }
                    acc[key].add(row[key]);
                }
                return addKey();
            }));
            return acc;
        },{} as Promise<FilterType<Set<string>>>);
    },[dados]);
    useEffect(() => {
        (async () => {
            const keys: [keyof FilterType<string>] = (
                Object.keys(filters) as [keyof FilterType<string>]
            );
            const elements = await Promise.all(keys.map(async (key) => {
                const option = (await options)[key];
                return (
                    <motion.li 
                        className='dropdown' 
                        key={key}
                        variants={item}>
                        <DropDown
                            title={titles[key]}
                            options={option ? Array.from(option) : ['']}
                            select={filters[key]}
                            setSelect={(value: string) => {
                                setFilters({ ...filters, [key]: value });
                            }}/>
                    </motion.li>
                );
            }));
            setDropdowns(elements);
        })();
    },[filters, options, setFilters]);
    return [dropdowns];
}

export default useDropDowns;