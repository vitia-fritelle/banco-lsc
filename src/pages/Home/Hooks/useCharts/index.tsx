import { useEffect, useState } from "react";
import BarChart from "../../../../components/homeComponents/BarChart";
import { MethodType } from "../../../../types";

const labels = {
    characteristics: 'Características',
    classification: 'Classificação',
}

const useCharts = (dados: Array<MethodType>) => {
    const [charts, setCharts] = useState<Array<JSX.Element>>(
        [] as Array<JSX.Element>
    );
    useEffect(() => {
        (async() => {
            const result = await Promise.all(
                Object.entries(labels).map((label) => {
                    const [key, value] = label;
                    return (
                        <li key={key}>
                            <BarChart
                                label={value}
                                data={dados}
                                column={key as keyof MethodType}/>
                        </li>
                    );
                })
            );
            setCharts(result);
        })();
    },[dados]);
    return [charts];
}

export default useCharts;
