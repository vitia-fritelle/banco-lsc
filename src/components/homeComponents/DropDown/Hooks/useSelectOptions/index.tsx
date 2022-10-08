import { useEffect, useState } from "react";

const useSelectOptions = (options: Array<string>) => {
    const [selectOptions, setSelectOptions] =  useState<Array<JSX.Element>>(
        [] as Array<JSX.Element>
    );
    useEffect(() => {
        (async () => {
            const elements = await Promise.all(options.map((texto) => {
                return(
                    <option 
                        key={texto.toLowerCase()} 
                        value={texto.toLowerCase()}>
                        {texto}
                    </option>
                );
            }));
            setSelectOptions(elements);
        })();
    },[options]);
    return [selectOptions];
};
export default useSelectOptions;