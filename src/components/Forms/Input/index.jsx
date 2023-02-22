import { forwardRef, useState } from "react"


const Input = ({type, name, label, id, placeholder, error, disabled, ...rest}, ref) => {

    return(
        <fieldset>
            <label htmlFor={id}>{label}</label>
            <input type={type} name={name} id={id} placeholder={placeholder} {...rest} ref={ref} disabled={disabled}/>
            {error  ? <p>{error}</p> : null}
        </fieldset>
    )
}

export default forwardRef(Input)