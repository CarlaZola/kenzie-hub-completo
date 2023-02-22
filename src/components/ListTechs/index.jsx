import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"
import CardTech from "./CardTechs"

const ListTechs = () => {

    const { techs } = useContext(TechContext)

    return(
        <ul>
            {techs.map((tech) => {
                return <CardTech key={tech.id} tech={tech}/>
            })}
        </ul>
    )
}

export default ListTechs