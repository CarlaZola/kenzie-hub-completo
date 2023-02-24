import { useContext } from "react"
import { TechContext } from "../../../providers/TechContext"
import StyledCardTechs from "./CardTechs"

const CardTech = ({tech}) => {

    const { setEditingTech } = useContext(TechContext)

    return(
        <StyledCardTechs onClick={() => setEditingTech(tech)}>
            <p>
                {tech.title}
            </p>
            <p>
                {tech.status}
            </p>
        </StyledCardTechs>
    )
}

export default CardTech