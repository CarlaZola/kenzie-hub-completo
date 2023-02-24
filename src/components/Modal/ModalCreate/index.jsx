import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import {Modal} from "../../../styles/modal";
import FormCreateTech from "../../Forms/FormCreateTech";

const ModalCreate = () => {
  const { setIsOpen } = useContext(TechContext);

  return (
    <Modal className="modal">
      <div role="dialog" className="dialog_div">
        <div className="modalHeader">
          <h2>Cadastrar Tecnologia</h2>
          <p className="btnCloseModal" onClick={() => setIsOpen(false)}>X</p>
        </div>
        <div className="modalBody">
          <FormCreateTech />
        </div>
      </div>
    </Modal>
  );
};

export default ModalCreate;
