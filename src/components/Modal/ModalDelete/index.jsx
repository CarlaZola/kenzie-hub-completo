import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import Button from "../../../styles/button";
import { StyledModalDelete } from "../../../styles/modal";

const ModalDelete = () => {
  const { deletingTech, setDeletingTech, techsDelete, setEditingTech } =
    useContext(TechContext);

  const remove = () => {
    techsDelete(deletingTech);
    setDeletingTech(null);
    setEditingTech(null);
  };

  return (
    <StyledModalDelete className="modal">
      <div role="dialog" className="dialog_div">
        <div className="modalHeader">
            <p>Tem certeza que deseja excluir tecnologia?</p>
            <p  className="btnCloseModal"  onClick={() => setDeletingTech(null)}>X</p>
        </div>
        <div className="modalBody">          
            <div className="boxButton">
                <Button className="btnCancel" type="button" onClick={() => setDeletingTech(null)}>
                Cancelar
                </Button>
                <Button className="btnConfirm" type="submit" onClick={() => remove()}>
                    Excluir
                </Button>
            </div>
        </div>
      </div>
    </StyledModalDelete>
  );
};

export default ModalDelete;
