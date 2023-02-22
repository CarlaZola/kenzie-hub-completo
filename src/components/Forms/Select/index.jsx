import { forwardRef } from "react"

const Select = ({type, name, label, id, placeholder, error, array, ...rest}, ref) => {
    
    
    return(
        <fieldset>
            <label htmlFor={id}>{label}</label>
            <select name={name} id={id} placeholder={placeholder} {...rest} ref={ref}>
                <option value="">Selecione o módulo</option>
                {
                    array.map((element) => {
                        return <option key={element.value} value={element.value}>{element.value}</option>
                    })
                }
            </select>
            {error ? <p>{error}</p> : null}
        </fieldset>
    )
}
 
export default forwardRef(Select)