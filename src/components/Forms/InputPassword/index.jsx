import { forwardRef, useRef, useState } from "react"
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";

const InputPassword = ({type, name, label, id, placeholder, button, error, hiddenOrShowPass, ...rest}, ref) => {

     const [visible, setVisible] = useState(false)

    const showPassword = useRef(null)

    const clickToShowPassword = () => {
        if(showPassword.current.children[0].type === "password") {
            showPassword.current.children[0].type = "text" 
            setVisible(true)
        }
        else{
            showPassword.current.children[0].type = "password" 
            setVisible(false)
        }              
    }

    return(
        <fieldset>
            <label htmlFor={id}>{label}</label>
            <div className="contentInput" ref={showPassword}>
                <input
                type={type}
                name={name}
                id={id}
                {...rest}
                placeholder={placeholder}
                ref={ref}
                />
                {button ? (
                <button type="button" onClick={() => clickToShowPassword()}>
                    {visible ? (
                    <BsFillEyeSlashFill color="white" />
                    ) : (
                    <BsFillEyeFill color="white" />
                    )}
                </button>
                ) : null}
            </div>
        </fieldset>
    )
}

export default forwardRef(InputPassword)