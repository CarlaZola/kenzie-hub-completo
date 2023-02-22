import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyle = styled(Link)`
    height: 3rem;
    border-radius: .25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-grey-0);
    border: none;
    cursor: pointer;
    background-color: var(--color-grey-100);
    font-size: var(--font1);
    padding: .3125rem 1rem;
`

export default LinkStyle