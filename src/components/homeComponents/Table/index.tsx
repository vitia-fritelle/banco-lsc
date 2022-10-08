import styled from "styled-components";
import { TableType } from "../../../types";
import useBodyRows from "./Hooks/useBodyRows";
import useHeaderRows from "./Hooks/useHeaderRows";

function Table(props: TableType) {

    const {header, body} = props;
    const [headerRows] = useHeaderRows(header);
    const [bodyRows] =  useBodyRows(body);
    return (
        <StyledTable>
            <thead><tr>{headerRows}</tr></thead>
            <tbody>{bodyRows}</tbody>
        </StyledTable>
    );
}

export default Table;

const StyledTable = styled.table`
    border: 1px solid black;
    border-radius: 10px;
    border-collapse: inherit;
    border-spacing: initial;
    tbody{
        tr {
            cursor: pointer;
            td {
                padding: 5px 10px;
            }
        }
        tr:hover {
            background-color: #d7d3e2;
        }
    }
`;