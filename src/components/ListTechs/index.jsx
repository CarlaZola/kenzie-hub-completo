import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"
import CardTech from "./CardTechs"
import StyledListTechs from "./listTechs"

const ListTechs = () => {

    const { techs } = useContext(TechContext)

    return(
        <StyledListTechs>
            {techs.map((tech) => {
                return <CardTech key={tech.id} tech={tech}/>
            })}
        </StyledListTechs>
    )
}

export default ListTechs