import styled from "styled-components";
import { DropDownProps } from "../../../types";
import useSelectOptions from "./Hooks/useSelectOptions";

function DropDown (props: DropDownProps) {

    const {title, options, select, setSelect} = props;
    const [selectOptions] = useSelectOptions(options);
    return (
        <StyledDropDown>
            <header>{title}</header>
            <select 
                name={title} 
                id={title}
                value={select.toLowerCase()}
                onChange={(e) => setSelect(e.target.value)}>
                <option 
                    key='tudo' 
                    value='tudo'>
                    Tudo
                </option>
                {selectOptions}
            </select>
        </StyledDropDown>
    );
}

export default DropDown;

const StyledDropDown = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    flex-flow: column nowrap;
    padding: 15px 10px 20px 10px;
    box-shadow: 5px 6px 15px 1px #000000;
`;