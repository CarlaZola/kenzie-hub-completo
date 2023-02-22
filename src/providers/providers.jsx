import TechProvider from "./TechContext"
import UserProvider from "./UserContext"

const Providers = ({children}) => {

    return(
        <UserProvider>           
            {children}           
        </UserProvider>
    )
}

export default Providers