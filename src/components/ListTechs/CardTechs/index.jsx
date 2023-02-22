import { useContext } from "react"
import { TechContext } from "../../../providers/TechContext"

const CardTech = ({tech}) => {

    const { setEditingTech } = useContext(TechContext)

    return(
        <li onClick={() => setEditingTech(tech)}>
            <p>
                {tech.title}
            </p>
            <p>
                {tech.status}
            </p>
        </li>
    )
}

export default CardTech