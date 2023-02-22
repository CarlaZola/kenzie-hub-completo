import { useContext } from "react"
import { TechContext } from "../../../providers/TechContext"

const ModalDelete = () => {

    const { deletingTech, setDeletingTech, techsDelete, setEditingTech} = useContext(TechContext)

    const remove = () => {
        techsDelete(deletingTech)
        setDeletingTech(null)
        setEditingTech(null)
    }
    
    return(
        <div className="modal">
            <div></div>
            <div className="modalHeader">

            </div>
            <div className="modalBody">
                <p>Tem certeza que deseja excluir tecnologia?</p>
                <button type="button" onClick={() => setDeletingTech(null)}>Cancelar</button>
                <button type="submit" onClick={() => remove()}>Excluir</button>
            </div>
        </div>
    )
}

export default ModalDelete