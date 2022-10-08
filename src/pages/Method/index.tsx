import { useLocation, useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { MethodType } from "../../types";
import useItems from "./Hooks/useItems";
import { motion } from "framer-motion";

const container = {
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

function Method() {

    const location = useLocation();
    const browse = useNavigate();
    const row = location.state as MethodType;
    const [items] = useItems(row);
    return (
        <>
            <BsFillArrowLeftCircleFill
                onClick={() => browse(-1)}
                style = {{
                    fontSize: "1.5em",
                    marginLeft: "10px",
                    marginTop: "10px",
                    cursor: "pointer"
                }}/>
            <motion.ul
                variants={container}
                initial="hidden"
                animate={{
                    display: "flex",
                    flexFlow: "row wrap",
                    alignItems: "center",
                    justifyContent: "space-around",
                    gap: "50px",
                    margin: "0 30px"
                }}>
                {items}
            </motion.ul>
        </>
    );
}

export default Method;