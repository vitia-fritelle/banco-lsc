import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        text-decoration: none;
        padding: 0;
        margin: 0;
    }
    html, body, #root {
        height: 100%;
        width: 100%;
        background-color: #fff;    
    }
    :root {
            --fonte-primaria: 'Inter', sans-serif;  
            --fonte-secundaria: 'DM Serif Display', serif;
            --cor-primaria: #0062E3;
            --cor-secundaria: #FFF;
            --cor-terciaria: #FF4791;
    }
`;