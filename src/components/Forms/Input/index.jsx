import { forwardRef, useState } from "react"
import StyledFieldset from "./input"


const Input = ({type, name, label, id, placeholder, error, disabled, ...rest}, ref) => {

    return(
        <StyledFieldset>
            <label htmlFor={id}>{label}</label>
            <input type={type} name={name} id={id} placeholder={placeholder} {...rest} ref={ref} disabled={disabled}/>
            {error  ? <p>{error}</p> : null}
        </StyledFieldset>
    )
}

export default forwardRef(Input)