export type MethodType = {
    title:string, 
    lang:string, 
    author:string, 
    classification:string, 
    description:string, 
    characteristics:string, 
    usage:string, 
    advantages:string, 
    references:string, 
    doi:string
}

export type FilterType<T> = {
    title:T, 
    lang:T, 
    author:T, 
    classification:T,  
    characteristics:T, 
}

export type TableType = {
    header: Array<string>
    body: Array<MethodType>
};

export type DropDownProps = {
    title: string,
    options: Array<string>,
    select: string,
    setSelect: (value:string) => void
};
