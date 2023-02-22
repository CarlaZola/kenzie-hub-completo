import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import FormCreateTech from "../../Forms/FormCreateTech";

const ModalCreate = () => {
  const { setIsOpen } = useContext(TechContext);

  return (
    <div className="modal">
      <div role="dialog">
        <div className="modalHeader">
          <h2>Cadastrar Tecnologia</h2>
          <p onClick={() => setIsOpen(false)}>X</p>
        </div>
        <div className="modalBody">
          <FormCreateTech />
        </div>
      </div>
    </div>
  );
};

export default ModalCreate;
