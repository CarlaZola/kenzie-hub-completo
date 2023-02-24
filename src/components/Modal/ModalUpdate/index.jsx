import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import { Modal } from "../../../styles/modal";
import FormUpdateTech from "../../Forms/FormUpdateTech";

const ModalUpdate = () => {
  const { setEditingTech } = useContext(TechContext);

  return (
    <Modal className="modal">
      <div role="dialog" className="dialog_div">
        <div className="modalHeader">
          <p>Tecnologia Detalhes</p>
          <p className="btnCloseModal" onClick={() => setEditingTech(null)}>
            X
          </p>
        </div>
        <div className="modalBody">
          <FormUpdateTech />
        </div>
      </div>
    </Modal>
  );
};

export default ModalUpdate;
