import { useCallback, useEffect, useState } from "react";
import { MethodType } from "../../../../../types";

const useBars = (data: Array<MethodType>, column: keyof MethodType) => {
    const [bars, setBars] = useState<{[key: string]: number}>(
        {} as {[key: string]: number}
    );
    const getUniqueColumn = useCallback(async () => {
        return data.reduce((acc,row) => {
            const chave = row[column];
            acc[chave] = acc[chave]?acc[chave]+1:1;
            return acc
        },{} as {[key: string]: number})
    },[data, column]);
    useEffect(() => {
        (async () => {
            const result = await getUniqueColumn();
            setBars(result);
        })();
    },[getUniqueColumn]);
    return [bars];
}

export default useBars;